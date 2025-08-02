const fs = require('fs');
const {Command} = require('commander');
const program = new Command();


program
.name('counter')
.description('CLI to do file based task')
.version('0.8.0');

program.command('count-words')
.description('count the number of words in the file')
.argument('<file>','file to count')
.action((file)=>{
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            let words = data.split(" ").length
            console.log(words);
        }
    })
})
program.command('count-lines')
.description('count the number of lines in the file')
.argument('<file>','file to count')
.action((file)=>{
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            let lines = data.split("\n").length
            console.log(lines);
        }
    })
})
program.command('count-character')
.description('count the number of lines in the file')
.argument('<file>','file to count')
.action((file)=>{
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            let char = data.split("").length
            console.log(char);
        }
    })
})




program.parse(process.argv);
