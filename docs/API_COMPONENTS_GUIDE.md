# 📁 Компоненты для работы с JSON сервером

## 🎯 Обзор

Созданы компоненты, которые получают данные и изображения из JSON сервера и правильно их обрабатывают.

## 📋 Созданные файлы

### 🔧 Утилиты

1. **`src/utils/imageUtils.js`** - утилиты для работы с изображениями
2. **`src/hooks/useApiWithImages.js`** - хуки для получения данных с обработкой изображений

### 🧩 Компоненты

3. **`src/components/ArticlesSection/ArticlesSection.jsx`** - секция статей с данными из API
4. **`src/components/PodcastWithApi/PodcastWithApi.jsx`** - секция подкастов с данными из API
5. **`src/components/AuthorsWithApi/AuthorsWithApi.jsx`** - секция авторов с данными из API
6. **`src/components/ArticlePage/ArticlePage.jsx`** - страница отдельной статьи
7. **`src/components/PodcastPage/PodcastPage.jsx`** - страница отдельного подкаста
8. **`src/components/AuthorProfileWithApi/AuthorProfileWithApi.jsx`** - профиль автора

### 📄 Страницы

9. **`src/pages/mainWithApi.jsx`** - главная страница с данными из API

### 🎨 Стили

10. **`src/components/ArticlePage/articlePage.module.css`**
11. **`src/components/PodcastPage/podcastPage.module.css`**
12. **`src/components/AuthorProfileWithApi/authorProfileWithApi.module.css`**

## 🚀 Как использовать

### 1. Базовое использование хуков

```javascript
import { useAuthors, useArticles, usePodcasts } from '../../hooks/useApiWithImages';

const MyComponent = () => {
  const { data: authors, loading, error } = useAuthors();
  const { data: articles, loading: articlesLoading, error: articlesError } = useArticles();
  const { data: podcasts, loading: podcastsLoading, error: podcastsError } = usePodcasts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {authors.map(author => (
        <div key={author.id}>
          <img src={author.img} alt={author.name} />
          <h3>{author.name}</h3>
        </div>
      ))}
    </div>
  );
};
```

### 2. Использование утилит для изображений

```javascript
import { 
  getPodcastCoverImage, 
  getAuthorImage, 
  getArticleImage,
  processDataArray 
} from '../../utils/imageUtils';

// Получение изображения обложки подкаста
const coverPath = getPodcastCoverImage('cover1'); // "/img/podcast-covers/small/01.jpg"

// Получение изображения автора
const authorPath = getAuthorImage(1); // "/img/authors/1.png"

// Получение изображения статьи
const articlePath = getArticleImage(1); // "/img/article-images/1.png"

// Обработка массива данных
const processedAuthors = processDataArray(authors, 'authors');
```

### 3. Использование готовых компонентов

```javascript
import ArticlesSection from '@components/ArticlesSection/ArticlesSection';
import PodcastWithApi from '@components/PodcastWithApi/PodcastWithApi';
import AuthorsWithApi from '@components/AuthorsWithApi/AuthorsWithApi';

const MyPage = () => {
  return (
    <div>
      <ArticlesSection />
      <PodcastWithApi />
      <AuthorsWithApi />
    </div>
  );
};
```

### 4. Использование страниц

```javascript
import ArticlePage from '@components/ArticlePage/ArticlePage';
import PodcastPage from '@components/PodcastPage/PodcastPage';
import AuthorProfileWithApi from '@components/AuthorProfileWithApi/AuthorProfileWithApi';

// В роутере
<Route path="/article/:id" element={<ArticlePage articleId={id} />} />
<Route path="/podcast/:id" element={<PodcastPage podcastId={id} />} />
<Route path="/author/:id" element={<AuthorProfileWithApi authorId={id} />} />
```

## 📊 Структура данных

### Авторы
```json
{
  "id": 1,
  "name": "Jakob Grønberg",
  "job": "Artist",
  "city": "Berlin",
  "img": "/img/authors/1.png"
}
```

### Статьи
```json
{
  "id": 1,
  "img": "/img/article-images/1.png",
  "title": "Hope dies last",
  "desc": "Description...",
  "text": "<p>Content...</p>",
  "authorName": "Jakob Gronberg",
  "authorPhoto": "/img/authors/1.png",
  "date": "16. March 2022",
  "timeToRead": "2 min",
  "badgeName": "art",
  "badgeLink": "/category/art"
}
```

### Подкасты
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

## 🔄 Обработка изображений

Все компоненты автоматически обрабатывают пути к изображениям:

- **Авторы**: `img` поле содержит путь к изображению
- **Статьи**: `img` и `authorPhoto` поля содержат пути к изображениям
- **Подкасты**: `cover` поле преобразуется в `coverImage` с правильным путем

## 🎨 Стилизация

Все компоненты используют CSS Modules и следуют дизайн-системе проекта:

- CSS переменные для цветов и размеров
- Адаптивная верстка
- Консистентные отступы и типографика

## 🔧 Настройка

Убедитесь, что файл `.env.local` содержит:

```bash
VITE_API_URL=http://localhost:3001
```

## 📝 Примеры интеграции

### Замена существующих компонентов

```javascript
// Было
import Authors from '@components/Authors/Authors';

// Стало
import AuthorsWithApi from '@components/AuthorsWithApi/AuthorsWithApi';
```

### Добавление в роутер

```javascript
import MainWithApi from '@pages/mainWithApi';

// Добавить новый роут
<Route path="/api-demo" element={<MainWithApi />} />
```

## ✅ Преимущества

1. **Автоматическая обработка изображений** - все пути к изображениям обрабатываются автоматически
2. **Обработка состояний** - loading, error, success состояния
3. **Типизированные данные** - четкая структура данных из API
4. **Переиспользуемость** - компоненты можно использовать в разных местах
5. **Производительность** - оптимизированные запросы к API
6. **Масштабируемость** - легко добавлять новые типы данных

## 🚨 Важные моменты

1. **Проверка существования изображений** - утилиты проверяют существование файлов
2. **Fallback изображения** - если изображение не найдено, используется резервное
3. **Обработка ошибок** - все компоненты обрабатывают ошибки API
4. **Кэширование** - данные кэшируются в хуках для производительности
