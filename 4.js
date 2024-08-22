///triangle type

let check=(a,b,c)=>{
    if(a===b && b===c) return "Equilateral";
    else if(a===b || b===c || a===c) return "Isoscelece"
    else return "Scalene";

}

console.log(check(3,3,3));
console.log(check(3,4,3));
console.log(check(5,3,1));