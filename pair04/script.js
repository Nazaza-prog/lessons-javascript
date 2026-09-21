//Цикли

// for (let i = 10; i >= 1; i--) { // i += 1; i = i + 1
//     console.log(`Число ${11 - i} - ${i}`)
// }

// sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum  += i;
// }
// console.log(sum);

// for (let i = 0; i <= 100; i++) {
//     if (1 >= 20 && i % 3 === 0 && i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }

// for (let i = 0; i <= 100; i++) {
//     if (1 % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

let studentsCount = +prompt("Enter your students number");
if (studentsCount > 0) {
    let sum = 0, highLevel = 0, otherLevel = 0, av;
    let minGrade = 12, maxGrade = 1;
    for ( let i = 1; i <= studentsCount; i++) {
        let grade = +prompt(`Введіть оцінку учня № ${i} від 1 до 12`);
        if (!(grade >= 1 && grade <= 12)) {
            alert("error")
            i--;
            continue;
        }
        sum += grade;

        if (grade >= 10){
            highLevel++;
        }else{
            otherLevel++;
        }
        if (grade < minGrade){
            minGrade = grade;
        }
        if (grade > maxGrade){
            maxGrade = grade;
        }
    }
    av = sum / studentsCount;
}
alert(`Кількість учнів: ${studentsCount}\n Сума оцінок: ${sum}\n 
середнє по оцінкам: ${av}\n
мінімальна оцінка: ${minGrade}\n
максимальна оцінка: ${maxGrade}\n
високий рівень: ${highLevel}, інші ${otherLevel}\n`);