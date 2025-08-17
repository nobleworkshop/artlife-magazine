#!/bin/bash

# Скрипт для запуска разработки в Docker

echo "🚀 Запуск ArtLife Magazine в режиме разработки..."

# Проверяем, установлен ли Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Установите Docker и попробуйте снова."
    exit 1
fi

# Проверяем, запущен ли Docker daemon
if ! docker info &> /dev/null; then
    echo "❌ Docker daemon не запущен. Запустите Docker и попробуйте снова."
    exit 1
fi

# Останавливаем существующие контейнеры
echo "🛑 Останавливаем существующие контейнеры..."
docker-compose --profile dev down

# Собираем и запускаем контейнер разработки
echo "🔨 Собираем образ для разработки..."
docker-compose --profile dev up --build

echo "✅ Приложение запущено на http://localhost:5173"
echo "📝 Для остановки используйте: docker-compose --profile dev down"
