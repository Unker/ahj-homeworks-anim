import './Collapse.css';

export default class CollapsibleContainer {
  constructor(container, contentText) {
    this.container = container;

    this.containerCollapse = document.createElement('div');
    this.containerCollapse.classList.add('collapse-container');

    this.button = this.createCollapseButton();
    this.content = this.createCollapseContent(contentText);

    this.container.appendChild(this.containerCollapse);

    this.button.addEventListener('click', () => this.toggleCollapse());
  }

  createCollapseButton() {
    const button = document.createElement('button');
    button.classList.add('collapse-button');
    button.innerText = 'Collapse';
    this.containerCollapse.appendChild(button);
    return button;
  }

  createCollapseContent(contentText) {
    const content = document.createElement('div');
    const contentInner = document.createElement('div');
    content.classList.add('collapse-content');
    contentInner.classList.add('collapse-inner');
    contentInner.innerText = contentText;
    this.containerCollapse.appendChild(content);
    content.appendChild(contentInner);
    return content;
  }

  toggleCollapse() {
    this.content.classList.toggle('collapsed');
  }

  getDOMElement() {
    return this.containerCollapse;
  }
}
