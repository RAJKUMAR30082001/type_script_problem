interface TaxLimit{
    limit:number
    tax:number
}

const calculateButton=document.getElementById("calculatetax") as HTMLInputElement
if(calculateButton)
calculateButton.addEventListener('click',getAndValidate)
function getAndValidate(event:Event){
    event.preventDefault()
    const grossSalary=parseInt((document.getElementById("grossSalary")as HTMLInputElement).value)
    const Totalsaving=parseInt((document.getElementById("totalSavings")as HTMLInputElement).value)

    if(!isNaN(grossSalary) && !isNaN(Totalsaving) && grossSalary>0 && Totalsaving>0 && grossSalary>Totalsaving){
        showResul(calculateTax(grossSalary,Totalsaving))
    }
    else{
        alert("enter valid numbers")
        window.location.reload()
    }

}

function calculateTax(salary:number,saving:number):string{
    
        const taxableIncome = Math.max(0, salary-(Math.min(saving, 100000)));
    
        const taxArray:TaxLimit[] = [
            { limit: 100000, tax: 0 },
            { limit: 200000, tax: 0.1 },
            { limit: 500000, tax: 0.2 },
           
        ];
    
        let tax = 0;
        if(taxableIncome>500000){
            tax = 0.1 * (200000 - 100000) + 0.2 * (500000 - 200000) + 0.3 * (taxableIncome - 500000);

        }
        else{
    
        for (const limit of taxArray) {
            if (taxableIncome <= limit.limit) {
                tax += limit.tax * (taxableIncome - 200000);
                break;
            } else {
               
                tax += limit.tax * (taxableIncome - 100000);
            }
        }
    }
        console.log(tax)
        return `Tax for the given saving amount is ${tax}`;
}

function showResul(str:string):void{
    const display=document.getElementById("display")as HTMLParagraphElement
    display.innerHTML+=str+'<br>'
}
    
   