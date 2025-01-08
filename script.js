// Функція для завантаження контенту
function loadPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none"; // Сховати всі сторінки
    });

    const activePage = document.getElementById(pageId);
    activePage.style.display = "block"; // Показати вибраний контент
}

// Функція для перемикання варіантів купівлі
function toggleOptions(button) {
    const purchase = button.nextElementSibling; // Знайти наступний елемент після кнопки
    const options = purchase.querySelector(".options");

    // Показати або приховати вибрані опції
    options.style.display = options.style.display === "block" ? "none" : "block";
}

// Завантажити домашню сторінку за замовчуванням
document.addEventListener("DOMContentLoaded", function() {
    loadPage('home');
});