//check palindrome or not

let pali=(str)=>{
    str=str.toLowerCase().replace(/\W/g,"").trim()
   
    let n=str.length
    let rev=str.split("").reverse().join("")

    if(str===rev)
        return true;
    else
    return false;
}

console.log(pali("racecrace"))
console.log(pali("mada@@@@@@@@@@m"))
console.log(pali("hello"))
//output: true true false