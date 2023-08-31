let str = 'I live in Thailand';
let charCount = {};

for (let char of str.toLowerCase()) {
  if (char !== ' ') {
    charCount[char] = (charCount[char] || 0) + 1;
  }
}

console.log(charCount);
