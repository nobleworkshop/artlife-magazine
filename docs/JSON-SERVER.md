# JSON Server Guide для ArtLife Magazine

## Что такое JSON Server?

JSON Server - это библиотека, позволяющая "получить полный фейковый REST API без предварительной настройки менее чем за 30 секунд". Также имеется возможность создания полноценного сервера. Данная библиотека реализована с помощью lowdb и express. Наиболее известным примером ее использования является JSON Placeholder.

## Установка и настройка

```bash
npm install json-server --save-dev
```

### 2. Конфигурация

Файл `json-server.json` содержит настройки сервера:

```json
{
  "port": 3001,
  "host": "localhost",
  "watch": true,
  "routes": {
    "/api/*": "/$1"
  }
}
```

**Параметры:**

- `port`: 3001 - порт для запуска сервера
- `host`: localhost - хост для доступа
- `watch`: true - автоматическое обновление при изменении db.json
- `routes`: настройка маршрутов (опционально)

## Запуск сервера

### Способ 1: Отдельный терминал

```bash
npm run server
```

### Способ 2: Вместе с приложением

```bash
npm run dev:full
```

Эта команда запускает и JSON Server, и Vite dev сервер одновременно.

## Структура данных

### Файл db.json

Основной файл с данными находится в корне проекта:

```json
{
  "articles": [...],
  "podcasts": [...],
  "authors": [...],
  "categories": [...]
}
```

### Примеры данных

#### Подкасты (Podcasts)

```json
{
  "id": 1,
  "cover": "cover1",
  "author": "Fyrre",
  "number": "01",
  "title": "10 artists your should definitely know",
  "date": "2022-03-16",
  "duration": "10"
}
```

#### Статьи (Articles)

```json
{
  "id": 1,
  "title": "Hope dies last",
  "content": "Content 1Lorem ipsum...",
  "author": "Jakob Gronberg",
  "date": "2022-03-16",
  "timeToRead": 1,
  "badgeName": "ART",
  "badgeLink": "/art"
}
```

## REST API Endpoints

### Базовый URL

```text
http://localhost:3001
```

### Доступные endpoints

| Метод | Endpoint | Описание |
|-------|----------|----------|
| GET | `/podcasts` | Получить все подкасты |
| GET | `/podcasts/1` | Получить подкаст с ID 1 |
| GET | `/articles` | Получить все статьи |
| GET | `/articles/1` | Получить статью с ID 1 |
| POST | `/podcasts` | Создать новый подкаст |
| PUT | `/podcasts/1` | Обновить подкаст с ID 1 |
| PATCH | `/podcasts/1` | Частично обновить подкаст |
| DELETE | `/podcasts/1` | Удалить подкаст с ID 1 |

### Примеры запросов

#### Получить все подкасты

```bash
curl http://localhost:3001/podcasts
```

#### Получить подкаст по ID

```bash
curl http://localhost:3001/podcasts/1
```

#### Создать новый подкаст

```bash
curl -X POST http://localhost:3001/podcasts \
  -H "Content-Type: application/json" \
  -d '{
    "cover": "cover6",
    "author": "Fyrre",
    "number": "06",
    "title": "New Podcast Episode",
    "date": "2024-01-15",
    "duration": "55"
  }'
```

#### Обновить подкаст

```bash
curl -X PUT http://localhost:3001/podcasts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "cover": "cover1",
    "author": "Fyrre",
    "number": "01",
    "title": "Updated Title",
    "date": "2022-03-16",
    "duration": "15"
  }'
```

#### Удалить подкаст

```bash
curl -X DELETE http://localhost:3001/podcasts/1
```

## Фильтрация и поиск

### Фильтрация по полям

```text
GET /podcasts?author=Fyrre
GET /articles?badgeName=ART
```

### Поиск по тексту

```text
GET /podcasts?q=street art
GET /articles?q=Hope
```

### Сортировка

```text
GET /podcasts?_sort=date&_order=desc
GET /articles?_sort=timeToRead&_order=asc
```

### Пагинация

```text
GET /podcasts?_page=1&_limit=5
GET /articles?_page=2&_limit=10
```

### Комбинирование параметров

```text
GET /podcasts?author=Fyrre&_sort=date&_order=desc&_page=1&_limit=3
```

## Использование в React компонентах

### Хук useApi

В проекте уже создан хук `useApi` для работы с API:

```jsx
import { useApi } from '../../hooks/useApi'

function MyComponent() {
  const { data, loading, error } = useApi('podcasts')

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>
  if (!data) return <div>Нет данных</div>

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}
```

### Прямые fetch запросы

```jsx
import { useState, useEffect } from 'react'

function MyComponent() {
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch('http://localhost:3001/podcasts')
        const data = await response.json()
        setPodcasts(data)
      } catch (error) {
        console.error('Ошибка загрузки:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPodcasts()
  }, [])

  if (loading) return <div>Загрузка...</div>

  return (
    <div>
      {podcasts.map(podcast => (
        <div key={podcast.id}>{podcast.title}</div>
      ))}
    </div>
  )
}
```

## Добавление новых данных

### 1. Редактирование db.json

Добавьте новые записи в соответствующие массивы:

```json
{
  "podcasts": [
    // ... существующие записи
    {
      "id": 6,
      "cover": "cover6",
      "author": "New Author",
      "number": "06",
      "title": "New Episode",
      "date": "2024-01-15",
      "duration": "45"
    }
  ]
}
```

### 2. Автоматическое обновление

JSON Server автоматически перезагрузится при изменении `db.json` благодаря параметру `"watch": true"`
