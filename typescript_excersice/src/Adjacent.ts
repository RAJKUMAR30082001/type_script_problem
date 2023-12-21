const button=document.getElementById("button") as HTMLInputElement
if(button){
button.addEventListener('click',ValidateFunction)}

//reuseable function
function ValidateFunction(event:Event){
    event.preventDefault()
    const Size=document.getElementById("arraySize") as HTMLInputElement
    const ArrayTag=document.getElementById("arrayElements") as HTMLInputElement
    if(isNaN(parseInt(Size.value))){
        alert(`Error: ${Size.value} is not a number`)
    }
    else{
        let arrayElement:string[]=[];
        let FinalArray:number[]=[];
        arrayElement=ArrayTag.value.split(",")
        if(arrayElement.length>parseInt(Size.value)|| arrayElement.length<parseInt(Size.value)) alert ("enter correct size or array numbers ")
        else{
        for (let i = 0; i < parseInt(Size.value); i++) {
            if(isNaN(parseInt(arrayElement[i].trim()))){
                alert("enter array element as number separated by comma")
            }
            else{
                FinalArray.push(Number(arrayElement[i].trim()));
            }
        }
        if(ArrayTag.name==='Adjacent') display(Adjacent(FinalArray))
        else display(LongestSubString(FinalArray))
    }
}
}

function Adjacent(arr:number[]):string{
    let maxProduct=arr[0]*arr[1]
    for(let i=1;i<arr.length-1;i++){
        let currentProduct=arr[i]*arr[i+1]
        if(currentProduct>maxProduct) maxProduct=currentProduct
    }
    return `The maximum adjacent product is ${maxProduct}`
}

//--------------------------------------------------------------------------------------------------------------------
function LongestSubString(arr: number[]): string {
    let finalArray: number[] = [];
    let arrayLength: number = 0;
    let initalindex:number=0
    let finalindex:number=0
    let fixed:boolean=true
    let initialarray:number[]=[]
    if(arr.length==1) return `longest length of subarray=${arr.length} and elements are ${arr}`
    else{
    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i]<=arr[i+1]){
        if(fixed){
            initalindex=i
            fixed=false
        }
        finalindex=i+1
    }
    else
    fixed=true
    initialarray=arr.slice(initalindex,finalindex+1)
    if(initialarray.length>arrayLength){
        arrayLength=initialarray.length
        finalArray=initialarray
    }
    
    
  }
  let str:string=`longest length of subarray=${finalArray.length} and elements are ${finalArray}`
  return str
}
}
  
 //reuseable function ----------------------------------------------------------------------------------
function display(str: string):void{
    const outputTag=document.getElementById("finaloutput") as HTMLParagraphElement
    outputTag.innerHTML+=str+'<br>'
}
//reuseable function---------------------------------------------------------------------------------------
function findIsNaN(s1:string,s2?:string):boolean|undefined{
    if(s1 && s2){
        if((isNaN(parseInt(s1.toLowerCase()))) && (isNaN(parseInt(s2.toLowerCase()))))
        return true
    }
    else if(s1){
        if(isNaN(parseInt(s1.toLowerCase())))
        return true
    }
    return false
}
//------------------------------------------------------------------------------------------------------------
const Button=document.getElementById("Button") as HTMLInputElement
if(Button){
Button.addEventListener('click',findOccurence)}

function findOccurence(event:Event):void{
    event.preventDefault()
    const Sentence=document.getElementById("sentenceInput") as HTMLInputElement
    const SentenceAfterSpaceCut:string=Sentence.value.replace(/\s/g, '');
    let SentenceArray:string[]=SentenceAfterSpaceCut.split('')
    findTheNumberOfOcc(SentenceArray);
    
}
function findTheNumberOfOcc(str:string[]):void{
    let obj:{[key:string]:number}={}
    for (let i = 0; i < str.length; i++) {
        let char:string=str[i]
        if(findIsNaN(char)){
            obj[char] = (obj[char] || 0) + 1;
        }
        else{
            alert (`${str[i]} is not a apha`)
            break
        }

    }
    for(let i in obj){
        display(`letter:${i} occurence:${obj[i]}`)
    }
    
} 

//-----------------------------------------------------------------------------------------------------------
const buttonPalindrome=document.getElementById("ButtonPalindrome") as HTMLInputElement
if(buttonPalindrome){
    buttonPalindrome.addEventListener('click',findPalindrome);
}

function findPalindrome(event:Event){
    event.preventDefault();
    const Sentence:string=(document.getElementById("sentenceInput") as HTMLInputElement).value
    const SentenceArray:string[]=Sentence.split(" ")
    checkPalindrome(SentenceArray)

}

function checkPalindrome(PalindromeArray: string[]):void {
    let finalPalindrome: string[] = [];

    for (let str of PalindromeArray) {
        let isPalindrome = false;
        let start = 0;
        let end = str.length - 1;
        if(str.length==1){
            finalPalindrome.push(str)
            continue
        }

        while (start < end) {
            if (findIsNaN(str[start],str[end])) {
                if(str[start].toLowerCase() != str[end].toLowerCase()){
                    isPalindrome = true;
                    break;
                }
                start++;
                end--;
            
            }
            else {
                alert("enter only alpha")
                break
            }
           
        }

        if (isPalindrome) {
            finalPalindrome.push(str);
        } else {
            let maskedStr = '*'.repeat(str.length);
            finalPalindrome.push(maskedStr);
        }
    }
    let finalstring:string=''
    for(let i of finalPalindrome){
        finalstring+=i+" "
    }
    display(finalstring)
}



