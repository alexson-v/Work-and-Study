const root = document.querySelector('.wrapper'),
      rootStyles = getComputedStyle(root);

document.querySelector('button').addEventListener('click', () => {
    root.style.setProperty('--text-color', 'red');
});