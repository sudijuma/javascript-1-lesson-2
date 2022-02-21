// We code it together

// 1. Select heading h2
var head = document.querySelector("h2");
console.log(head);
// 2. Select element with class .heading2
var headerClass = document.querySelector(".heading2")
console.log(headerClass);
// 3. Select element with id #list using querySelector
var id = document.querySelector("#list");
console.log(id);

// 4. Select element with id #list using getElementById
var idElement = document.getElementById("list");
console.log(idElement);
// 5. Select single li
var singleLi = document.querySelector("li");
console.log(singleLi);
// 6.
var allTheAnimals = document.querySelectorAll("li");

for(var i = 0; i < allTheAnimals.length; i++){
    console.log(allTheAnimals);
}

//  a. Select Multiple li's
//  b. Loop on the list items

// 7.
    // a. select h1 element
    // b. Change the color of that h1 to be purple
    // c. Change the border to be 1px solid green
    // d. Change background colour to be light gray
    // e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )

var styling = document.querySelector("h1");
/* document.querySelector("h1").style.border = "solid green 1px" */
styling.style.color = "gold";
styling.style.border = "solid green 5px"
styling.style.background = "black";
styling.style.padding = "2em";