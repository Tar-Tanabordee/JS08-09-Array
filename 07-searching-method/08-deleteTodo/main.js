const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  function deleteTask(id) {
    const indexToDelete = tasks.findIndex(task => task.id === id);
    
    if (indexToDelete !== -1) {
      tasks.splice(indexToDelete, 1);
    }
  }
  
  deleteTask(1);
  
  console.log(tasks); 
  