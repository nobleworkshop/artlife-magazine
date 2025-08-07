# 🎨 ArtLife Magazine

Современный веб-журнал об искусстве, созданный с использованием React и Vite.

## 🚀 Быстрый старт

### С Docker (рекомендуется)

#### Универсальный менеджер
```bash
# Запуск в режиме разработки
./scripts/docker-manager.sh dev

# Запуск продакшн версии
./scripts/docker-manager.sh prod

# Просмотр статуса
./scripts/docker-manager.sh status

# Просмотр логов
./scripts/docker-manager.sh logs
```

#### Альтернативные скрипты
```bash
# Разработка
./scripts/docker-dev.sh

# Продакшн
./scripts/docker-prod.sh
```

### Без Docker

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшна
npm run build

# Предварительный просмотр сборки
npm run preview
```

## 📁 Структура проекта

```
src/
├── components/          # Переиспользуемые компоненты
├── pages/              # Страницы приложения
├── styles/             # Глобальные стили
├── img/                # Статические изображения
└── uikit-components/   # Демо-компоненты для UI Kit
```

## 🎯 Основные возможности

- **Современный дизайн** - минималистичный черно-белый стиль
- **Адаптивная верстка** - работает на всех устройствах
- **Компонентная архитектура** - переиспользуемые компоненты
- **UI Kit** - демонстрация всех компонентов
- **Docker поддержка** - легкое развертывание

## 🛠️ Технологии

- **React 19.1.0** - современный React с новыми возможностями
- **Vite 7.0.4** - быстрый сборщик
- **React Router DOM 7.7.1** - маршрутизация
- **CSS Modules** - изолированные стили
- **Docker** - контейнеризация

## 📖 Документация

Подробная документация по Docker доступна в [README-Docker.md](./README-Docker.md).

## 🔧 Команды

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Линтинг
npm run lint

# Предварительный просмотр
npm run preview
```

## 🐳 Docker команды

```bash
# Разработка
docker-compose --profile dev up

# Продакшн
docker-compose --profile prod up -d

# Остановка
docker-compose down
```


