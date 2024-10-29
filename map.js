// 1

function doubleFunction(numbers) {
    const doubledArray = [];
    for (const number of numbers) {
        doubledArray.push(number * 2); 
    }
    return doubledArray; 
}
const listNumber = [1, 2, 3, 4];
const result = doubleFunction(listNumber);
console.log("Doubled Array:", result);    



// 2 
  var obj = {fname:"Tenketem", Mname:"Zeradawit", Lname:"Gebrengus"};
for( let Myname in obj){
    console.log(Myname + " - " + obj[Myname])
}

// 3
function delayFunction(strings) {
    for (let word = 0; word < strings.length; word++) {
        setTimeout(function() {
            console.log(strings[word]);
        }, word * 1000); 
    }
}

const word = ["orange", "apple", "strawbery", "banana"];
delayFunction(word);
