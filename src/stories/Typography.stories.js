import Typography from '../components/Typography.vue';

export default {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['display-xl', 'display-l', 'display-m', 'display-s', 'title', 'body-l', 'body-m', 'body-s'],
      description: 'Размер и стиль шрифта',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body-l' },
        category: 'Appearance'
      }
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'bold'],
      description: 'Вес шрифта',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regular' },
        category: 'Appearance'
      }
    },
    color: {
      control: { type: 'select' },
      options: ['black', 'gray', 'link'],
      description: 'Цвет текста',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'black' },
        category: 'Appearance'
      }
    },
    text: {
      control: 'text',
      description: 'Текст для отображения (альтернатива slot)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content'
      }
    },
    customStyle: {
      control: 'object',
      description: 'Дополнительные CSS стили',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
        category: 'Styling'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
## 🚀 Быстрый старт

### 1. Подключите шрифт
\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
\`\`\`

### 2. Используйте компонент
\`\`\`vue
<Typography variant="display-xl">
  Главный заголовок (автоматически h1)
</Typography>
\`\`\`

### 3. Или CSS классы
\`\`\`html
<h1 class="display-xl">Главный заголовок</h1>
\`\`\`

---

## 👀 Превью всех шрифтов

<div style="font-family: 'PT Sans', sans-serif; margin: 24px 0 12px 0; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #fafafa;"><h2 style="margin-bottom: 24px; color: #464646; font-size: 20px;">Превью заголовков</h2><div style="margin-bottom: 24px;"><span style="font-size: 28px; font-weight: 700; color: #464646;">Display XL — Главный заголовок страницы</span></div><div style="margin-bottom: 24px;"><span style="font-size: 24px; font-weight: 700; color: #464646;">Display L — Основные разделы</span></div><div style="margin-bottom: 24px;"><span style="font-size: 21px; font-weight: 700; color: #464646;">Display M — Подразделы</span></div><div style="margin-bottom: 24px;"><span style="font-size: 18px; font-weight: 700; color: #464646;">Display S — Мелкие заголовки</span></div><div style="margin-bottom: 24px;"><span style="font-size: 17px; font-weight: 700; color: #464646;">Title — Подзаголовки</span></div></div><div style="font-family: 'PT Sans', sans-serif; margin: 12px 0 12px 0; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #fafafa;"><h2 style="margin-bottom: 24px; color: #464646; font-size: 20px;">Превью body-текстов</h2><div style="margin-bottom: 24px;"><span style="font-size: 16px; font-weight: 400; color: #464646;">Body L — Основной текст (Regular)</span><br><span style="font-size: 16px; font-weight: 700; color: #464646;">Body L — Акцентный основной текст (Bold)</span></div><div style="margin-bottom: 24px;"><span style="font-size: 14px; font-weight: 400; color: #464646;">Body M — Вспомогательный текст (Regular)</span><br><span style="font-size: 14px; font-weight: 700; color: #464646;">Body M — Акцентный вспомогательный текст (Bold)</span></div><div style="margin-bottom: 24px;"><span style="font-size: 12px; font-weight: 400; color: #464646;">Body S — Мелкий текст (Regular)</span><br><span style="font-size: 12px; font-weight: 700; color: #464646;">Body S — Акцентный мелкий текст (Bold)</span></div></div><div style="font-family: 'PT Sans', sans-serif; margin: 12px 0 24px 0; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #fafafa;"><h2 style="margin-bottom: 24px; color: #464646; font-size: 20px;">Цвета</h2><div style="margin-bottom: 12px;"><span style="font-size: 16px; color: #464646;">Black (#464646) — Основной цвет текста</span></div><div style="margin-bottom: 12px;"><span style="font-size: 16px; color: #999999;">Gray (#999999) — Вторичный цвет текста</span></div><div><span style="font-size: 16px; color: #1463d9;">Link (#1463d9) — Цвет ссылок</span></div></div>
---

## 📋 Размеры шрифтов и HTML теги

| Размер | Класс | Размер | HTML тег | Доступные веса | Назначение |
|--------|-------|--------|----------|----------------|------------|
| **Display XL** | \`display-xl\` | 28px | \`h1\` | Bold (700) | Главные заголовки страницы |
| **Display L** | \`display-l\` | 24px | \`h2\` | Bold (700) | Основные разделы |
| **Display M** | \`display-m\` | 21px | \`h3\` | Bold (700) | Подразделы |
| **Display S** | \`display-s\` | 18px | \`h4\` | Bold (700) | Мелкие заголовки |
| **Title** | \`title\` | 17px | \`h5\` | Bold (700) | Подзаголовки |
| **Body L** | \`body-l\` | 16px | \`p\` | Regular (400), Bold (700) | Основной текст |
| **Body M** | \`body-m\` | 14px | \`p\` | Regular (400), Bold (700) | Вспомогательный текст |
| **Body S** | \`body-s\` | 12px | \`span\` | Regular (400), Bold (700) | Мелкий текст (inline) |

> 💡 **Жестко привязанные теги**: Каждый размер шрифта автоматически использует соответствующий HTML тег для правильной семантики.
> 
> 💡 **Ограниченные веса**: Заголовки используют только bold (700), body тексты поддерживают regular (400) и bold (700).

---

## 🎨 Модификаторы

### Веса
- \`regular\` (400) - Обычный текст (только для body размеров)
- \`bold\` (700) - Жирный текст (для всех размеров)

> ⚠️ **Ограничения**: Заголовки (Display XL, L, M, S, Title) поддерживают только bold (700) для консистентности дизайна.

### Цвета
- \`black\` (#464646) - Основной цвет текста
- \`gray\` (#999999) - Вторичный цвет текста  
- \`link\` (#1463d9) - Цвет ссылок

---

## 💡 Примеры использования

### Автоматические теги
\`\`\`vue
<template>
  <Typography variant="display-xl">
    Главный заголовок (h1)
  </Typography>
  <Typography variant="display-l">
    Раздел (h2)
  </Typography>
  <Typography variant="body-l">
    Основной текст (p)
  </Typography>
</template>
\`\`\`

### CSS Classes
\`\`\`html
<h1 class="display-xl">Заголовок</h1>
<p class="body-l bold">Важный текст</p>
<a class="body-m text-link">Ссылка</a>
\`\`\`

### CSS Variables
\`\`\`css
.heading {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-display-xl);
  font-weight: var(--font-weight-bold);
}
\`\`\`

---

## 🛠️ Интерактивный конструктор

Используйте story **Constructor** для создания кастомной типографики с настройкой всех параметров в реальном времени.

---

## 🎯 Лучшие практики

1. **Используйте правильную иерархию** - Display XL для главных заголовков, Display L для разделов
2. **Соблюдайте ограничения весов** - заголовки только bold, body тексты regular или bold
3. **Выбирайте подходящие цвета** - black для основного текста, gray для вспомогательного
4. **Используйте Constructor** - для быстрого создания и тестирования типографики
        `
      }
    }
  }
};

