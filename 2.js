const generate = (s) => {
    s = s.trim();
    if (s.length === 0 || s.length > 280) {
        return "Invalid input";
    }

    // Split the string into words
    let arr = s.split(" ");

    // Capitalize the first letter of each word
    arr = arr.map(element => 
        // element.charAt(0).toUpperCase() + element.slice(1)
        element.replace(element[0],element[0].toUpperCase())
    );

    // Concatenate the words into a single hashtag
    let hashtag = "#" + arr.join("");

    return hashtag;
}

console.log(generate("this is a test sentence")); // Output: #ThisIsATestSentence
