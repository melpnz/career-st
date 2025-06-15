import tokens from '../tokens/tokens.json';

const Colors = {
  name: 'Colors',
  template: `
    <div class="colors">
      <div class="color-section">
        <h2>Font Colors</h2>
        <div class="color-grid">
          <div class="color-item">
            <div class="color-box" style="background-color: #464646"></div>
            <div class="color-info">
              <span class="color-name">Font Black</span>
              <span class="color-value">#464646</span>
            </div>
          </div>
          <div class="color-item">
            <div class="color-box" style="background-color: #8c8c8c"></div>
            <div class="color-info">
              <span class="color-name">Font Gray</span>
              <span class="color-value">#8c8c8c</span>
            </div>
          </div>
          <div class="color-item">
            <div class="color-box" style="background-color: #5677fc"></div>
            <div class="color-info">
              <span class="color-name">Font Link</span>
              <span class="color-value">#5677fc</span>
            </div>
          </div>
        </div>
      </div>

      <div class="color-section">
        <h2>UI Colors</h2>
        <div class="color-grid">
          <div class="color-item">
            <div class="color-box" style="background-color: #5677fc"></div>
            <div class="color-info">
              <span class="color-name">Blue</span>
              <span class="color-value">#5677fc</span>
            </div>
          </div>
          <div class="color-item">
            <div class="color-box" style="background-color: #4caf50"></div>
            <div class="color-info">
              <span class="color-name">Green</span>
              <span class="color-value">#4caf50</span>
            </div>
          </div>
          <div class="color-item">
            <div class="color-box" style="background-color: #f44336"></div>
            <div class="color-info">
              <span class="color-name">Red</span>
              <span class="color-value">#f44336</span>
            </div>
          </div>
          <div class="color-item">
            <div class="color-box" style="background-color: #9e9e9e"></div>
            <div class="color-info">
              <span class="color-name">Gray</span>
              <span class="color-value">#9e9e9e</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

export default {
  title: 'Design System/Colors',
  component: Colors,
  tags: ['autodocs'],
};

export const Default = {
  render: () => Colors
}; 