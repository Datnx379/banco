// JavaScript: Manipulating HTML Elements
document.addEventListener("DOMContentLoaded", function () {
    // Change text content of an element
    document.getElementById("js-example").textContent = "This is updated using JavaScript";

    // Add a new class to an element
    document.getElementById("js-example").classList.add("new-class");

    // Create a new element and append it
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added using JavaScript.";
    document.body.appendChild(newElement);
});

// jQuery: Manipulating HTML Elements
$(document).ready(function () {
    // Change text content of an element
    $("#jquery-example").text("This is updated using jQuery");

    // Add a new class to an element
    $("#jquery-example").addClass("new-class");

    // Create a new element and append it
    $("<p>This is a new paragraph added using jQuery.</p>").appendTo("body");
});