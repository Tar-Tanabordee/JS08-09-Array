let animals = ["Dog", "Cat", "Rat"];

animals.push("Fish");

animals.unshift("Horse");

animals.push("Giraffe", "Snake");

animals.shift();

animals.pop();

animals.splice(animals.indexOf("Dog"), 1);

console.log(animals); 
