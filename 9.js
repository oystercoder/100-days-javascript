//average of the numbers in an array

let avg=(arr)=>{
   let ans=arr.reduce((accum,curr)=>{
    accum+=curr
    return accum/arr.length



   },0)
   return ans;

  

}
console.log(avg([1,2,3,4,5]))
console.log(avg([10,20,30,40,50]))
console.log(avg([0,0,0,0,0]))