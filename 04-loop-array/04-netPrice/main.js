const sales = [
    {price: 1000, discount: 0.1 },
    {price: 500, discount: 0.05 },
    {price: 100 }
];
//sales = [obj1, obj2, obj3]

//WalkThrough Array (loop)
// for (let productObj of sales) {

//     //each item = Object
//     //#2nd Layer
//     //access Object => dot, bracket
//     let price =productObj.price;
//     let discount = productObj.discount;
//     let netPrice=price;

//     if(discount){
//         netPrice = price * (1-discount);
//     }
//     //Create new Array and Object
//     const newObj ={netPrice: netPrice}
//     console.log(price, discount, netPrice);
// }
// console.log(newArr);
// console.log(sales);


sales.forEach((obj,index)=>{
    //calc NetPrice
    let netPrice = obj.price*(1 - obj.discount || 0);
    newArr.push({ netPrice });
});

sales.forEach((obj) => newArr.push({newPrice: obj.price*(1-(obj.discount ||0))}));
console.log(sales);
console.log(newArr);