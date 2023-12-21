interface BankInterest {
    [key: string]: number;
}

interface BankInputDetails {
    BankName: string;
    DepositedAmount: number;
    Year: number;
}

class Bank {
    public interestDetail: BankInterest = {
        indian: 10,
        sbi: 20,
        cub: 15
    };

    public _bankName!: string;
    public _depositedAmount!: number;
    public _year!: number;

    constructor(p?: BankInputDetails) {
        if (p) {
            this._bankName = p.BankName;
            this._depositedAmount = p.DepositedAmount;
            this._year = p.Year;
        }
    }
    getBalance(Bankname:string):number{
        const interest=this.interestDetail[Bankname]
        const bonus=(this._depositedAmount/interest)*this._year
        return this._depositedAmount+bonus

    }
    get Bankname():string{
        return this._bankName
    }
}

function BanksetUp() {
    const bankContainer = document.querySelector(".container") as HTMLDivElement;

    if (bankContainer) {
        const bankDetailsDivs = bankContainer.querySelectorAll("div");

        bankDetailsDivs.forEach((divElement, index) => {
            const inputYear = divElement.querySelector("input[name='year']") as HTMLInputElement;
            const inputDeposit = divElement.querySelector("input[name='deposit']") as HTMLInputElement;
            const bankname=divElement.querySelector("label") as HTMLLabelElement
            console.log(bankname.innerText)
            if(parseInt(inputYear.value)>20) alert ("enter year between 1-20")
            else{
            if (!isNaN(parseInt(inputDeposit.value)) && !isNaN(parseInt(inputYear.value))) {
                const bankObj = new Bank({
                    BankName: bankname.innerText.toLowerCase(),
                    DepositedAmount: parseInt(inputDeposit.value),
                    Year: parseInt(inputYear.value)
                });
                const disply=document.getElementById("display") as HTMLInputElement
                const inputBank=document.getElementById("bankname")as HTMLInputElement
                if(inputBank.value.toLowerCase()===bankObj.Bankname){
                    disply.innerHTML+=`${bankObj.Bankname.toUpperCase()}:${bankObj.getBalance(bankObj.Bankname)}`
                }

                console.log(`Bank ${index + 1} Details: `, bankObj);
            }
            else alert("enter number correctly")
        }
        });
    }
}

const btn = document.getElementById('BankButton') as HTMLButtonElement;

btn.addEventListener('click', BanksetUp);
