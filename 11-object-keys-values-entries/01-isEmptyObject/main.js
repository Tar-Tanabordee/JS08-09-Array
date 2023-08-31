function checkEmptyObj(obj) {
    return Object.keys(obj).length === 0;
  }
  
const emptyObj = {};
const nonEmptyObj = { key: "value" };

console.log(checkEmptyObj(emptyObj)); // ผลลัพธ์: true
console.log(checkEmptyObj(nonEmptyObj)); // ผลลัพธ์: false
console.log(checkEmptyObj(null)); // ผลลัพธ์: false
console.log(checkEmptyObj("string")); // ผลลัพธ์: false
