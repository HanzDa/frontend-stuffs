function getLongestWord(sentence) {
    let listWords = sentence.split(' ');
    let longestWord = listWords[0];
    for (let word of listWords) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(getLongestWord('this is my sentence'));