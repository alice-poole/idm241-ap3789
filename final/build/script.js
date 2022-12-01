const options = document.querySelectorAll('.sticky');
const page = document.querySelector('body');
const pink = document.querySelector('.pickPink');
const gold = document.querySelector('.pickGold');
const blue = document.querySelector('.pickBlue');
var color = 'pink';

options.forEach(button => {
  button.addEventListener('click', () => {
    options.forEach(button => button.classList.remove('pressed'));
    button.classList.add('pressed');
    color = button.id;
    choose(color);
    });
});

function click() {
    
}

function choose(color) {
    document.body.classList.remove('pink','gold', 'blue');
    document.body.classList.add(color);
}
/*document.querySelector(".example");
document.getElementById("myHeader").innerHTML = "Have a nice day!";
document.getElementById("pink").classList.toggle('pressed');*/