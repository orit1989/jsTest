// 1. Write a function that returns either a letter grade “A” “B” … or "out of range" if it is not a proper grade when a numeric grade is passed in to that function:
//  
// 90 - 100 A
// 80 - 89 B
// 72 - 79 C
// 0 - 71 F

// function that takes a numeric value and returns a letter according to the range its in - 
// if numeric value is within 90-100 return the letter "A"
// else if numeric value is within 80-89 return the letter "B"
// else if numeric value is within 72-79 return the letter "C"
// else if numeric value is within 0-71 return the letter "F"
// else numeric value is not found within these ranges return "Out of range"

function grade(number){
    if(number >= 90 && number <= 100) {
        console.log("A")
    } 
    else if (number >= 80 && number <= 89) {
        console.log("B")
    } 
    else if (number >= 72 && number <= 79){
        console.log("C")
    }
    else if(number >= 0 && number <= 71){
        console.log("F")
    }
    else {
        console.log("Out of range")
    }
}


// 2. Write JS/JQuery code that sets focus to an anchor tag with id="main" when a button with class="skip" is clicked.
//  
// <button class=”skip”>Skip to Main</button>
// <a id=”main”>...</a>
    

// 3. Write JS/JQuery code to give the class “learn” to all links on a page that have the text “learn more”:
//  
// <a href=”....”>learn more</a>







