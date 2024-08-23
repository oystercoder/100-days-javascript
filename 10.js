///check if arrays are equal

// const eq=(arr1,arr2)=>{
//     if(arr1.length!==arr2.length) return false;
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]!==arr2[i]) return false;
//     }
//     return true;

// }


// console.log(eq([1,2,3], [1,2,4]))


//method 2

// const eq1=(arr1,arr2)=>{
//     if(arr1.length!==arr2.length) return false;
//     let k=arr1.every((curr,index)=>{
//          curr==arr2[index];
// })
// return k;

// }

// console.log(eq1([1,2,3], [1,2,3]))

const eq1 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    let k=arr1.every((curr, index) => {
       return  curr === arr2[index]
    }
    );
    return k
   
}

console.log(eq1([1, 2, 3], [1, 2, 3]));
