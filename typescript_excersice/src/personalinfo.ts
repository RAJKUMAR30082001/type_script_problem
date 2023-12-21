const personalinfobutton=document.getElementById("personalbtn") as HTMLButtonElement
personalinfobutton.addEventListener("click",findCatorgery)

function findCatorgery(event:Event){
    event.preventDefault()
    const ageInput = (document.getElementById('age') as HTMLInputElement).value;
    const maritalStatusInputs = document.getElementsByName('maritalStatus') as NodeListOf<HTMLInputElement>;
    const sexInputs = document.getElementsByName('sex') as NodeListOf<HTMLInputElement>;

    // Get the selected value from radio buttons
    let selectedMaritalStatus: string | undefined;
    maritalStatusInputs.forEach(input => {
    if (input.checked) {
        selectedMaritalStatus = input.value;
    }
    });

    let selectedSex: string | undefined;
    sexInputs.forEach(input => {
    if (input.checked) {
        selectedSex = input.value;
    }
    });
    if(!isNaN(parseInt(ageInput))) findWorkingPosition(parseInt(ageInput),selectedMaritalStatus,selectedSex)
    else alert("enter valid age")
}

function findWorkingPosition(age:number,maritalStatus?:string,sexofperson?:string){
    const display=document.getElementById("display") as HTMLParagraphElement
    if(sexofperson==="female") display.innerHTML=`female person who is ${maritalStatus} with age:${age} working in urban area`
    else if(sexofperson==='male' && 20<=age && age<=40) display.innerHTML=`male person who is ${maritalStatus} with age:${age} work at anywhere`
    else if(sexofperson==="male"  && 40<=age && age<=60) display.innerHTML=`male person who is ${maritalStatus} with age:${age} work at urban`
    else alert("enter valid age between 20 to 60")
}