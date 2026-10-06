// function showMessage() {
//     console.log("Hello World!");
// }
//
// showMessage();
// showMessage();
// showMessage();

// function showProduct(name, price = "Немає в наявності") {
//     console.log(`Товар ${name}: ${price}грн`);
// }
// showProduct("Notebook", 15000); //аргумент

// function calculate(price, count) {
//     // let total = price * count;
//     return price * count;
// }
// let total = calculate(1000, 5);
// console.log(total);

// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     }
//     else {
//         return 0;
//     }
// }
// let discount1 = +prompt("Please enter a number");
//
// console.log(discount(discount1));

// function getProductTotal(price, count) {
//     return price * count;
// }
//
// function getDiscount(total) {
//     if (total >= 10000){
//         return 0.15;
//     }
//     else if (total >= 5000) {
//         return 0.1;
//     }
//     else if (total >= 2000) {
//         return 0.05;
//     }
//     else {
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percent) {
//     return total * percent;
// }
//
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let productName = prompt('Enter product name');
// let productPrice = +prompt('Enter product price');
// let productCount = +prompt('Enter product count');
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount()
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн`)
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal} грн`);
// console.log(`Знижка: ${discount}  %`);
// console.log(`Сума знижки: ${productDiscountValue} грн`);
// console.log(`До сплати: ${productFinalPrice} грн`);


//_____________________________________


// function getFuelVolume(distance, consumption) {
//     return (distance / 100) * consumption;
// }
// function getTripCost(fuelVolume, pricePerLiter) {
//     return fuelVolume * pricePerLiter;
// }
// function getCostPerKm(totalCost, distance) {
//     return totalCost / distance;
// }
//
// let startCity = prompt('Введіть місто старту');
// let finishCity = prompt('Введіть місто фінішу');
// let distance = +prompt('Введіть відстань у км');
// let consumption = +prompt('Введіть розхід пального (л/100км)');
// let pricePerLiter = +prompt('Введіть вартість 1л пального (грн)');
//
//
// let totalFuel = getFuelVolume(distance, consumption);
// let totalCost = getTripCost(totalFuel, pricePerLiter);
// let costPerKm = getCostPerKm(totalCost, distance);
//
// console.log(`Маршрут: ${startCity} — ${finishCity}`);
// console.log(`Відстань: ${distance} км`);
// console.log(`Витрата пального: ${consumption} л/100км`);
// console.log(`Необхідно пального: ${totalFuel} л`);
// console.log(`Ціна за літр: ${pricePerLiter} грн`);
// console.log(`З ${startCity} до ${finishCity} потрібно ${totalCost} грн`);
// console.log(`Вартість 1 км: ${costPerKm} грн`);

