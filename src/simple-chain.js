const CustomError = require("../extensions/custom-error");

const chainMaker = {
    linkArr: [],
    tempArr: [],
    getLength() {
        return this.linkArr.length
    },
    addLink(value) {
        if (value === undefined) this.linkArr.push(``)
        else this.linkArr.push(`${value}`)
        return this
    },
    removeLink(position) {
        if (isNaN(position)) {
            this.linkArr = []
            return this
        }
        if (position - 1 < 0) {
            this.linkArr = []
            throw new Error("Error")
            return this
        }
        this.linkArr.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this.linkArr.reverse()
        return this
    },
    finishChain() {
        this.tempArr.push(this.linkArr.map(el => `( ${el} )`).join("~~"))
        this.linkArr = []
        return this.tempArr.pop();
    }
};

module.exports = chainMaker;
