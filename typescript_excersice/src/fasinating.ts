const FasinatButton=document.getElementById("fasinatingButton") as HTMLButtonElement
if(FasinatButton)
FasinatButton.addEventListener('click',checkFasinationNumber)

function findIsNumber(num1: number, num2?: number, num3?: number): boolean {
    if (arguments.length === 1) {
        return !isNaN(num1);
    } else if (arguments.length === 3) {
        return !isNaN(num1) && !isNaN(num2 ?? 0) && !isNaN(num3 ?? 0);
    }
    return false;
}


function checkFasinationNumber(event:Event){
    event.preventDefault()
    let numberInput = (document.getElementById("userNumber") as HTMLInputElement).value;
    if(!numberInput || findIsNumber(parseInt(numberInput))){
        alert("Please enter a valid number");
    }
    else{
        showResult(isFasinationNumber(parseInt(numberInput)));
    }
}

function isFasinationNumber(Number:number):string{
    Number=Math.abs(Number);
    let Number1:number=Number*2
    let Number2:number=Number*3
    let NumberAsstring=String(Number1)+String(Number2)+String(Number)
    let sortNumber=NumberAsstring.split("").sort().join()
    if(sortNumber==='1,2,3,4,5,6,7,8,9')
        return `${Number} is a fascinating number`
    return `${Number} is not a fascinating number`
}

function showResult(str:string):void{
    const display=document.getElementById("result")as HTMLParagraphElement
    display.innerHTML+=str+'<br>'
}
//------------------------------------------------------------------------------------------------------------------
const capacitybutton=document.getElementById("Check") as HTMLButtonElement
if(capacitybutton){
    capacitybutton.addEventListener('click',findCapable)
}

function findCapable(event:Event){
    event.preventDefault();
    const Bigcount=parseInt((document.getElementById("bigCount") as HTMLInputElement).value)
    const smallcount=parseInt((document.getElementById("smallCount") as HTMLInputElement).value)
    const goal=parseInt((document.getElementById("goal") as HTMLInputElement).value)
    let totalCount:number=0
    if(findIsNumber(Bigcount,goal,smallcount)){
        if(Bigcount<0 || goal<0 || smallcount<0) {
            alert("enter positive numbers")
            window.location.reload()
        }
        else totalCount=Bigcount*5+smallcount
        findResultOfcapacity(totalCount,Bigcount,goal,smallcount)
    }
    else {
        alert("enter valid number")
        window.location.reload()
    }
}

function findResultOfcapacity(totalCount:number,Bigcount:number,goal:number,smallcount:number):void{
    if(totalCount<goal){
        showResult(`${goal} is greater than totalcount`)
    }

    else if(goal%5<=smallcount){
        let numberOfbigbags=0
        let goall=goal
        while(goal/5>=Bigcount){
            goal-=1
            numberOfbigbags=Math.round(goal/5)
        }
        
        let numberOfsmallbags:number=goall-(numberOfbigbags*5)
        showResult(`You need ${numberOfbigbags} big bags and ${numberOfsmallbags} small bags to get the requirement`)
    }
    else{
        showResult(`cannot fit`)
    }

}