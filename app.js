let successGrade= prompt("Enter the you score");

let noteOutput = 
(successGrade>=90) ? "AA" :
(successGrade>=85) ? "BA" :
(successGrade>=80) ? "BB" :
(successGrade>=75) ? "CB" :
(successGrade>=70) ? "CC" :
(successGrade>=65) ? "DC" :
(successGrade>=60) ? "DD" :
(successGrade>=55) ? "FD" :
(successGrade>=50) ? "FF" :
      "Please! Enter score "

document.write (noteOutput);