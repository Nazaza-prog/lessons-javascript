// let languages = ["Python", "Javascript", "C++"];
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length);
//
// for (let i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// }

// function getSum(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// let numbers = [10, 15, 24, 46];
// console.log(getSum(numbers));

// let name = [];
// name.push("Vova");//додає елемент на кінець списка
// name.push("Vova2");
// name.pop();//видалення останнього елемента
// name.unshift("Vova3", "Vova4");//додає елемент на початок списка
// name.shift();//видаляє на початку
// console.log(name.slice(0, 1));//зріз
//
// console.log(name);


// let color = ["red", "green", "blue", "yellow", "brown", "cyan", "white"];
// // color.splice(0, 1,"pink");//перезаписує, заміняє
// let deleted = color.splice(4, 2);//видалення
// color.splice(0, 0, "pink")
// console.log(color);

// function registerNames(name){
//     if (name.trim() === ""){
//         alert("Please enter a name");
//         return;
//     }
//     let dublicationName = false;
//     for (i = 0; i < eventNames.length; i++){
//         if (eventNames === name){
//             dublicationName = true;
//         }
//     }
//     if (dublicationName){
//         alert("Учасник зареєстрований");
//     }else {
//         eventNames.push(name);
//         alert(`Учасник ${name} зареєстрований`)
//     }
// }
//
// function removeNames(name){
//     let index = -1;
//     for (i = 0; i < eventNames.length; i++){
//         if (eventNames[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1){
//         alert("Такого учасника немає")
//     }else {
//         eventNames.splice(index, 1);
//         alert(`Учасник ${name} видалений`)
//     }
// }
//
// function printCount() {
//     alert(`Всього учасників ${eventNames.length}`)
// }
//
//let eventNames = ["Ivan", "Olha", 'Maria', 'Stepan', 'Oleh'];



// registerNames("Olha");
// removeNames("Olha");
// printCount();

let eventNames = ["Ivan", "Olha", 'Maria', 'Stepan', 'Oleh'];
// for (let i = 0; i < eventNames.length; i++) {
//     console.log(`${(eventNames[i]}`);
// }

// for (let name of eventNames) {
//     console.log(`${name}`);
// }

eventNames.forEach(function (name, index) {
    console.log(name);
    console.log(index);
})