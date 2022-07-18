// console.log(process.argv[3]);

const fs=require('fs')

const data=process.argv

if(data[2]=='add'){

fs.writeFileSync(
    data[3],data[4]
)
}
else if(data[2]=='remove')
{
    fs.unlinkSync(data[3]);
}
else{
    console.log("Invalid input")
}
