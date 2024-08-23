//sum of the digits of a number


const ans=(n)=>{
    let sum=0;
    while(n>0)
    {
        let r=n%10;
        sum+=r;
        n=Math.floor(n/10);


    }
    return sum



}

const ans2=(n)=>{
    let sum=0;
    let k=typeof(n)
   
    n=String(n)
    let arr=Array.from(n);
    console.log(arr)
    arr.reduce((accum,curr)=>{
        sum+=parseInt(curr)

    },0)
    return sum


}



console.log(ans2(111))
console.log(ans(12345))