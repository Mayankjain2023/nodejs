console.log("Hello,world")
var a=10
var b=11
const c=20
let m=20

//console.log(a+b+c)
if(m===c)
{
    console.log("Matched")
}

var n="20"
if(n==m) //== compares only values whereas === compares value nd data type both
{
    console.log("Matched")
}
else{
    console.log("Fail")
}
//c=40
//console.log(a+c)

//array
const arr=[1,2,3,4,5,6,3,3,3]
console.log(arr)
//console.log(arr[5])

//filter works on array mainly
//its used to traverse the array to perform a certain task

let result=arr.filter((i)=>{
    ///console.log(i)
    let count=0
    if(i%2==0)
    {
        count++
    }
    return count
    
})

let ans=arr.filter((item)=>{
    return item>=3
})

console.log(result)
console.log(ans)