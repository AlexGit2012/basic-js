const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.square = {};
    this.alpabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    this.alpabetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(str, word) {

    let arrStr = str.split("");
    let wordStr = word.split("");
    let newText = "";
    let strSpaceCount = 0;
    let wordSpaceCount = 0;

    if (word.length<str.length) {
      wordStr = word.repeat(Math.ceil(str.length/word.length)).split("")
      wordStr.length=str.length;
    } else wordStr.length=arrStr.length;


    for (let i = 0; i<arrStr.length; i++) {
      if (this.alpabetStr.indexOf(arrStr[i].toUpperCase())===-1) {
        newText+=arrStr[i];
        strSpaceCount++;
        continue
      }
      if (this.alpabetStr.indexOf(wordStr[i].toUpperCase())===-1) {
        newText+=arrStr[i];
        continue
      }

      newText += this.alpabet[this.alpabetStr.indexOf(arrStr[i].toUpperCase())+this.alpabetStr.indexOf(wordStr[i-strSpaceCount].toUpperCase())]

    }

    if (this.isDirect) return newText;
    else return newText.split("").reverse().join("")


  }
  decrypt(str,word) {
    let arrStr = str.split("");
    let wordStr = word.split("");
    let newText = "";
    let strSpaceCount = 0;
    let wordSpaceCount = 0;
    let index;

    if (word.length<str.length) {
      wordStr = word.repeat(Math.ceil(str.length/word.length)).split("")
      wordStr.length=str.length;
    } else wordStr.length=arrStr.length;


    for (let i = 0; i<arrStr.length; i++) {
      if (this.alpabetStr.indexOf(arrStr[i].toUpperCase())===-1) {
        newText+=arrStr[i];
        strSpaceCount++;
        continue
      }
      if (this.alpabetStr.indexOf(wordStr[i].toUpperCase())===-1) {
        newText+=arrStr[i];
        continue
      }
      index = this.alpabetStr.indexOf(arrStr[i].toUpperCase())-this.alpabetStr.indexOf(wordStr[i-strSpaceCount].toUpperCase());
      if (index<0) {
        index+=26;
      }
      newText += this.alpabet[index]

    }
    if (this.isDirect) return newText;
    else return newText.split("").reverse().join("")
  }
}

module.exports = VigenereCipheringMachine;
