/* DEMO */

// const repeat = (str, times) => {
// 	let result = '';
// 	for (let i = 0; i < times; i++) {
// 		result += str;
// 	}
// 	return result;
// };

// const scream = (str) => {
// 	return str.toUpperCase() + '!!!';
// };

// const getRantText = (phrase) => {
// 	let text = scream(phrase);
// 	let rant = repeat(text, 8);
// 	return rant;
// };

// const makeRant = (phrase, el) => {
// 	const h3 = document.createElement('h3');
// 	h3.innerText = getRantText(phrase);
// 	el.appendChild(h3);
// };
// console.log('HELLO!');

// makeRant('I hate mayonnaise', document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);

//we can use dev tools to step through this and watch the call stack area to see whats happening.

//JS is single threaded and can only run one line of code at a time.
//just run this to see.  it all happens 1 line at a time.

// console.log('First')
// alert('Second')
// console.log("Third")

//we do have a way around this limitation.
//callback functions!  oh no not callbacks :(

// console.log('First')       //<=executed by JS
// setTimeout(function () {   //<=executed by the browser Web Apis
//   console.log('Third')
// },2000)
// console.log("Second")      //<=executed by JS

//the browser, written in c++, does the work of keeping track for us. C++ does things that JS is not good at or things that take time.

/* 
JS is not a multitasker.  So when we pass a function as an argument as a Callback Function to things like setTimeout which the web Apis handle, JS can then continue on while the web apis work.
This is why callbacks are used so frequently for these asynchronous things.  Web Apis handle these things that take time or a request.
setTimeout()
setInterval()
requests
The browser takes care of these.
*/

//Callbacks can get messy very quickly. Instead of writing several callbacks we can use promises.

const btn = document.querySelector("#btnTimer")

// setTimeout(() => {
//   //<=we can keep nesting but  Oofta!
//   btn.style.transform = `translateX(100px)`
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

//still not great and this is avery mild nested scenario it can get really out of hand.
//This is where promises come in.
// const moveX = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`
//     if (callback) callback()
//   },delay)
// }
// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000, () => {
//         moveX(btn, 500, 1000)
//       })
//     })
//   })
// })


//PROMISES
//Untangle long nested callback situations "CALLBACK HELL"
//Much easier to read and understand and usually shorter as well.
//A flatter less nested approach.
/*
A Promise is an Object representing the eventual completion or failure of an asynchronous operation. 
Promises = A pattern for writing async code.
1.) How you create a promise
2.) How you create a function that returns a promise
3.) How to consume or interact with promises
*/

moveXPromise(btn, 100, 1000)
  .then(() => moveXPromise(btn, 100, 1000))
  .then(() => moveXPromise(btn, 200, 1000))
  .then(() => moveXPromise(btn, 300, 1000))
  .then(() => moveXPromise(btn, 50, 1000))
  .then(() => moveXPromise(btn, 50, 1000))
  .catch((position) => {
    alert('Cannot Move Further!')
  })