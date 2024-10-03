document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const emoji = category.querySelector('.emoji');
        const leftEmoji = emoji.getAttribute('data-left-emoji');
        const rightEmoji = emoji.getAttribute('data-right-emoji');

        // Обработчик наведения курсора на категорию
        category.addEventListener('mouseenter', () => {
            category.classList.add('active');
        });

        // Обработчик ухода курсора с категории
        category.addEventListener('mouseleave', () => {
            category.classList.remove('active');
        });

        // Обработчик клика на категорию для визуального эффекта
        category.addEventListener('click', () => {
            // Удаляем активный класс у других категорий
            categories.forEach(cat => {
                if (cat !== category) {
                    cat.classList.remove('active');
                }
            });
            // Переключаем активный класс у текущей категории
            category.classList.toggle('active');
        });
    });

    // Закрытие подкатегорий при клике вне категорий
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.category')) {
            categories.forEach(category => {
                category.classList.remove('active');
            });
        }
    });
});
