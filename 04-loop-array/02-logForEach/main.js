// ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง

// ```js
// const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// // 1. Mike
// // 2. Sid
// // 3. Jack
// // 4. Bill

// ```

// const names = ['Mike', 'Sid', 'Jack', 'Bill'];

// names.forEach((name, index) => {
//     console.log(`${index + 1}. ${name}`);
// });

const names = ['Mike', 'Sid', 'Jack', 'Bill'];

function logPerson(person,order){
    console.log(order + 1, person);
}

// Callback : Literal,On the fly
// names.forEach( (person, order)=> console.log(order + 1,person));

// Callback ; Named, Reference
names.forEach(logPerson);
// names.forEach(5);