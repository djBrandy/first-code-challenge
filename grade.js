function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';  // Return 'A' if mark is greater than 79
    } else if (mark >= 60) {
        return 'B';  // Return 'B' if mark is greater than or equal to 60 but less than 79
    } else if (mark >= 49) {
        return 'C';  // Return 'C' if mark is greater than or equal to 49 but less than 60
    } else if (mark >= 40) {
        return 'D';  // Return 'D' if mark is greater than or equal to 40 but less than 49
    } else {
        return 'E';  // Return 'E' if mark is below 40
    }
}

function main() {
    let mark = null;

    while (mark === null || isNaN(mark) || mark < 0 || mark > 100) {
        const input = window.prompt("Enter student's mark (between 0 and 100):");
        if (input === null) {
            return;  // Exit the function if user cancels input
        }
        mark = parseFloat(input);  // Parse user input to a floating-point number
    }

    const grade = calculateGrade(mark);  // Calculate grade based on the input mark
    window.alert("Grade: " + grade);  // Display the calculated grade in an alert
}

main();  // Call the main function to start the program
        