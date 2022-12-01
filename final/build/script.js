const options = document.querySelectorAll('.sticky');
const next = document.getElementById('next');
const pink = document.querySelector('.pickPink');
const gold = document.querySelector('.pickGold');
const blue = document.querySelector('.pickBlue');
var color = 'pink';
var current = document.getElementById("pink");

options.forEach(button => {
  button.addEventListener('click', () => {
    color = button.id;
    choose(color);
    });
});

next.addEventListener('click', () => {
    switch (color) {
        case 'pink':
            color = 'gold';
            break;
        case 'gold':
            color = 'blue';
            break;
        case 'blue':
            color = 'pink';
            break;
        default:
            color = 'pink';  
    }
    choose(color);
    
    });



function choose(color) {
    options.forEach(button => button.classList.remove('pressed'));
    current = document.getElementById(color);
    current.classList.add('pressed');
    document.body.classList.remove('pink','gold', 'blue');
    document.body.classList.add(color);
}
/*document.querySelector(".example");
document.getElementById("myHeader").innerHTML = "Have a nice day!";
document.getElementById("pink").classList.toggle('pressed');*/