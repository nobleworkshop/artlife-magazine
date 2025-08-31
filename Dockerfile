# Используем официальный Node.js образ как базовый
FROM node:20-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Этап разработки
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 5173 3001
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Этап сборки
FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

# Этап продакшена
FROM nginx:alpine AS production
# Копируем собранные файлы
COPY --from=build /app/dist /usr/share/nginx/html
# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
