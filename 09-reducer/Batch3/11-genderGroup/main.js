const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  
  const groupedPersons = {};
  for (const person of persons) {
    const { name, sex } = person;
    if (!groupedPersons[sex]) {
      groupedPersons[sex] = [];
    }
    groupedPersons[sex].push(name);
  }
  
  console.log(groupedPersons);
  