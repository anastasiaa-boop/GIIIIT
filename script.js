document.getElementById('navigateBtn').addEventListener('click', function() { 
    const destination = document.getElementById('destination').value; 
    const routeDiv = document.getElementById('route'); 
 
    if (destination) { 
        routeDiv.textContent = Маршрут до ${destination} был рассчитан. Пожалуйста, следуйте указаниям на карте.; 
    } else { 
        routeDiv.textContent = 'Пожалуйста, введите пункт назначения.'; 
    } 
});

// Добавляем функциональность сброса маршрута
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('destination').value = ''; // Очищаем поле ввода
    document.getElementById('route').textContent = ''; // Очищаем сообщение о маршруте
});