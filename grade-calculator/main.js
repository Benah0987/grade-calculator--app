function calculateGrade() {
    var grade = parseInt(document.getElementById("grade").value);
    var result = document.getElementById("result");

    if (grade >= 70) {
        result.innerHTML = "Congratulations you scored an A!";
    } else if (grade >= 60) {
        result.innerHTML = "Excellent you got a B!";
    } else if (grade >= 50) {
        result.innerHTML = "Good you scored a C!";
    } else if (grade >= 40) {
        result.innerHTML = "Room for improvement you scored a D!";
    } else {
        result.innerHTML = "Your grade is an E!";
    }
}