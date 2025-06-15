import tokens from '../tokens/tokens.json';

const Spacing = {
  name: 'Spacing',
  template: `
    <div class="spacing">
      <h2>Spacing Scale</h2>
      <div class="spacing-grid">
        <div class="spacing-item">
          <div class="spacing-box" style="width: 0px"></div>
          <div class="spacing-info">
            <span class="spacing-name">x0</span>
            <span class="spacing-value">0px</span>
          </div>
        </div>
        <div class="spacing-item">
          <div class="spacing-box" style="width: 4px"></div>
          <div class="spacing-info">
            <span class="spacing-name">x1</span>
            <span class="spacing-value">4px</span>
          </div>
        </div>
        <div class="spacing-item">
          <div class="spacing-box" style="width: 8px"></div>
          <div class="spacing-info">
            <span class="spacing-name">x2</span>
            <span class="spacing-value">8px</span>
          </div>
        </div>
        <div class="spacing-item">
          <div class="spacing-box" style="width: 12px"></div>
          <div class="spacing-info">
            <span class="spacing-name">x3</span>
            <span class="spacing-value">12px</span>
          </div>
        </div>
        <div class="spacing-item">
          <div class="spacing-box" style="width: 16px"></div>
          <div class="spacing-info">
            <span class="spacing-name">x4</span>
            <span class="spacing-value">16px</span>
          </div>
        </div>
        <div class="spacing-item">
          <div class="spacing-box" style="width: 24px"></div>
          <div class="spacing-info">
            <span class="spacing-name">x6</span>
            <span class="spacing-value">24px</span>
          </div>
        </div>
        <div class="spacing-item">
          <div class="spacing-box" style="width: 32px"></div>
          <div class="spacing-info">
            <span class="spacing-name">x8</span>
            <span class="spacing-value">32px</span>
          </div>
        </div>
      </div>
    </div>
  `
};

export default {
  title: 'Design System/Spacing',
  component: Spacing,
  tags: ['autodocs'],
};

export const Default = {
  render: () => Spacing
}; 