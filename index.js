// const http = require("http");
// http.createServer((req, res) => {
//     res.writeHead(200,{'content-Type':'application\json'});
//     res.write(JSON.stringify({name:'Rohit Sharma',email:'rohitsharma@gmail.com'}));
//     res.end()
// }).listen(5000);


const fs=require('fs')

const path=require('path')

const dirPath=path.join(__dirname,'file')

//Sync
// fs.writeFileSync('apple.txt','I like Apples')


// for (let i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/orange"+i+".txt","a simple fruit but very tasty")
// }

// fs.readdir(dirPath,(error,files)=>{
//     console.warn(files)
// })

// Async
fs.writeFile("./test.txt","Hello World Async",(error)=>{})
// here we have used Sync so we can store it in a variable
const result=fs.readFileSync('./contacts.txt','utf-8')
// console.log(result);


// fs.readFile('./contacts.txt','utf-8',(error,result)=>{
//     if (error) {
//         console.log("Error ",error);
//     } else{
//         console.log(result);
//     }
// })

// used to append any info into existing file
fs.appendFileSync("./contacts.txt","\n Rohit 545454")

// used to copy the data to another file
fs.cpSync('./contacts.txt','./copy.txt')

// used to delete any file
fs.unlinkSync('./copy.txt')

// it will give us all info about the file
console.log(fs.statSync('./test.txt'));
