"use strict";
class Bank {
    constructor(p) {
        this.interestDetail = {
            indian: 10,
            sbi: 20,
            cub: 15
        };
        if (p) {
            this._bankName = p.BankName;
            this._depositedAmount = p.DepositedAmount;
            this._year = p.Year;
        }
    }
    getBalance(Bankname) {
        const interest = this.interestDetail[Bankname];
        const bonus = (this._depositedAmount / interest) * this._year;
        return this._depositedAmount + bonus;
    }
    get Bankname() {
        return this._bankName;
    }
}
function BanksetUp() {
    const bankContainer = document.querySelector(".container");
    if (bankContainer) {
        const bankDetailsDivs = bankContainer.querySelectorAll("div");
        bankDetailsDivs.forEach((divElement, index) => {
            const inputYear = divElement.querySelector("input[name='year']");
            const inputDeposit = divElement.querySelector("input[name='deposit']");
            const bankname = divElement.querySelector("label");
            console.log(bankname.innerText);
            if (parseInt(inputYear.value) > 20)
                alert("enter year between 1-20");
            else {
                if (!isNaN(parseInt(inputDeposit.value)) && !isNaN(parseInt(inputYear.value))) {
                    const bankObj = new Bank({
                        BankName: bankname.innerText.toLowerCase(),
                        DepositedAmount: parseInt(inputDeposit.value),
                        Year: parseInt(inputYear.value)
                    });
                    const disply = document.getElementById("display");
                    const inputBank = document.getElementById("bankname");
                    if (inputBank.value.toLowerCase() === bankObj.Bankname) {
                        disply.innerHTML += `${bankObj.Bankname.toUpperCase()}:${bankObj.getBalance(bankObj.Bankname)}`;
                    }
                    console.log(`Bank ${index + 1} Details: `, bankObj);
                }
                else
                    alert("enter number correctly");
            }
        });
    }
}
const btn = document.getElementById('BankButton');
btn.addEventListener('click', BanksetUp);
