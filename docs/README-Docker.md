# 🐳 Docker для ArtLife Magazine

Этот документ описывает, как запускать проект ArtLife Magazine в Docker контейнерах.

## 📋 Требования

-   Docker Engine 20.10+
-   Docker Compose 2.0+

## 🚀 Быстрый старт

### Разработка

```bash
# Запуск в режиме разработки
./scripts/docker-dev.sh

# Или вручную
docker-compose --profile dev up --build
```

Приложение будет доступно по адресу: <http://localhost:5173>

### Продакшн

```bash
# Запуск продакшн версии
./scripts/docker-prod.sh

# Или вручную
docker-compose --profile prod up --build -d
```

Приложение будет доступно по адресу: <http://localhost:8080>

## 📁 Структура Docker файлов

```text
├── Dockerfile                 # Многоэтапная сборка
├── docker-compose.yml         # Основная конфигурация
├── docker-compose.override.yml # Локальные настройки
├── nginx.conf                 # Конфигурация nginx
├── .dockerignore             # Исключения для Docker
└── scripts/
    ├── docker-dev.sh         # Скрипт для разработки
    └── docker-prod.sh        # Скрипт для продакшна
```

## 🔧 Команды Docker

### Команды разработки

```bash
# Запуск
docker-compose --profile dev up

# Запуск в фоне
docker-compose --profile dev up -d

# Остановка
docker-compose --profile dev down

# Пересборка
docker-compose --profile dev up --build

# Просмотр логов
docker-compose --profile dev logs -f
```

### Продакшен

```bash
# Запуск
docker-compose --profile prod up -d

# Остановка
docker-compose --profile prod down

# Пересборка
docker-compose --profile prod up --build -d

# Просмотр логов
docker-compose --profile prod logs -f
```

### Сборка

```bash
# Только сборка без запуска
docker-compose --profile build up --build
```

## 🏗️ Архитектура

### Многоэтапная сборка

1. **base** - базовый образ с Node.js
2. **development** - для разработки с hot reload
3. **build** - для сборки приложения
4. **production** - продакшн с nginx

### Профили Docker Compose

-   `dev` - режим разработки с Vite dev server
-   `prod` - продакшн с nginx
-   `build` - только сборка

## 🔍 Отладка

### Просмотр логов

```bash
# Логи разработки
docker-compose --profile dev logs -f

# Логи продакшна
docker-compose --profile prod logs -f
```

### Вход в контейнер

```bash
# Разработка
docker-compose --profile dev exec app-dev sh

# Продакшн
docker-compose --profile prod exec app-prod sh
```

### Проверка состояния

```bash
# Список контейнеров
docker-compose ps

# Использование ресурсов
docker stats
```

## 🛠️ Настройка

### Переменные окружения

Создайте файл `.env` для локальных настроек:

```env
NODE_ENV=development
VITE_API_URL=http://localhost:3000
```

### Порт

По умолчанию:

-   Разработка: 5173
-   Продакшн: 8080

Для изменения портов отредактируйте `docker-compose.yml`.

## 🚨 Устранение проблем

### Проблема: Контейнер не запускается

```bash
# Проверьте логи
docker-compose logs

# Пересоберите образ
docker-compose up --build --force-recreate
```

### Проблема: Hot reload не работает

```bash
# Убедитесь, что volumes подключены
docker-compose --profile dev up --build
```

### Проблема: Порт занят

```bash
# Измените порт в docker-compose.yml
ports:
  - "3000:5173"  # Вместо 5173:5173
```

## 📦 Оптимизация

### Размер образа

-   Используется Alpine Linux для меньшего размера
-   Многоэтапная сборка исключает dev-зависимости
-   `.dockerignore` исключает ненужные файлы

### Производительность

-   Volume для node_modules в разработке
-   Кэширование слоев Docker
-   Gzip сжатие в nginx

## 🔒 Безопасность

-   Непривилегированный пользователь в контейнере
-   Security headers в nginx
-   Минимальный базовый образ
