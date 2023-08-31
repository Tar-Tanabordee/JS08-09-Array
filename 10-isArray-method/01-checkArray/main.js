function isArray(input) {
    return Array.isArray(input);
  }
  
  console.log(isArray([1, 2, 3])); // true
  console.log(isArray('hello')); // false
  console.log(isArray({ key: 'value' })); // false
  