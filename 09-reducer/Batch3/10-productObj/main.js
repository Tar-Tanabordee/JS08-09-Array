const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];
  
  const productObject = {};
  for (const product of products) {
    const { id, name } = product;
    productObject[id] = { name };
  }
  
  console.log(productObject);
  