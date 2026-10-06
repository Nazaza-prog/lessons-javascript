let registeredLogin = "";
let registeredPassword = "";
let isRegistered = false;

function register() {
    let login = prompt("Придумайте логін:");

    if (!login || login === "") {
        alert("Реєстрацію скасовано або введено неправильний логін");
        return;
    }
    let password = prompt("Придумайте пароль:");
    if (!password || password === "") {
        alert("Реєстрацію скасовано або введено неправильний пароль");
        return;
    }
    registeredLogin = login;
    registeredPassword = password;
    isRegistered = true;
    alert("Реєстрація успішна");
}
function loginUser() {
    if (!isRegistered) {
        alert("Спочатку зареєструйся");
        return;
    }
    const maxTries = 3;
    let tries = 0;

    while (tries < maxTries) {
        let inputLogin = prompt(`Вхід у систему. Спроба ${tries + 1} з ${maxTries}.\nВведіть логін:`);

        if (inputLogin === null) {
            alert("Спробу входу скасовано");
            return;
        }
        let inputPassword = prompt("Введіть пароль:");
        if (inputPassword === null) {
            alert("Спробу входу скасовано");
            return;
        }
        if (inputLogin === registeredLogin && inputPassword === registeredPassword) {
            alert("Вхід дозволено");
            console.log("Успішний вхід у систему");
            return;
        } else {
            tries++;
            let remainingTries = maxTries - tries;

            if (remainingTries > 0) {
                alert(`Неправильний логін або пароль! Залишилося спроб: ${remainingTries}`);
            } else {
                alert("Акаунт заблоковано, ви використали всі 3 спроби");
                console.log("Вхід заблоковано через 3 невдалі спроби");
            }
        }
    }
}
function startApp() {
    let menuChoice;
    do {
        menuChoice = prompt(
            " Система реєстрації та входу користувача\n" +
            "1 — Зареєструватися\n" +
            "2 — Увійти в акаунт\n" +
            "0 — Вийти\n\n" +
            "Оберіть дію (0, 1 або 2):"
        );
        if (menuChoice === null) {
            alert("Роботу програми завершено");
            break;
        }
        switch (Number(menuChoice)) {
            case 1:
                register();
                break;
            case 2:
                loginUser();
                break;
            case 0:
                alert("До побачення");
                break;
            default:
                alert("Не так. Оберіть 1, 2 або 0");
                break;
        }
    } while (Number(menuChoice) !== 0);
}
startApp();