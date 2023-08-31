function copySorted(arr) {
    return [...arr].sort();
  }
  
  let arr = ['React', 'Vue', 'Angular'];
  let sorted = copySorted(arr);
  
  console.log(sorted); // ["Angular", "React", "Vue"]
  console.log(arr); // ["React", "Vue", "Angular"]
  