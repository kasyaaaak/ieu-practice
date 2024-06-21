function showNotification() {
  // Перевіряємо, чи підтримує браузер повідомлення
  if (!("Notification" in window)) {
    alert("Цей браузер не підтримує сповіщення");
  } else {
    // Запитуємо дозвіл на показ повідомлень
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // Створюємо повідомлення
        const notification = new Notification("Вступай в МЄУ!", {
          body: "Обирайте успішне майбутнє разом з Міжнародним Європейським Університетом!",
          icon: "./img/icon.jpg", // шлях до зображення для повідомлення
        });

        // Обробник кліку за повідомленням
        notification.onclick = function () {
          window.open("https://ieu.edu.ua/"); // перехід по кліку на повідомленні
          notification.close(); // закриваємо повідомлення
        };
      }
    });
  }
}

function scheduleNotification() {
  // Затримка у мілісекундах (5 секунд)
  let delay = 5000;

  setTimeout(function () {
    // Перевіряємо, чи підтримує браузер повідомлення
    if (!("Notification" in window)) {
      alert("Цей браузер не підтримує сповіщення");
    } else {
      // Запитуємо дозвіл на показ повідомлень
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          // Створюємо повідомлення
          const notification = new Notification("Вступай в МЄУ!", {
            body: "Обирайте успішне майбутнє разом з Міжнародним Європейським Університетом!",
            icon: "./img/icon.jpg", // шлях до зображення для повідомлення
          });

          // Обробник кліку за повідомленням
          notification.onclick = function () {
            window.open("https://ieu.edu.ua/"); // перехід по кліку на повідомленні
            notification.close(); // закриваємо повідомлення
          };
        }
      });
    }
  }, delay);
}
