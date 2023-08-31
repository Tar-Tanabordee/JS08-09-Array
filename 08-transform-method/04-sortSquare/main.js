const arr = [-3, 2, 0, -7, 4, 6];

arr.sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2));

console.log(arr); // [-7, -3, 0, 2, 4, 6]
