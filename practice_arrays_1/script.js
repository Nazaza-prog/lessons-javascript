let userName = "Назар";
let birthDay = 7;
let birthMonth = 5;

// Завдання 1
let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let nameInput = prompt("Введіть ім'я:", userName);
if (nameInput) userName = nameInput;

let dayInput = +prompt("Введіть день народження (1-31):", birthDay);
while (isNaN(dayInput) || dayInput < 1 || dayInput > 31) {
    dayInput = +prompt("Не то! Введіть день від 1 до 31:");
}
birthDay = dayInput;

let monthInput = +prompt("Введіть місяць народження (1-12):", birthMonth);
while (isNaN(monthInput) || monthInput < 1 || monthInput > 12) {
    monthInput = +prompt("Не то! Введіть місяць від 1 до 12:");
}
birthMonth = monthInput;

let personalNumber = (userName.length + birthDay + birthMonth) % topics.length;
alert(`Рекомендований вебінар: ${topics[personalNumber]}`);

let catalog = "Каталог вебінарів:\n";
for (let i = 0; i < topics.length; i++) {
    let status = seats[i] > 0 ? "Набір відкрито" : "Місць немає";
    catalog += `${i + 1}. ${topics[i]} - ${seats[i]} місць (${status})\n`;
}
alert(catalog);

let minSeats = +prompt("Введіть мінімальну кількість місць:");
let filtered = "Знайдені вебінари:\n";
let foundCount = 0;
for (let i = 0; i < topics.length; i++) {
    if (seats[i] >= minSeats) {
        filtered += `${topics[i]} (${seats[i]} місць)\n`;
        foundCount++;
    }
}
if (foundCount > 0) alert(filtered);
else alert("Збігів немає");


// Завдання 2
let searchTopic = prompt("Введіть назву вебінару для пошуку:");
if (searchTopic === null) {
    alert("Пошук скасовано");
} else {
    let foundIndex = -1;
    for (let i = 0; i < topics.length; i++) {
        if (topics[i].toLowerCase() === searchTopic.trim().toLowerCase()) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex === -1) {
        alert("Невідома назва вебінару");
    } else if (seats[foundIndex] <= 0) {
        alert("Вільних місць немає");
    } else {
        let confirmReg = confirm(`Вебінар знайдено. Вільних місць: ${seats[foundIndex]}. Записатися?`);
        if (confirmReg) {
            seats[foundIndex]--;
            alert(`Успіх! Залишилось місць: ${seats[foundIndex]}`);
        } else {
            alert("Запис скасовано");
        }
    }
}


// Завдання 3
let participants = [userName];
alert(`Додано першого учасника: ${userName}`);

for (let i = 1; i <= 4; i++) {
    let pName = prompt(`Введіть ім'я учасника ${i + 1}:`);
    if (pName === null) {
        alert("Введення скасовано");
        break;
    }
    while (pName.trim() === "") {
        pName = prompt("Ім'я не може бути порожнім. Введіть знову:");
        if (pName === null) break;
    }
    if (pName === null) break;
    participants.push(pName.trim());
}

let partList = "Список учасників:\n";
for (let i = 0; i < participants.length; i++) {
    partList += `${i + 1}. ${participants[i]}\n`;
}
alert(partList);

let longerCount = 0;
for (let i = 0; i < participants.length; i++) {
    if (participants[i].length > userName.length) {
        longerCount++;
    }
}
alert(`Поріг (довжина вашого імені): ${userName.length}\nКількість довших імен: ${longerCount}`);

if (confirm("Бажаєте змінити ім'я учасника?")) {
    let indexToChange = +prompt(`Введіть номер учасника (1 - ${participants.length}):`);
    if (!isNaN(indexToChange) && indexToChange >= 1 && indexToChange <= participants.length) {
        let newName = prompt("Введіть нове ім'я:");
        if (newName && newName.trim() !== "") {
            participants[indexToChange - 1] = newName.trim();
            let updatedList = "Оновлений список:\n";
            for (let i = 0; i < participants.length; i++) {
                updatedList += `${i + 1}. ${participants[i]}\n`;
            }
            alert(updatedList);
        }
    }
}


// Завдання 4
let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (birthDay + birthMonth) % 7;
let personalVisits = [];
for (let i = 0; i < visits.length; i++) {
    personalVisits.push(visits[i] + bonus);
}

function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
        if (values[i] > max) max = values[i];
        if (values[i] < min) min = values[i];
    }
    return [sum, sum / values.length, max, min];
}

let stats = getVisitStats(personalVisits);
alert(`Бонус: ${bonus}\nСума: ${stats[0]}\nСереднє: ${stats[1]}\nМаксимум: ${stats[2]}\nМінімум: ${stats[3]}`);

