function getAverage(scores) {
    let sum = 0;

    for (const score of scores) { //92, 88, 12, 77, 57, 100, 67, 38, 97, 89
        console.log(score);

        sum += score; //sum = 92,sum = 180,sum = 192,sum = 269,sum = 326,sum = 426,sum = 493,sum = 531,sum = 628,sum = 717
        console.log(`this is sum ${sum}`);
        console.log(scores.length);

    }


    return sum / scores.length; // 71.7
}

function getGrade(score) { //37
    console.log(`this is the function score ${score}`);

    console.log(`score is ${score === 100}`);

    if (score === 100) { //false 
        return "A++";

    } else if (score >= 90) {
        return "A";

    } else if (score >= 80) {
        return "B";

    } else if (score >= 70) {
        return "C";

    } else if (score >= 60) {
        return "D";
    } else {
        return "F"; //true
    }
}

function hasPassingGrade(score) {    
    return getGrade(score) !== "F"; //false
}

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores); //71.7

    let grade = getGrade(studentScore); //37 or F


    return "Class average: " + average + ". Your grade: " + grade + ". You " +
        (hasPassingGrade(studentScore) ? "passed" : "failed") + " the course.";
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));  