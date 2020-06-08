const switchButton = document.getElementById('toggle-switch_body');
const container = document.getElementById('body');
const toggleTxt = document.getElementById('toggle-txt');
const toggleSwitchTrigger = document.getElementById('toggle-switch_trigger');

switchButton.addEventListener('click', () => {
  if (container.classList.contains('dark')) {
    container.classList.remove('dark');
    toggleTxt.innerText = 'light theme';

    toggleSwitchTrigger.style.left = '9%';
  } else {
    container.classList.add('dark');
    toggleTxt.innerText = 'dark theme';
    toggleSwitchTrigger.style.left = '59%';
  }
});
