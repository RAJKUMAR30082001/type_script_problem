"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongestSubString = void 0;
const Adjacent_1 = require("./Adjacent");
const button = document.getElementById("button");
button.addEventListener('click', Adjacent_1.ValidateFunction);
function LongestSubString(arr) {
    let finalArray = [];
    let arrayLength = 0;
    let initalindex = 0;
    let finalindex = 0;
    let fixed = true;
    let initialarray = [];
    if (arr.length == 1)
        return `longest length of subarray=${arr.length} and elements are ${arr}`;
    else {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] <= arr[i + 1]) {
                if (fixed) {
                    initalindex = i;
                    fixed = false;
                }
                finalindex = i + 1;
            }
            else
                fixed = true;
            initialarray = arr.slice(initalindex, finalindex + 1);
            if (initialarray.length > arrayLength) {
                arrayLength = initialarray.length;
                finalArray = initialarray;
            }
        }
        let str = `longest length of subarray=${finalArray.length} and elements are ${finalArray}`;
        return str;
    }
}
exports.LongestSubString = LongestSubString;
