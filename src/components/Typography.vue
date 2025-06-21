<template>
  <component
    :is="computedTag"
    :class="[
      'typography-element',
      `typography-${variant}`,
      `typography-weight-${computedWeight}`,
      `typography-color-${color}`
    ]"
    :style="customStyle"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script>
export default {
  name: 'Typography',
  props: {
    variant: {
      type: String,
      default: 'body-l',
      validator: function (value) {
        return [
          'display-xl',
          'display-l', 
          'display-m',
          'display-s',
          'title',
          'body-l',
          'body-m',
          'body-s'
        ].indexOf(value) !== -1
      }
    },
    weight: {
      type: String,
      default: 'regular',
      validator: function (value) {
        return ['regular', 'bold'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      default: 'black',
      validator: function (value) {
        return ['black', 'gray', 'link'].indexOf(value) !== -1
      }
    },
    text: {
      type: String,
      default: ''
    },
    customStyle: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    // Жестко привязанные теги к размерам шрифтов
    computedTag() {
      const variantToTag = {
        'display-xl': 'h1',    // Главный заголовок страницы
        'display-l': 'h2',     // Основные разделы
        'display-m': 'h3',     // Подразделы
        'display-s': 'h4',     // Мелкие заголовки
        'title': 'h5',         // Подзаголовки
        'body-l': 'p',         // Основной текст
        'body-m': 'p',         // Вспомогательный текст
        'body-s': 'span'       // Мелкий текст (span для inline элементов)
      }
      
      return variantToTag[this.variant] || 'p';
    },
    
    // Ограниченные веса для каждого размера шрифта
    allowedWeights() {
      const variantWeights = {
        'display-xl': ['bold'],           // Только bold (700)
        'display-l': ['bold'],            // Только bold (700)
        'display-m': ['bold'],            // Только bold (700)
        'display-s': ['bold'],            // Только bold (700)
        'title': ['bold'],                // Только bold (700)
        'body-l': ['regular', 'bold'],    // Regular (400) и bold (700)
        'body-m': ['regular', 'bold'],    // Regular (400) и bold (700)
        'body-s': ['regular', 'bold']     // Regular (400) и bold (700)
      }
      
      return variantWeights[this.variant] || ['regular', 'bold'];
    },
    
    // Проверяем, что выбранный вес разрешен для данного размера
    computedWeight() {
      const allowed = this.allowedWeights;
      return allowed.includes(this.weight) ? this.weight : allowed[0];
    }
  }
}
</script>

<style scoped>
.typography-element {
  margin: 0;
  font-family: 'PT Sans', sans-serif;
  color: #464646;
}

/* Размеры шрифтов */
.typography-display-xl {
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.02em;
}

.typography-display-l {
  font-size: 24px;
  line-height: 27px;
  letter-spacing: -0.02em;
}

.typography-display-m {
  font-size: 21px;
  line-height: 22px;
  letter-spacing: -0.01em;
}

.typography-display-s {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.01em;
}

.typography-title {
  font-size: 17px;
  line-height: 22px;
}

.typography-body-l {
  font-size: 16px;
  line-height: 20px;
}

.typography-body-m {
  font-size: 14px;
  line-height: 16px;
}

.typography-body-s {
  font-size: 12px;
  line-height: 16px;
}

/* Веса шрифтов */
.typography-weight-regular {
  font-weight: 400;
}

.typography-weight-bold {
  font-weight: 700;
}

/* Цвета */
.typography-color-black {
  color: #464646;
}

.typography-color-gray {
  color: #999999;
}

.typography-color-link {
  color: #1463d9;
}
</style> 