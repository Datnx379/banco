// JavaScript: Changing CSS styles
document.getElementById("myElement").style.color = "blue";
document.getElementById("myElement").style.fontSize = "20px";
document.getElementById("myElement").style.backgroundColor = "yellow";

// jQuery: Changing CSS styles
$("#myElement").css("color", "blue");
$("#myElement").css("font-size", "20px");
$("#myElement").css("background-color", "yellow");

// jQuery: Changing multiple CSS styles at once
$("#myElement").css({
    color: "blue",
    fontSize: "20px",
    backgroundColor: "yellow"
});