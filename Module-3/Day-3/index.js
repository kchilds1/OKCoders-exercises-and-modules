const fs = require("fs");

function readFile(fileName) {
  return fs.readFileSync(fileName, "utf8");
}

// This function takes text variable (as a sentence)
// and counts the number of times the "matchword" is in the sentence
function countWordOccurrences(text, matchWord) {
  let count = 0;
  const words = text.split(" ");

  words.forEach(function (word) {
    const punctuationRemovedWord = word.replaceAll(".", "");
    if (punctuationRemovedWord.toLowerCase() === matchWord.toLowerCase()) {
      count++;
    }
  });
    
  return count;
}

function main() {
  const fileName = "./test-file.txt";
  const fileContent = readFile(fileName);
  const matchWord = "code";
  const wordCount = countWordOccurrences(fileContent, matchWord);
  console.log(`The word "${matchWord}" appears ${wordCount} times in the file.`);
}
main();