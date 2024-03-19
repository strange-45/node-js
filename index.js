const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200,{'content-Type':'application\json'});
    res.write(JSON.stringify({name:'Rohit Sharma',email:'rohitsharma@gmail.com'}));
    res.end()
}).listen(5000);


const fs=require('fs')
const url=require('url')

// const path=require('path')
// const os=require('os')


// console.log(os.cpus().length);

// const dirPath=path.join(__dirname,'file')

// //Sync Blocking request
// fs.writeFileSync('apple.txt','I like Apples')


// // for (let i=0;i<5;i++){
// //     fs.writeFileSync(dirPath+"/orange"+i+".txt","a simple fruit but very tasty")
// // }

// // fs.readdir(dirPath,(error,files)=>{
// //     console.warn(files)
// // })

// // Async Non- blocking request 
// fs.writeFile("./test.txt","Hello World Async",(error)=>{})
// // here we have used Sync so we can store it in a variable
// const result=fs.readFileSync('./contacts.txt','utf-8')
// // console.log(result);


// // fs.readFile('./contacts.txt','utf-8',(error,result)=>{
// //     if (error) {
// //         console.log("Error ",error);
// //     } else{
// //         console.log(result);
// //     }
// // })

// // used to append any info into existing file
// fs.appendFileSync("./contacts.txt","\n Rohit 545454")

// // used to copy the data to another file
// fs.cpSync('./contacts.txt','./copy.txt')

// // used to delete any file
// fs.unlinkSync('./copy.txt')

// // it will give us all info about the file
// console.log(fs.statSync('./test.txt'));


// const result=fs.readFileSync("test.txt","utf-8")
// console.log(result);


const myServer=http.createServer((req,res)=>{
    if (req.url==='/favicon.ico') {
        return res.end()
    }
    const log=`${Date.now()}:${req.url} New Req Received`
    const myUrl=url.parse(req.url)
    console.log(myUrl);
    fs.appendFile('log.txt',log,(error,data)=>{
        switch (req.url) {
            case '/':
                res.end('HomePage')
                break;
            case '/abpot':
                res.eventNames("I am Abhay Raj")
                break
            default:
                break;
        }
    })
})