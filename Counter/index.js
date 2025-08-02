const fs = require('fs');
const {Command} = require('commander');
const program = new Command();

// commander library:
// Define commands and options with descriptions
// Parse user input from the terminal
// Automatically generate help and usage info
// Handle arguments and flags
// Execute corresponding code based on commands

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

// In program.parse(process.argv), process.argv is the array 
// of raw command-line arguments.
// parse makes Commander analyze these arguments, identify 
// commands and options, and execute the appropriate action.
//process.argv give you path og the string
//node script.js arg1 arg2
// [
//   '/path/to/node',       // process.argv[0]
//   '/path/to/script.js',  // process.argv[1]
//   'arg1',                // process.argv[2]
//   'arg2'                 // process.argv[3]
// ]
