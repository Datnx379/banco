// JavaScript Events Example

// Function to handle button click event
function handleClick() {
    alert("Button was clicked!");
}

// Function to handle mouse over event
function handleMouseOver() {
    console.log("Mouse is over the element!");
}

// Function to handle input change event
function handleInputChange(event) {
    console.log("Input value changed to:", event.target.value);
}

// Adding event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    const hoverElement = document.getElementById("hoverElement");
    const inputField = document.getElementById("inputField");

    if (button) {
        button.addEventListener("click", handleClick);
    }

    if (hoverElement) {
        hoverElement.addEventListener("mouseover", handleMouseOver);
    }

    if (inputField) {
        inputField.addEventListener("input", handleInputChange);
    }
});