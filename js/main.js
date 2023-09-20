// Функция для перехода на страницу загрузки
function redirectToLoadingPage() {
    window.location.href = "loading.html";
}

// Функция для скрытия страницы загрузки и перехода на целевую страницу
function hideLoadingAndRedirect(targetPage) {
    const loadingPage = document.querySelector('.loading-text'); // Замените на ваш селектор
    loadingPage.style.display = 'none'; // Скрыть страницу загрузки
    window.location.href = targetPage; // Перейти на целевую страницу
}

// Обработчик события загрузки страницы
window.addEventListener('load', function () {
    // Проверяем, находимся ли мы на странице загрузки (loading.html)
    if (window.location.pathname.includes(".loading.html")) {
        // Задержка перед переходом на целевую страницу (в данном случае, 3 секунды)
        setTimeout(function () {
            hideLoadingAndRedirect(".about.html"); // Замените на целевую страницу
        }, 3000);
    }
});
