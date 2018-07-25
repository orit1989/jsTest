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









