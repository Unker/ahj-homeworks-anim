import CollapsibleContainer from '../components/Collapse/Collapse';
import CallbackChatContainer from '../components/CallbackChat/CallbackChat';

const container = document.querySelector('.container');

const testText = `
1
2
3
4
5
`;
const collapsible = new CollapsibleContainer(container, testText);
const collapsibleEl = collapsible.getDOMElement();

const anotherContent = document.createElement('div');
anotherContent.innerText = 'another content';
collapsibleEl.appendChild(anotherContent);

const chat = new CallbackChatContainer(container);
