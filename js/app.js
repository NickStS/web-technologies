// Функция для загрузки страницы загрузки
function loadLoadingPage() {
  showLoadingPage(); // Показать страницу загрузки

  // Загрузить страницу загрузки
  fetch('loading.html')
    .then(response => response.text())
    .then(loadingHTML => {
      document.body.innerHTML = loadingHTML;
    })
    .catch(error => {
      console.error("Не удалось загрузить страницу загрузки.");
      hideLoadingPage();
    });
}

// Функция для загрузки целевой страницы асинхронно
async function loadTargetPage(targetPageURL) {
  loadLoadingPage(); // Загрузить страницу загрузки

  try {
    const response = await fetch(targetPageURL);
    if (response.ok) {
      const targetPageHTML = await response.text();
      document.body.innerHTML = targetPageHTML;
    } else {
      throw new Error("Не удалось загрузить целевую страницу.");
    }
  } catch (error) {
    console.error(error);
  } finally {
    hideLoadingPage();
  }
}

// Функция для скрытия страницы загрузки
function hideLoadingPage() {
  const loadingPage = document.getElementById("loadingPage");
  if (loadingPage) {
    loadingPage.style.display = "none";
  }
}

// Обработка кликов на всех ссылках
document.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const targetPageURL = event.target.getAttribute("href");
    if (targetPageURL) {
      loadTargetPage(targetPageURL);
    }
  }
});
