# 👨‍💻 Руководство по разработке ArtLife Magazine

## 🎯 Начало работы

### Требования к разработчику

- **Node.js**: версия 20.0.0+
- **npm**: версия 9.0.0+
- **Git**: последняя версия
- **Docker**: версия 20.10.0+ (опционально)
- **VS Code**: рекомендуемый редактор

### Первоначальная настройка

```bash
# Клонирование репозитория
git clone <repository-url>
cd artlife-magazine

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

## 📋 Стандарты кода

### JavaScript/React стандарты

#### 1. Именование

```javascript
// ✅ Правильно
const ArticleCard = ({ article, onClick }) => { ... }
const handleArticleClick = (articleId) => { ... }
const isArticlePublished = article.status === 'published'

// ❌ Неправильно
const articleCard = ({ article, onClick }) => { ... }
const ArticleClick = (articleId) => { ... }
const articlePublished = article.status === 'published'
```

#### 2. Структура компонента

```javascript
// 1. Импорты
import React, { useState, useEffect } from 'react'
import styles from './ComponentName.module.css'

// 2. Компонент
function ComponentName({ prop1, prop2, children }) {
  // 3. Хуки состояния
  const [state, setState] = useState(initialValue)
  
  // 4. Эффекты
  useEffect(() => {
    // логика эффекта
  }, [dependencies])
  
  // 5. Обработчики событий
  const handleClick = () => {
    // логика обработчика
  }
  
  // 6. Рендер
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

// 7. Экспорт
export default ComponentName
```

#### 3. Использование алиасов

```javascript
// ✅ Правильно - используйте алиасы
import Button from '@components/Button/Button.jsx'
import styles from '@styles/app.css'
import logo from '@img/logo.svg'

// ❌ Неправильно - избегайте относительных путей
import Button from '../../../components/Button/Button.jsx'
import styles from '../../styles/app.css'
```

### CSS стандарты

#### 1. CSS Modules

```css
/* ComponentName.module.css */
.container {
  padding: var(--spacing-unit);
  margin: 0 auto;
  max-width: 100%;
}

.title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
}

/* Модификаторы */
.container--large {
  max-width: 1200px;
}

/* Состояния */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### 2. CSS переменные

```css
/* Используйте глобальные переменные */
:root {
  --spacing-unit: 8px;
  --border-radius: 4px;
  --transition: all 0.3s ease;
}

/* В компонентах */
.button {
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
  transition: var(--transition);
}
```

#### 3. Responsive дизайн

```css
/* Mobile First подход */
.container {
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 32px;
  }
}
```

## 🏗️ Создание новых компонентов

### 1. Создание структуры папки

```bash
mkdir src/components/NewComponent
cd src/components/NewComponent
touch NewComponent.jsx NewComponent.module.css index.js
```

### 2. Шаблон компонента

```javascript
// NewComponent.jsx
import React from 'react'
import styles from './NewComponent.module.css'

function NewComponent({ 
  title, 
  description, 
  onClick,
  children 
}) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.content} onClick={handleClick}>
        {children}
      </div>
    </div>
  )
}

export default NewComponent
```

### 3. Стили компонента

```css
/* NewComponent.module.css */
.container {
  padding: var(--spacing-unit);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--bg-primary);
}

.title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-unit);
  color: var(--text-primary);
}

.description {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin-bottom: calc(var(--spacing-unit) * 2);
}

.content {
  cursor: pointer;
  transition: var(--transition);
}

.content:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

### 4. Экспорт компонента

```javascript
// index.js
export { default } from './NewComponent'
```

### 5. Создание UI Kit 

```javascript
// src/uikit-components/uikit-NewComponent.jsx
import React from 'react'
import NewComponent from '@components/NewComponent/NewComponent'

function UikitNewComponent() {
  return (
    <div className="uikit-section">
      <h2>NewComponent</h2>
      
      <div className="uikit-examples">
        <h3>Базовый пример</h3>
        <NewComponent 
          title="Заголовок компонента"
          description="Описание компонента"
        >
          Содержимое компонента
        </NewComponent>
        
        <h3>С обработчиком событий</h3>
        <NewComponent 
          title="Кликабельный компонент"
          onClick={() => alert('Компонент кликнут!')}
        >
          Кликните на меня
        </NewComponent>
      </div>
    </div>
  )
}

export default UikitNewComponent
```

## 🔄 Рабочий процесс

### 1. Создание feature branch

```bash
# Обновление main ветки
git checkout develop
git pull origin develop

# Создание feature branch
git checkout -b feature/new-component

# Или для исправления бага
git checkout -b fix/button-styling
```

### 2. Разработка

```bash
# Регулярные коммиты
git add .
git commit -m "feat: ADD добавление нового компонента"

# Push в удаленный репозиторий
git push origin feature/new-component
```

### 3. Создание Pull Request

- Перейдите в GitHub
- Создайте Pull Request из feature ветки в main
- Добавьте описание изменений
- Укажите связанные задачи

### 4. Code Review

- Другой разработчик проверяет код
- Комментарии и предложения по улучшению
- Исправление замечаний
- Approval и merge

## 🧪 Тестирование

### Unit тесты

```javascript
// __tests__/NewComponent.test.js
import { render, screen, fireEvent } from '@testing-library/react'
import NewComponent from '../NewComponent'

