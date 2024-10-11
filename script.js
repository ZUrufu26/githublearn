document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        // Обработчик клика на категорию для отображения подкатегорий
        category.addEventListener('click', (e) => {
            // Предотвращаем распространение события, чтобы не вызвать закрытие при клике на саму категорию
            e.stopPropagation();

            // Если кликнули уже активную категорию, просто переключаем её состояние
            const isActive = category.classList.contains('active');

            // Закрываем все подкатегории
            categories.forEach(cat => {
                cat.classList.remove('active');
            });

            // Если категория была неактивной, делаем её активной
            if (!isActive) {
                category.classList.add('active');
            }
        });
    });

    // Закрытие подкатегорий при клике вне категорий
    document.addEventListener('click', () => {
        categories.forEach(category => {
            category.classList.remove('active');
        });
    });
});
