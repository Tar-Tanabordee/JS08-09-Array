const nums= [4,5,6,7]

const sum = nums.reduce((a,c)=> a+c, 0)
const mul = nums.reduce((a,c)=> a*c , 1)

// [8,10,12,14]
nums.map(x=>x*2) // create NewArray

nums.reduce((acc,item)=>{
    acc.push(item*2); // [] => [8]
    return acc
},[])