// gradeCalculator.js

class GradeCalculator {
    constructor() {
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    calculateAverage() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return (sum / this.grades.length) || 0;
    }

    getLetterGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return 'A';
        else if (avg >= 80) return 'B';
        else if (avg >= 70) return 'C';
        else if (avg >= 60) return 'D';
        else return 'F';
    }
}

// examInteractions.js

function startExam(examName) {
    console.log(`Starting exam: ${examName}`);
    // Additional functionality for starting an exam
}

function submitExam() {
    console.log('Exam submitted.');
    // Additional functionality for submitting an exam
}

// Example usage:
const gc = new GradeCalculator();
gc.addGrade(90);
gc.addGrade(85);
console.log(`Average: ${gc.calculateAverage()}`);
console.log(`Letter Grade: ${gc.getLetterGrade()}`);
startExam('Math 101');
