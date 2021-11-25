function toUpperFirstLetter(word) {
    if (typeof (word) !== 'string') return 'It is not a string';
    let newWord = word.toLowerCase()
    return newWord[0].toUpperCase() + newWord.slice(1);
}
function sayHello(name) {
    if (typeof (name) !== 'string') return 'It is not a name';
    return name === 'Mark' ? `Hi, ${name}!` : `Hello, ${name}!`
}

function filterStrings(array, number) {
    return array.filter((e) => e.length <= number)
}
