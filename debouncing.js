1 // in index.html
//make sure the input box

<input type = "text" onKeyup = "betterFunction()">






2 // this is my index.js

// Initialize a counter to keep track of how many times getData is called
let count = 0;

// This is the original function we want to control using debounce
function getData() {
  console.log("Fetching Data", count++);
}

function debouncing(func, delay) {
  // timer will hold the ID of the timeout between function calls
  let timer;

  // Return a new function that will be called instead of the original
  return function () {
    // Store the current context (this) and any arguments passed to the function
    let context = this;
    let args = arguments;

    // Clear the previous timer if this function is called again before delay
    clearTimeout(timer); // this ensures previous calls don't trigger func

    // Set a new timer that will call the original function after 'delay' ms
    timer = setTimeout(() => {
      // Call the original function with the correct context and arguments
      func.apply(context, args);
    }, delay);
  };
}

// Create a debounced version of getData with a delay of 300ms
const betterFunction = debouncing(getData, 300);

// Now, when betterFunction is called rapidly,
// getData will only be executed once after 300ms of no calls
