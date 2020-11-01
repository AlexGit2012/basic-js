const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false
    let secretName = "";
    members.map(el=>{
        if (typeof el === "string") secretName+=el.trim().toUpperCase()[0]; else return false
    })

    if (secretName.length===0) return false

    return secretName
        .split("")
        .sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
        })
        .join("")


    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here
};
