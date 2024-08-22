/// sort an array in js
// no built in function
let sortA=(arr)=>{
    let n=arr.length
   return arr.sort((a,b)=>a-b)
}

console.log(sortA([34,1,2,55,4,2,44,98,10]));