//count occurence of character

let find=(str,c)=>{
   
   
    str=str.split("")
    console.log(str)
    let total=str.reduce((accum,currC)=>{
        if(currC===c.toLowerCase()||currC===c.toUpperCase()){
            accum++
    }
    
    return accum

    // str.map(element=>{
       
    //     if(element==c.toUpperCase()|| element==c.toLowerCase())count++;
    // })
    // return count;

},0)
return total

}


console.log(find("this iIs meE","i"))