describe('NewComponent', () => {
  test('renders title and description', () => {
    render(
      <NewComponent 
        title="Test Title" 
        description="Test Description" 
      />
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })
  
  test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    
    render(
      <NewComponent onClick={handleClick}>
        Click me
      </NewComponent>
    )
    
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Integration тесты(в разработке)

```javascript
// __tests__/ArticleList.test.js
import { render, screen } from '@testing-library/react'
import ArticleList from '../ArticleList'

test('renders all articles', () => {
  const articles = [
    { id: 1, title: 'Article 1', excerpt: 'Excerpt 1' },
    { id: 2, title: 'Article 2', excerpt: 'Excerpt 2' }
  ]
  
  render(<ArticleList articles={articles} />)
  
  expect(screen.getByText('Article 1')).toBeInTheDocument()
  expect(screen.getByText('Article 2')).toBeInTheDocument()
})
```

### Запуск тестов

```bash
# Запуск всех тестов
npm test

# Запуск тестов в watch режиме
npm test -- --watch

# Запуск тестов с покрытием
npm test -- --coverage
```

## 🔍 Отладка

### React Developer Tools

1. Установите расширение для браузера
2. Откройте DevTools
3. Перейдите на вкладку Components
4. Исследуйте состояние компонентов

### Console логирование

```javascript
function ArticleCard({ article, onClick }) {
  console.log('ArticleCard props:', { article, onClick })
  
  useEffect(() => {
    console.log('ArticleCard mounted with article:', article.id)
    
    return () => {
      console.log('ArticleCard unmounted:', article.id)
    }
  }, [article.id])
  
  return (
    <div onClick={() => onClick(article.id)}>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </div>
  )
}
```

### Debugger

```javascript
function handleArticleClick(articleId) {
  debugger // Точка останова
  console.log('Article clicked:', articleId)
  // логика обработки клика
}
```

## 📱 Респонсивно-адаптивная разработка

### 1. Desctop подход

```css
/* Начинайте с desctop стилей */
.container {
  padding: 16px;
  margin: 0 auto;
  max-width: 100%;
}

/* Затем добавляйте стили для маленьких экранов */
@media (max-width: 768px) {
  .container {
    padding: 24px;
    max-width: 720px;
  }
}
```

### 2. Тестирование на разных устройствах

```text
# Chrome DevTools
# 1. Откройте DevTools (F12)
# 2. Нажмите Ctrl+Shift+M для мобильного режима
# 3. Выберите устройство из выпадающего списка
```

### 3. Responsive изображения

```javascript
function ResponsiveImage({ src, alt, sizes }) {
  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      className={styles.responsiveImage}
    />
  )
}

// Использование
<ResponsiveImage
  src="@img/article-images/1.png"
  alt="Article image"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

## 🚀 Оптимизация производительности

### 1. React.memo

```javascript
import React, { memo } from 'react'

const ArticleCard = memo(({ article, onClick }) => (
  <div onClick={() => onClick(article.id)}>
    <h3>{article.title}</h3>
    <p>{article.excerpt}</p>
  </div>
))
```

### 2. useCallback

```javascript
import { useCallback } from 'react'

function ArticleList({ articles, onArticleClick }) {
  const handleClick = useCallback((articleId) => {
    onArticleClick(articleId)
  }, [onArticleClick])
  
  return (
    <div>
      {articles.map(article => (
        <ArticleCard
          key={article.id}
          article={article}
          onClick={handleClick}
        />
      ))}
    </div>
  )
}
```

### 3. useMemo

```javascript
import { useMemo } from 'react'

function ArticleList({ articles, sortBy }) {
  const sortedArticles = useMemo(() => {
    return articles.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date)
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title)
      }
      return 0
    })
  }, [articles, sortBy])
  
  return (
    <div>
      {sortedArticles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
```

### 4. Lazy loading

```javascript
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

## 🔒 Безопасность

### 1. Защита от XSS

```javascript
// ✅ Безопасно - React автоматически экранирует
function SafeComponent({ userInput }) {
  return <div>{userInput}</div>
}

// ❌ Опасно - только для доверенного контента
function DangerousComponent({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}
```

### 2. Валидация props

```javascript
import PropTypes from 'prop-types'

function ArticleCard({ article, onClick }) {
  return (
    <div onClick={() => onClick(article.id)}>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </div>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

ArticleCard.defaultProps = {
  onClick: () => {}
}
```

## 📚 Полезные ресурсы

### Документация

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

### Инструменты разработки

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [ESLint](https://eslint.org/)

### Лучшие практики

- [React Best Practices](https://react.dev/learn)
- [Performance Optimization](https://react.dev/learn/render-and-commit)
- [Security Best Practices](https://react.dev/learn/security)

## 🚨 Частые ошибки и их решения

### 1. Забыли использовать алиасы

```javascript
// ❌ Проблема
import Button from '../../../components/Button/Button.jsx'

// ✅ Решение
import Button from '@components/Button/Button.jsx'
```

### 2. Неправильная структура CSS Modules

```css
/* ❌ Проблема - глобальные стили используется в app.css*/
.container { ... }

/* ✅ Решение - локальные стили Component.module.css*/
.container { ... }
/* это два разных свойства и не приведут к ошибке  */
```

### 3. Забыли добавить key в map

```javascript
// ❌ Проблема
{articles.map(article => (
  <ArticleCard article={article} />
))}

// ✅ Решение
{articles.map(article => (
  <ArticleCard key={article.id} article={article} />
))}
```

### 4. Неправильное использование useEffect

```javascript
// ❌ Проблема - бесконечный цикл
useEffect(() => {
  setCount(count + 1)
}, [count])

// ✅ Решение - функциональное обновление
useEffect(() => {
  setCount(prevCount => prevCount + 1)
}, [])
```
