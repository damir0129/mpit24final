const map = L.map('map').setView([55.7558, 37.6173], 13); // Центральный координаты

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Пример данных для кастомных меток
const locations = [
    { name: 'Музей монет', coords: [55.76, 37.62], description: 'Описание музея...' },
    { name: 'Центральный парк', coords: [55.75, 37.61], description: 'Описание парка...' },
];

// Добавление кастомных меток
locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map);
    marker.on('click', () => {
        document.getElementById('popup-content').innerHTML = `
            <h2>${location.name}</h2>
            <p>${location.description}</p>
        `;
        document.getElementById('popup').classList.remove('hidden');
    });
});

// Закрытие всплывающего окна
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});
