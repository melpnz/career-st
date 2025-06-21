# Typography Guide

## Обзор

Типографика дизайн-системы использует шрифт **PT Sans** и предоставляет единообразные стили для всего приложения.

## Подключение

### 1. Шрифт PT Sans

Добавьте в `<head>` вашего HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
```

### 2. CSS файл

Подключите файл с типографикой:

```html
<link rel="stylesheet" href="/src/styles/typography.css">
```

Или импортируйте в ваш CSS/SCSS:

```css
@import '/src/styles/typography.css';
```

## Варианты типографики

### Размеры шрифтов

| Класс | Размер | Line-height | Назначение |
|-------|--------|-------------|------------|
| `.display-xl` | 28px | 32px | Главные заголовки |
| `.display-l` | 24px | 27px | Крупные заголовки |
| `.display-m` | 21px | 22px | Средние заголовки |
| `.display-s` | 18px | 22px | Мелкие заголовки |
| `.title` | 17px | 22px | Подзаголовки |
| `.body-l` | 16px | 20px | Основной текст |
| `.body-m` | 14px | 16px | Вспомогательный текст |
| `.body-s` | 12px | 16px | Мелкий текст |

### Веса шрифтов

| Класс | Вес | Описание |
|-------|-----|----------|
| `.regular` | 400 | Обычный текст |
| `.bold` | 700 | Жирный текст |

### Цвета

| Класс | Цвет | HEX | Описание |
|-------|------|-----|----------|
| `.text-black` | #464646 | Основной цвет текста |
| `.text-gray` | #999999 | Вторичный цвет текста |
| `.text-link` | #1463d9 | Цвет ссылок |

## Примеры использования

### HTML с CSS классами

```html
<!-- Заголовки -->
<h1 class="display-xl">Главный заголовок страницы</h1>
<h2 class="display-l">Крупный заголовок</h2>
<h3 class="display-m">Средний заголовок</h3>
<h4 class="display-s">Мелкий заголовок</h4>
<h5 class="title">Подзаголовок</h5>

<!-- Основной текст -->
<p class="body-l">Основной текст для большинства случаев использования.</p>
<p class="body-m">Вспомогательный текст, подписи, метки.</p>
<p class="body-s">Мелкий текст для специальных случаев.</p>

<!-- Комбинирование классов -->
<p class="body-l bold">Жирный основной текст</p>
<p class="body-m text-gray">Серый вспомогательный текст</p>
<a href="#" class="body-m text-link">Ссылка</a>
```

### Vue Component

```vue
<template>
  <div>
    <Typography variant="display-xl" tag="h1">
      Главный заголовок
    </Typography>
    
    <Typography variant="body-l" weight="bold">
      Жирный основной текст
    </Typography>
    
    <Typography variant="body-m" color="link">
      Ссылка
    </Typography>
  </div>
</template>

<script>
import Typography from '@/components/Typography.vue'

export default {
  components: {
    Typography
  }
}
</script>
```

### CSS Variables

```css
.custom-heading {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-display-xl);
  line-height: var(--line-height-display-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-black);
}

.custom-text {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body-l);
  line-height: var(--line-height-body-l);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-gray);
}
```

## CSS переменные

### Размеры шрифтов
- `--font-size-display-xl`: 28px
- `--font-size-display-l`: 24px
- `--font-size-display-m`: 21px
- `--font-size-display-s`: 18px
- `--font-size-title`: 17px
- `--font-size-body-l`: 16px
- `--font-size-body-m`: 14px
- `--font-size-body-s`: 12px

### Line-height
- `--line-height-display-xl`: 32px
- `--line-height-display-l`: 27px
- `--line-height-display-m`: 22px
- `--line-height-display-s`: 22px
- `--line-height-title`: 22px
- `--line-height-body-l`: 20px
- `--line-height-body-m`: 16px
- `--line-height-body-s`: 16px

### Веса
- `--font-weight-regular`: 400
- `--font-weight-bold`: 700

### Цвета
- `--color-text-black`: #464646
- `--color-text-gray`: #999999
- `--color-text-link`: #1463d9

## Рекомендации

1. **Используйте семантические теги**: `<h1>`, `<h2>`, `<p>` и т.д.
2. **Соблюдайте иерархию**: не пропускайте уровни заголовков
3. **Комбинируйте классы**: используйте модификаторы для веса и цвета
4. **Адаптивность**: учитывайте размеры экрана при выборе размера шрифта

## Доступность

- Минимальный размер шрифта для основного текста: 16px
- Контрастность должна соответствовать WCAG 2.1 AA
- Используйте семантические теги для правильной работы скринридеров 