function invertedPattern(){
    for(let line = 1; line <= 4; line++){
        let starString = "";
        // This loop builds the string of asterisks
        for(let stars = 1; stars <= 4 - line + 1; stars++){
            starString += "*";
        }
        // This prints the entire string on one line
        console.log(starString);
    }
}
invertedPattern();