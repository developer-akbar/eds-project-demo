/**
 * loads and decorates the welcome block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'welcome-container';

  const heading = document.createElement('h2');
  heading.textContent = 'Welcome to EDS KT Session';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'My first custom block';

  container.appendChild(heading);
  container.appendChild(paragraph);
  block.appendChild(container);
}
