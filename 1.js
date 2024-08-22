//longest word in a string taking the string as an input


//NOTES
//IF STIRNG EMPTY OR ONLY SPACE RETURN FALSE
//IF STRING REMOVE TRAILING AND FOLLOWING SPACE
//IF STRING REMOVE LEADING AND TRAILING SPACE
const longestWord=(str)=>{
    str=str.trim()
    
    if(str.trim().length===0)
    {
        return false;
    }
    let words=str.split(" ")
    words=words.sort((a,b)=>(a.length-b.length));
    console.log(words)
   
return words.at(-1)
  
  
  


}

console.log(
    longestWord("Hello world , this is a test string"),
)