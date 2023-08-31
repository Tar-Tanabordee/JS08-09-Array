const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];
//AVG by Weight = SUM(score * weight) / SUM (weight)
// (90*0.2 + 95*0.3 + 85*0.5) / (0.2+0.3+0.5)

// #1 finalValue == (90*0.2 + 95*0.3 + 85*0.5)
// #2 finalValue == {sum : 90*0.2 + 95*0.3 + 85*0.5, totalW: (0.2+0.3+0.5)}

// function getAverageWeight(arr){
//     let sumWeight = arr.reduce((acc,item) => acc+= (item.score * item.weight),0)
//     console.log(sumWeight);
//     return(sumWeight-weight.length)
// }
// console.log(getAverageWeight(scores));