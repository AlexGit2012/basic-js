const CustomError = require("../extensions/custom-error");

const chainMaker = {
    linkArr: [],
    result: "",
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
        this.result = this.linkArr.map(el => `( ${el} )`).join("~~")
        this.linkArr = []
        return this.result
    }
};

module.exports = chainMaker;
