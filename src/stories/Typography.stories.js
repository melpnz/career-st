import tokens from '../tokens/tokens.json';

const Typography = {
  name: 'Typography',
  template: `
    <div class="typography">
      <h1 class="display-xl">Display XL (28px)</h1>
      <h2 class="display-l">Display L (24px)</h2>
      <h3 class="display-m">Display M (21px)</h3>
      <h4 class="display-s">Display S (18px)</h4>
      <h5 class="title">Title (17px)</h5>
      <p class="body-l">Body L (16px) - Основной текст для большинства случаев использования.</p>
      <p class="body-m">Body M (14px) - Вспомогательный текст, подписи, метки.</p>
      <p class="body-s">Body S (12px) - Самый маленький текст для специальных случаев.</p>
    </div>
  `
};

const WeightTypography = {
  name: 'WeightTypography',
  template: `
    <div class="typography">
      <p class="regular">Regular (400) - Обычный текст</p>
      <p class="bold">Bold (700) - Жирный текст</p>
    </div>
  `
};

export default {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Типографика дизайн-системы использует шрифт PT Sans. Доступны следующие размеры и стили:'
      }
    }
  }
};

export const Default = {
  render: () => Typography
};

export const FontWeights = {
  render: () => WeightTypography
}; 