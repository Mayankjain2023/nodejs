 //import {x} from './app'


// const app=require('./app')

// console.log(app)
// console.log(app.x)
// console.log(app.y)
// console.log(app.z())

// //
// fs module

// fs module has many functions that get imported with ,we can also import only those functions which
// r needed to reduce un neccesary increase in size
// / that can be done using require("fs").functionname to be imported, after tht we dont need to funtion name with fs

// const fs= require("fs").writeFileSync;

// fs("abc.txt","ABCD")

// global modules r those tht we dont have to import like console
// local modules r those which need to be imported just like fs


// CORE MODULES ->already in built which we need not to write or import 
// for e.g

// __dirname is used to know directory we r working on

// console.log("Directory name: ", __dirname);
// console.log("File name: ",__filename);


// const http=require('http')
// const data=require('./APIdata')

// http.createServer((request,response)=>{

//     response.writeHead(200,{'Content-Type':'application\json'})
//     response.write(JSON.stringify(data));
//     response.end();

// }).listen(8000);