export const Constructor = {
  args: {
    variant: 'body-l',
    weight: 'regular',
    color: 'black',
    text: 'Ваш текст здесь - измените параметры справа для настройки типографики'
  },
  parameters: {
    docs: {
      description: {
        story: `
## 🛠️ Typography Constructor

Интерактивный конструктор для создания типографики. Используйте панель Controls справа для настройки всех параметров.

### Как использовать:
1. Выберите размер шрифта в поле "Variant"
2. Настройте вес в поле "Weight" (ограничения применяются автоматически)
3. Выберите цвет в поле "Color"
4. Введите свой текст в поле "Text"
5. Скопируйте готовый код из блока "Show code"

### Жестко привязанные HTML теги:
- \`display-xl\` → \`h1\` (главный заголовок)
- \`display-l\` → \`h2\` (основные разделы)
- \`display-m\` → \`h3\` (подразделы)
- \`display-s\` → \`h4\` (мелкие заголовки)
- \`title\` → \`h5\` (подзаголовки)
- \`body-l\` → \`p\` (основной текст)
- \`body-m\` → \`p\` (вспомогательный текст)
- \`body-s\` → \`span\` (мелкий inline текст)

### Ограничения весов:
- **Заголовки** (Display XL, L, M, S, Title): только \`bold\` (700)
- **Body тексты** (Body L, M, S): \`regular\` (400) и \`bold\` (700)

### Примеры кода:

**Vue Component:**
\`\`\`vue
<Typography variant="display-xl">
  Главный заголовок (автоматически h1)
</Typography>
\`\`\`

**HTML + CSS Classes:**
\`\`\`html
<h1 class="display-xl">Главный заголовок</h1>
\`\`\`

**CSS Variables:**
\`\`\`css
.custom-heading {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-display-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-black);
}
\`\`\`

### 💡 Советы:
- Заголовки автоматически используют bold вес
        `
      }
    }
  }
}; 