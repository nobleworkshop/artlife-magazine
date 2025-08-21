#!/bin/bash

# Скрипт для запуска продакшн версии в Docker

echo "🚀 Запуск ArtLife Magazine в продакшн режиме..."

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
docker-compose --profile prod down

# Собираем и запускаем продакшн контейнер
echo "🔨 Собираем продакшн образ..."
docker-compose --profile prod up --build -d

echo "✅ Приложение запущено на http://localhost"
echo "📝 Для остановки используйте: docker-compose --profile prod down"
echo "📊 Для просмотра логов: docker-compose --profile prod logs -f"