let threshold = +prompt("Введіть поріг відвідуваності:");
while (isNaN(threshold)) {
    threshold = +prompt("Введіть коректне число:");
}

let thresholdCount = 0;
let reachedNumbers = [];
for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= threshold) {
        thresholdCount++;
        reachedNumbers.push(i + 1);
    }
}
alert(`Кількість значень >= ${threshold}: ${thresholdCount}`);

if (confirm("Показати номери вебінарів, що досягли порогу?")) {
    alert(`Номери: ${reachedNumbers.join(", ")}`);
}


// Завдання 5
function showList() {
    let msg = "Список:\n";
    for (let i = 0; i < topics.length; i++) {
        msg += `${i + 1}. ${topics[i]} (${seats[i]} місць)\n`;
    }
    alert(msg);
}

function findTopic() {
    let query = prompt("Введіть назву для пошуку:");
    if (!query) return;
    let res = "Знайдено:\n";
    let found = false;
    for (let i = 0; i < topics.length; i++) {
        if (topics[i].toLowerCase().includes(query.trim().toLowerCase())) {
            res += `${topics[i]}\n`;
            found = true;
        }
    }
    alert(found ? res : "Нічого не знайдено");
}

let choice;
do {
    choice = prompt("1 - показати\n2 - додати\n3 - перейменувати\n4 - знайти\n5 - видалити останній\n0 - вихід");
    if (choice === null) {
        if (confirm("Бажаєте вийти?")) break;
        else continue;
    }

    switch (+choice) {
        case 1:
            showList();
            break;
        case 2:
            let newT = prompt("Назва нового вебінару:");
            if (newT && newT.trim() !== "") {
                let newS = +prompt("Кількість місць:");
                if (!isNaN(newS) && newS >= 0) {
                    topics.push(newT.trim());
                    seats.push(newS);
                    alert("Додано!");
                }
            }
            break;
        case 3:
            let idx = +prompt(`Номер для перейменування (1-${topics.length}):`);
            if (!isNaN(idx) && idx >= 1 && idx <= topics.length) {
                let rName = prompt("Нова назва:");
                if (rName && rName.trim() !== "") {
                    topics[idx - 1] = rName.trim();
                    alert("Перейменовано!");
                }
            }
            break;
        case 4:
            findTopic();
            break;
        case 5:
            if (topics.length > 0 && confirm("Видалити останній вебінар?")) {
                topics.pop();
                seats.pop();
                alert("Видалено!");
            }
            break;
        case 0:
            if (confirm("Вийти з програми?")) {
                choice = 0;
            } else {
                choice = -1;
            }
            break;
        default:
            alert("Невідомий пункт");
    }
} while (Number(choice) !== 0);


// Завдання 6
let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let personalScore = (birthDay * birthMonth + userName.length) % 101;
requestScores.push(personalScore);

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) high.push(scores[i]);
        else if (scores[i] >= 50) medium.push(scores[i]);
        else low.push(scores[i]);
    }
    return [high, medium, low];
}

let adding = true;
while (adding) {
    let val = prompt("Введіть новий бал (0-100):");
    if (val === null) break;
    let score = +val;
    if (isNaN(score) || score < 0 || score > 100) {
        alert("Некоректне значення!");
    } else {
        requestScores.push(score);
        alert("Бал додано!");
    }
    adding = confirm("Продовжити додавання балів?");
}

let groups = distributeRequests(requestScores);
let high = groups[0];
let medium = groups[1];
let low = groups[2];

function getAvg(arr) {
    if (arr.length === 0) return 0;
    let s = 0;
    for (let i = 0; i < arr.length; i++) s += arr[i];
    return s / arr.length;
}

let maxLen = high.length;
if (medium.length > maxLen) maxLen = medium.length;
if (low.length > maxLen) maxLen = low.length;

let largest = [];
if (high.length === maxLen) largest.push("High");
if (medium.length === maxLen) largest.push("Medium");
if (low.length === maxLen) largest.push("Low");

let pGroup = personalScore >= 85 ? "High" : (personalScore >= 50 ? "Medium" : "Low");

alert(
    `High: [${high.join(", ")}], Кількість: ${high.length}, Сер. бал: ${getAvg(high).toFixed(2)}\n` +
    `Medium: [${medium.join(", ")}], Кількість: ${medium.length}, Сер. бал: ${getAvg(medium).toFixed(2)}\n` +
    `Low: [${low.join(", ")}], Кількість: ${low.length}, Сер. бал: ${getAvg(low).toFixed(2)}\n\n` +
    `Найбільша група: ${largest.join(", ")}\n` +
    `Ваш бал: ${personalScore} (${pGroup})`
);