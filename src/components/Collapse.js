import './Collapse.css';

export default class CollapsibleContainer {
  constructor(container, contentText) {
    this.container = container;

    this.button = this.createCollapseButton();

    this.content = document.createElement('div');
    this.content.classList.add('collapse-content');
    this.content.innerText = contentText;
    this.container.appendChild(this.content);

    console.log(this.content);


    this.isCollapsed = false;

    // Добавляем обработчик события для кнопки
    this.button.addEventListener('click', () => this.toggleCollapse());

  }

  createCollapseButton() {
    const button = document.createElement('button');
    button.innerText = 'Collapse';
    this.container.appendChild(button);
    return button;
  }

  toggleCollapse() {
    this.content.classList.toggle('collapsed');
  }
}