function starPrint(){
    
    // Outer loop for the number of rows
  for (let i = 1; i <= 4; i++) {
    let row = ""; // Reset the string for each new row
    // Inner loop for the number of columns
    for (let j = 1; j <= 5; j++) {
      row += '*'; // Add a star to the current row string
    }
    console.log(row); // Print the complete row string
  }
}

starPrint();