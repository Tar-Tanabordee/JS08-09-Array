// 1
// // const array = [1, 2, 30, 400];
// // const newArr = array.map((x) => x*2);
// // console.log(newArr);

// 2
// const array = [1, 2, 3, 4];
// const newArr = array.map((x) =>x+(""));
// console.log(newArr)

// 3
// const array = [1, '1', 2, {}];
// const newArr = array.map((x)=>typeof x)
// console.log(newArr)

// 4
// const array = ['apple', 'banana', 'orange'];
// const newArr = array.map((x)=> x.toUpperCase());
// console.log(newArr)

// 5
// const array = [1, 3, 4, 5, 6, 7, 8];
// const newArr = array.map((x)=> {
//     let res
//     if (x%2 ==0) {
//         return "even"
//     }
//     return "odd" 
// })
// console.log(newArr);

// 6
// result: [1, 3, 2, 8, 4, 5]
const result6 = array.map(num => Math.abs(num));

// 7
// const array = [100, 200.25, 300.84, 400.3];
// const newArr = array.map((x) =>x+(""));
// console.log(newArr)

// 8
// const array = [0, 5, 10, 7, 6, 5, 0];
// const MONTHS =['Jan','Feb','Mar','Api','Mar','Jun','Jul','Aug','Sep','Oct',]
// const result8 = array.map(monthIndex => months[monthIndex]);

// 9 
// const array = [1, 16, 81, 256, 625, 1296];
// const newArr = array.map((x) => x.length);
// console.log(newArr);

//#10
// const array = [
//     { name: 'apple', 'age: 14'},
//     { name: 'banana', 'age: 18'},
//     { name: 'watermelon', 'age: 32'},
// ];
// const result10 = array.map(obj => obj.name);

//#11
// const result11 = array.map(obj => obj.age);

// #12
// const result12 = array.map(obj => `${obj.name} ${obj.surname}`);

// #13
// const currentYear = new Date().getFullYear();
// const result13 = array.map(obj => ({
//   ...obj,
//   age: currentYear - new Date(obj.birth).getFullYear()
// }));

// #14
// const result14 = array.map(obj => `<tr><td>${obj.name}</td><td>${new Date(obj.birth).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</td></tr>`);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result7);
// console.log(result8);
// console.log(result9);
// console.log(result10);
// console.log(result11);
// console.log(result12);
// console.log(result13);
// console.log(result14);