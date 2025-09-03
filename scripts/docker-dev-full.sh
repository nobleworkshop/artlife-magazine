#!/bin/bash

echo "🚀 Запуск всех сервисов в Docker..."

# Останавливаем существующие контейнеры
echo "🛑 Остановка существующих контейнеров..."
docker-compose down

# Запускаем все сервисы
echo "🔧 Запуск json-server и React приложения..."
docker-compose up --build

echo "✅ Все сервисы запущены!"
echo "📱 React приложение: http://localhost:5173"
echo "🔌 JSON Server API: http://localhost:3001"
echo "📊 API endpoints:"
echo "   - Статьи: http://localhost:3001/articles"
echo "   - Статья по ID: http://localhost:3001/articles/1"
