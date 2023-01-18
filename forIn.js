//using for in loop
const person = {
    fname:"Kelvin",
    lname:"Koech",
    place: "Nyeri",
    age:100,   
}; 

let input = "";
for (let x in person) {
  input += person[x] + " ";
}

console.log(input);