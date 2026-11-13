const grades = [10, 8, 12, 7, 9, 11];

console.log("===== АНАЛІЗ ОЦІНОК =====\n");
console.log("Оцінки студента:");
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}
console.log("\nКількість оцінок:", grades.length);


function calculateAverage(gradesArray) {
    let sum = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        sum += gradesArray[i];
    }
    let average = sum / gradesArray.length;
    return average;
}


function findMaxGrade(gradesArray) {
    let max = gradesArray[0];
    for (let i = 1; i < gradesArray.length; i++) {
        if (gradesArray[i] > max) {
            max = gradesArray[i];
        }
    }
    return max;
}


function countHighGrades(gradesArray) {
    let count = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] >= 10) {
            count++;
        }
    }
    return count;
}


function showResults(gradesArray) {
    console.log("\n===== АНАЛІЗ ОЦІНОК =====");
    console.log("Оцінки студента: " + gradesArray.join(", "));
    console.log("");
    console.log("Кількість оцінок: " + gradesArray.length);
    console.log("Середній бал: " + calculateAverage(gradesArray));
    console.log("Найвища оцінка: " + findMaxGrade(gradesArray));
    console.log("Кількість високих оцінок: " + countHighGrades(gradesArray));
    console.log("=========================");
}

showResults(grades);