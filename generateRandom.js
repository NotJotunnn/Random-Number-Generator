const start = document.querySelector("#start");
const output = document.querySelector("#output");

start.addEventListener("click", function() {

    // Gets the value from input
    let value = document.querySelector("#size").value;

    // Default value
    let size = 8;

    // String that holds output from for
    let number = ''

    // Base condition to check if variable value has value
    if(value > 0 && value < 19 && value != null) {
        size = value;
    } else {
        size = 8;
    };

    // For to randomize and fill-in the string
    for(i = 1; i <= size; i++) {
        number += Math.round(Math.random() * 9)
    }

    // Adds to the p element the results
    return output.textContent = number;
})

// TODO:
// Use arrays instead of Math.random()
// - Allow for both capslock AND special characters within said arrays