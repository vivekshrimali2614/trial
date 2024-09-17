let rows = 5;

// Loop through each row
for (let i = 1; i <= rows; i++) {
    let output = '';
    
    // Loop to add stars in each row
    for (let j = 1; j <= i; j++) {
        output += '* ';
    }
    
    // Print the output for the current row
    console.log(output);
}
