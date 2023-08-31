// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

// ```js
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]
// ```


// squareArr 
// (array) => original Array (modified)
// (array) => new Array


const arr = [2,3,,5,7,11];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    newArr.push(arr[i] ** 2);
}

console.log(newArr);