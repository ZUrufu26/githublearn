document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const emoji = category.querySelector('.emoji');
        const leftEmoji = emoji.getAttribute('data-left-emoji');
        const rightEmoji = emoji.getAttribute('data-right-emoji');

        // Удаляем обработчики наведения курсора
        // category.addEventListener('mouseenter', () => {
        //     category.classList.add('active');
        // });

        // category.addEventListener('mouseleave', () => {
        //     category.classList.remove('active');
        // });

        // Добавляем обработчик клика на категорию
        category.addEventListener('click', (e) => {
            e.stopPropagation(); // Предотвращаем всплытие события клика

            // Закрываем другие активные категории
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
    document.addEventListener('click', () => {
        categories.forEach(category => {
            category.classList.remove('active');
        });
    });
});
