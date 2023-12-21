"use strict";
const personalinfobutton = document.getElementById("personalbtn");
personalinfobutton.addEventListener("click", findCatorgery);
function findCatorgery(event) {
    event.preventDefault();
    const ageInput = document.getElementById('age').value;
    const maritalStatusInputs = document.getElementsByName('maritalStatus');
    const sexInputs = document.getElementsByName('sex');
    // Get the selected value from radio buttons
    let selectedMaritalStatus;
    maritalStatusInputs.forEach(input => {
        if (input.checked) {
            selectedMaritalStatus = input.value;
        }
    });
    let selectedSex;
    sexInputs.forEach(input => {
        if (input.checked) {
            selectedSex = input.value;
        }
    });
    if (!isNaN(parseInt(ageInput)))
        findWorkingPosition(parseInt(ageInput), selectedMaritalStatus, selectedSex);
    else
        alert("enter valid age");
}
function findWorkingPosition(age, maritalStatus, sexofperson) {
    const display = document.getElementById("display");
    if (sexofperson === "female")
        display.innerHTML = `female person who is ${maritalStatus} with age:${age} working in urban area`;
    else if (sexofperson === 'male' && 20 <= age && age <= 40)
        display.innerHTML = `male person who is ${maritalStatus} with age:${age} work at anywhere`;
    else if (sexofperson === "male" && 40 <= age && age <= 60)
        display.innerHTML = `male person who is ${maritalStatus} with age:${age} work at urban`;
    else
        alert("enter valid age between 20 to 60");
}
