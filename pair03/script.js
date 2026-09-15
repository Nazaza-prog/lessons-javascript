// №1________________________________________
// дитина 0-12 підліток 12-17 дорослий >17

// let years = +prompt("Скільки вам років:");
// if (years >= 18) {
//     console.log("Дорослий");
// }
// else if (years > 12) {
//     alert("Підліток");
// }
// else  {
//     console.log("Дитина");
// }


// №2____________________________________
// Перевірка на пароль

// const login = "admin";
// const password = "12345";
//
// let user_login = prompt("Enter your login:");
// let user_password = +prompt("Enter your password:");
//
// if (user_login === login && user_password === password) {
//     console.log("User login and password is correct")
// }
// else {
//     console.log("User login and password is not correct");
// }


// №3_____________________________________
// день тижня, виводимо

// let day = +prompt("Enter your day of the day:");
//
// if (!(day < 1 && day > 7)) {
//     switch (day){
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//
//         default:
//             alert("Такого дня не має")
//     }
// }


// №4______________________________________

let productName = prompt("Enter product name: ");
let productPrice = prompt("Enter product price: ");
let productCount = prompt("Enter product count: ");
let discountCard = confirm("Чи є в тебе дисконтна карта? ");
let deliveryType = prompt("Enter deliveryType: courier, post, pickup ");


let totalPrice = productPrice * productCount;

// <2000 - 0%
// >2000 - 5%
// >5000 - 10%
// >10000 - 15%

let shopDiscount = 0;
if (totalPrice >= 10000) {
    shopDiscount = 15;
}
else if (totalPrice >= 5000) {
    shopDiscount = 10;
}
else if (totalPrice >= 2000) {
    shopDiscount = 5;
}

// <2000 - 5%
// >2000 - 10%
// >5000 - 12%
// >10000 - 15%

let shopDiscountCard