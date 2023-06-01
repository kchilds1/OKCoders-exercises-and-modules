//EXAMPLE 1
// const button = document.querySelector('button');

// function toggle(color) {
//     button.classList.toggle(color);
// }


//this is saying when the button is clicked it will change to color red.  red is set in css.
//button.addEventListener('click', toggle)


//Same as button.addEventListener('click', toggle), but is know an anonymous function because of ()
//button.addEventListener('click', function () {
//    button.classList.toggle("altColor");
//});


//Same as button.addEventListener('click', toggle), but using an arrow function.
//button.addEventListener('click', () => {
//    button.classList.toggle("altColor")
//});

//In this example toggle is the same as () => {}
// toggle() is not the same as () => {}

//All three above examples are callback functions

//EXAMPLE 2
function firstAction(callback, message, anotherCallback){
    console.log("I'm the first action")
    setTimeout(callback, 2000); 
    anotherCallback();
}

function secondAction(message){
    console.log(message)
}

function thirdAction(){
    console.log("I'm the third action")
}
setTimeout(() =>
 firstAction(() => 
 secondAction("I'm the second action"), "I'm the first action",thirdAction), 5000)








