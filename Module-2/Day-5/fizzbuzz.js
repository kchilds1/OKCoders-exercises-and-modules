function fizzBuzz (num){
if (num % 15 ===0){
    console.log("FizzBuzz");
} else if (num % 2 ===0){
    console.log("even");
}
  else if(num % 3 ===0){
  console.log("Fizz");
} else if(num % 5 ===0){
    console.log("Buzz");
}
}
  
fizzBuzz(2);
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);




