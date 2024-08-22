/// factorial of a number

let fact=(num)=>{
    if(num<0) return "Enter a positive number"
    else if(num==0||num==1)
    {
        return 1
    }
    else{
        return num*fact(num-1);
    }


}


console.log(fact(6));
console.log(fact(5));
console.log(fact(-4));