"use strict";
const FasinatButton = document.getElementById("fasinatingButton");
if (FasinatButton)
    FasinatButton.addEventListener('click', checkFasinationNumber);
function findIsNumber(num1, num2, num3) {
    if (arguments.length === 1) {
        return !isNaN(num1);
    }
    else if (arguments.length === 3) {
        return !isNaN(num1) && !isNaN(num2 !== null && num2 !== void 0 ? num2 : 0) && !isNaN(num3 !== null && num3 !== void 0 ? num3 : 0);
    }
    return false;
}
function checkFasinationNumber(event) {
    event.preventDefault();
    let numberInput = document.getElementById("userNumber").value;
    if (!numberInput || findIsNumber(parseInt(numberInput))) {
        alert("Please enter a valid number");
    }
    else {
        showResult(isFasinationNumber(parseInt(numberInput)));
    }
}
function isFasinationNumber(Number) {
    Number = Math.abs(Number);
    let Number1 = Number * 2;
    let Number2 = Number * 3;
    let NumberAsstring = String(Number1) + String(Number2) + String(Number);
    let sortNumber = NumberAsstring.split("").sort().join();
    if (sortNumber === '1,2,3,4,5,6,7,8,9')
        return `${Number} is a fascinating number`;
    return `${Number} is not a fascinating number`;
}
function showResult(str) {
    const display = document.getElementById("result");
    display.innerHTML += str + '<br>';
}
//------------------------------------------------------------------------------------------------------------------
const capacitybutton = document.getElementById("Check");
if (capacitybutton) {
    capacitybutton.addEventListener('click', findCapable);
}
function findCapable(event) {
    event.preventDefault();
    const Bigcount = parseInt(document.getElementById("bigCount").value);
    const smallcount = parseInt(document.getElementById("smallCount").value);
    const goal = parseInt(document.getElementById("goal").value);
    let totalCount = 0;
    if (findIsNumber(Bigcount, goal, smallcount)) {
        if (Bigcount < 0 || goal < 0 || smallcount < 0) {
            alert("enter positive numbers");
            window.location.reload();
        }
        else
            totalCount = Bigcount * 5 + smallcount;
        findResultOfcapacity(totalCount, Bigcount, goal, smallcount);
    }
    else {
        alert("enter valid number");
        window.location.reload();
    }
}
function findResultOfcapacity(totalCount, Bigcount, goal, smallcount) {
    if (totalCount < goal) {
        showResult(`${goal} is greater than totalcount`);
    }
    else if (goal % 5 <= smallcount) {
        let numberOfbigbags = 0;
        let goall = goal;
        while (goal / 5 >= Bigcount) {
            goal -= 1;
            numberOfbigbags = Math.round(goal / 5);
        }
        let numberOfsmallbags = goall - (numberOfbigbags * 5);
        showResult(`You need ${numberOfbigbags} big bags and ${numberOfsmallbags} small bags to get the requirement`);
    }
    else {
        showResult(`cannot fit`);
    }
}
