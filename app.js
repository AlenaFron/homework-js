// 4.13. Домашнее задание - Основы


// 1. Входные данные (координаты)
const positionLat = 10;    // Текущая широта
const positionLong = 15;   // Текущая долгота

const addressLat = 13;     // Широта назначения
const addressLong = 19;    // Долгота назначения

// 2. Находим катеты (разницу между точками по осям)
const deltaLat = addressLat - positionLat;
const deltaLong = addressLong - positionLong;

// 3. Рассчитываем дистанцию (гипотенузу)
// Формула: корень из (a² + b²)
const distance = Math.sqrt(deltaLat ** 2 + deltaLong ** 2);

// 4. Вывод результата
console.log(`Текущая позиция: ${positionLat}, ${positionLong}`);
console.log(`Назначение: ${addressLat}, ${addressLong}`);
console.log(`Дистанция до объекта: ${distance.toFixed(2)}`);

// Проверка для Pull Request
























