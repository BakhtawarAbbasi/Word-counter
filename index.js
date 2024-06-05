function countWords(text) {
    //Convert the text to lowercase to ensure case-insensitive counting
    const lowerCaseText = text.toLocaleLowerCase();
    //Use a regular expression to splits the text into words
    const word = lowerCaseText.match(/\b\w+\b/g);
    //Initialize an empty object to store word counts
    const wordCounts = {};
    //Iterate over each word in the words array
    if (word) {
        word.forEach(word => {
            if (wordCounts[word]) {
                wordCounts[word]++;
            }
            else {
                wordCounts[word] = 1;
            }
        });
    }
    //Return the object containing word counts
    return wordCounts;
}
const text = "Hello World! Hello Typescript";
const wordCounts = countWords(text);
console.log(wordCounts);
export {};
