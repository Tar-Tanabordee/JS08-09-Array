const nums = str.split('');

const sum = nums.reduce((acc, num) => {
    if (+num < 40) {
        acc += +num; // เพิ่มค่าของผลลัพธ์ใน acc
    }
    return acc;
}, 0);

console.log(sum);
