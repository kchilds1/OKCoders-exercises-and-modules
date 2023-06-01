
const fs = require("fs");

fs.readFile("./README.md", "utf8", (err, data) =>{
    if (err){
        console.error(err);
        return;
    }else {
        //console.log(data)
        summarizedContents(data);
    }
});

function summarizedContents(data) {
    const numberOfWords = data.split(" ").length;
    console.log(numberOfWords);
}

const firstName = "Kenneth"

const lastName = "Childs"

const greeting = `Hello my name is ${firstName} ${lastName}`; 

//async
setTimeout(() =>{
console.log(`async greeting to ${firstName} ${lastName}`);
},2000);

console.log(greeting);