const fs=require('fs')

const path=require('path')

///CREATE FILE
const dirPath=path.join(__dirname,'crud')
const filePath=`${dirPath}/file1.txt`;

// fs.writeFileSync( filePath,'This is first CRUD file');


//READ FILE

// fs.readFile(filePath,'utf8',(err,item)=>{

//     console.log(item)
// })

//UPDATE FILE

// fs.appendFile(filePath,' and i m learning to perform CRUD ops with nodejs',(err)=>{
//     if(!err) console.log('File is UPDATED')
// })


//RENAME A FILE
const filePath2=`${dirPath}/file2.txt`;
// fs.writeFileSync(filePath2,"This is to be renamed")


// fs.rename(filePath2,`${dirPath}/renamedfile.txt`,(err)=>{
//     if(!err){
//         console.log('File has been renamed')
//     }
// })

const filePath3=`${dirPath}/deleteme.txt`;
// fs.writeFileSync(filePath3,"to be deleted")

fs.unlinkSync(filePath3);