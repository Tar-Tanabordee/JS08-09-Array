const numbers = []; 

while (true) {
    const input = prompt("totalNum:");
    
    if (input === null || isNaN(input)) {
        break; 
    }
    
    const number = parseFloat(input);
    numbers.push(number); 
}

let sum = 0;
for (const number of numbers) {
    sum += number; 
}

console.log("totalNum:", sum); 
