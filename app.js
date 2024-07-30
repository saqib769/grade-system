function calculateGrades() {
    // Get the values from the input fields
    var english = parseInt(document.getElementById("english").value) || 0;
    var physics = parseInt(document.getElementById("physics").value) || 0;
    var chemistry = parseInt(document.getElementById("chemistry").value) || 0;
    var biology = parseInt(document.getElementById("biology").value) || 0;

    // Calculate grades
    var englishGrade = getGrade(english);
    var physicsGrade = getGrade(physics);
    var chemistryGrade = getGrade(chemistry);
    var biologyGrade = getGrade(biology);

    // Calculate total and percentage
    var totalMarks = english + physics + chemistry + biology;
    var percentage = (totalMarks / 400) * 100;

    // Display the grades and percentage
    var output = `
        <strong>English Grade:</strong> ${englishGrade} <br>
        <strong>Physics Grade:</strong> ${physicsGrade} <br>
        <strong>Chemistry Grade:</strong> ${chemistryGrade} <br>
        <strong>Biology Grade:</strong> ${biologyGrade} <br>
        <br>
        <strong>Total Marks:</strong> ${totalMarks} <br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}% <br>
    `;
    document.getElementById("output").innerHTML = output;

    // Alert if any mark is less than 40
    if (englishGrade === 'Failed' || physicsGrade === 'Failed' || chemistryGrade === 'Failed' || biologyGrade === 'Failed') {
        alert("One or more subjects have marks less than 40. Failed.");
    }

    document.getElementById("marksForm").reset();
}

    


function getGrade(marks) {
    if (marks > 70) {
        return 'A';
    } else if (marks > 60) {
        return 'B';
    } else if (marks > 50) {
        return 'C';
    } else if (marks > 40) {
        return 'D';
    } else {
        return 'Failed';
    }
}
