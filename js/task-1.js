document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('#html-input');
  const button = document.querySelector('#extract-btn');
  const output = document.querySelector('#output');
  const countSpan = document.querySelector('#count');

  button.addEventListener('click', () => {
    const html = display.value;

    if (!html.includes('class=')) {
      alert('У тексті не знайдено класів.');
      output.textContent = '';
      countSpan.textContent = '0';
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elements = doc.querySelectorAll('[class]');
    const classSet = new Set();

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const classes = el.className.split(/\s+/);
      for (let j = 0; j < classes.length; j++) {
        if (classes[j]) {
          classSet.add(classes[j]);
        }
      }
    }

    const result = [...classSet]
      .sort()
      .map(cls => `.${cls} {}`)
      .join('\n');

    output.textContent = result;
    countSpan.textContent = classSet.size.toString();
  });
});
