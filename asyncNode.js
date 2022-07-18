console.log("Starting execution")

a=10
b=0



const waitingData= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve(30);
    },2000)

})

// setTimeout(() => {
//     console.log(a+b)
// }, 1500);


waitingData.then((data)=>{

    b=data
    console.log(a+b)
})