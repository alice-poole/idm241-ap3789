const options = document.querySelectorAll('.sticky');

options.forEach(button => {
  button.addEventListener('click', () => {
    options.forEach(button => button.classList.remove('pressed'));
    button.classList.add('pressed');
    });
});

const button = document.querySelector('.sticky');

button.addEventListener('click', () => {
  button.classList.toggle('pressed');
});