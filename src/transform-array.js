const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("It is not an array")

    let tempArr = [...arr]
    let resArr = []

    for (let i = 0; i < arr.length; i++) {


        if (tempArr[i] === "--discard-next") {
            if ((i + 1) === arr.length) continue;
            tempArr[i + 1] = "deleted"
            resArr.push(tempArr[i + 1])
            continue
        }
        if (tempArr[i] === "--discard-prev") {
            if (resArr.length === 0) {
                resArr.push("deleted")
                continue
            }
            resArr[i - 1] = "deleted"
            resArr.push("deleted")
            if (resArr[resArr.length - 1] !== "deleted") resArr[resArr.length - 1] = "deleted"
            continue
        }
        if (tempArr[i] === "--double-next") {
            if ((i + 1) === arr.length) continue;
            resArr.push(tempArr[i + 1])
            continue
        }
        if (tempArr[i] === "--double-prev") {
            if (resArr.length === 0) {
                resArr.push("deleted")
                continue;
            }
            if (!resArr[i - 1]&&(resArr[i - 1]!==0&&resArr[i - 1]!==false&&!isNaN(resArr[i - 1]))) {
                resArr.push("deleted")
                continue;
            }
            resArr.push(resArr[i - 1])
            continue
        }
        resArr.push(tempArr[i])
    }

    resArr = resArr.filter(el => el !== "deleted")

    return resArr
    //
    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here
};
