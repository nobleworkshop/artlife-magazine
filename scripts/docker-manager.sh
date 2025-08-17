#!/bin/bash

# Универсальный менеджер Docker для ArtLife Magazine

set -e

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Функция для вывода сообщений
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Проверка Docker
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker не установлен"
        exit 1
    fi

    if ! docker info &> /dev/null; then
        print_error "Docker daemon не запущен"
        exit 1
    fi
}

# Функция помощи
show_help() {
    echo "🐳 Docker Manager для ArtLife Magazine"
    echo ""
    echo "Использование: $0 [команда]"
    echo ""
    echo "Команды:"
    echo "  dev     - Запуск в режиме разработки (http://localhost:5173)"
    echo "  prod    - Запуск продакшн версии (http://localhost:8080)"
    echo "  build   - Сборка всех образов"
    echo "  stop    - Остановка всех контейнеров"
    echo "  logs    - Просмотр логов"
    echo "  clean   - Очистка Docker (контейнеры, образы, кэш)"
    echo "  status  - Статус контейнеров"
    echo "  help    - Показать эту справку"
    echo ""
    echo "Примеры:"
    echo "  $0 dev"
    echo "  $0 prod"
    echo "  $0 logs"
}

# Функция запуска разработки
start_dev() {
    print_status "Запуск в режиме разработки..."
    docker-compose --profile dev down 2>/dev/null || true
    docker-compose --profile dev up --build -d
    print_success "Приложение запущено на http://localhost:5173"
    print_status "Для просмотра логов: $0 logs"
}

# Функция запуска продакшна
start_prod() {
    print_status "Запуск продакшн версии..."
    docker-compose --profile prod down 2>/dev/null || true
    docker-compose --profile prod up --build -d
    print_success "Приложение запущено на http://localhost:8080"
    print_status "Для просмотра логов: $0 logs"
}

# Функция сборки
build_all() {
    print_status "Сборка всех образов..."
    docker-compose --profile dev build --no-cache
    docker-compose --profile prod build --no-cache
    print_success "Все образы собраны"
}

# Функция остановки
stop_all() {
    print_status "Остановка всех контейнеров..."
    docker-compose --profile dev down 2>/dev/null || true
    docker-compose --profile prod down 2>/dev/null || true
    print_success "Все контейнеры остановлены"
}

# Функция просмотра логов
show_logs() {
    print_status "Логи контейнеров:"
    echo ""
    echo "=== Разработка ==="
    docker-compose --profile dev logs --tail=10 2>/dev/null || echo "Контейнер разработки не запущен"
    echo ""
    echo "=== Продакшн ==="
    docker-compose --profile prod logs --tail=10 2>/dev/null || echo "Контейнер продакшна не запущен"
}

# Функция очистки
clean_docker() {
    print_warning "Очистка Docker (контейнеры, образы, кэш)..."
    read -p "Вы уверены? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker-compose --profile dev down 2>/dev/null || true
        docker-compose --profile prod down 2>/dev/null || true
        docker system prune -af
        print_success "Docker очищен"
    else
        print_status "Очистка отменена"
    fi
}

# Функция статуса
show_status() {
    print_status "Статус контейнеров:"
    echo ""
    echo "=== Разработка ==="
    docker-compose --profile dev ps 2>/dev/null || echo "Нет запущенных контейнеров разработки"
    echo ""
    echo "=== Продакшн ==="
    docker-compose --profile prod ps 2>/dev/null || echo "Нет запущенных контейнеров продакшна"
}

# Основная логика
main() {
    check_docker

    case "${1:-help}" in
        dev)
            start_dev
            ;;
        prod)
            start_prod
            ;;
        build)
            build_all
            ;;
        stop)
            stop_all
            ;;
        logs)
            show_logs
            ;;
        clean)
            clean_docker
            ;;
        status)
            show_status
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Неизвестная команда: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Запуск основной функции
main "$@"
