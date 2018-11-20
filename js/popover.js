var trigger = document.getElementById('btn-login');
var toPopOver = document.querySelector('.login-form');

document.addEventListener("click", function(event) {
    if (event.target.matches('#btn-login')) {
        toPopOver.classList.add('animated', 'faster');
        toPopOver.classList.toggle('login-form-toggle');
        if (toPopOver.classList.contains("fadeIn")) {
            toPopOver.classList.remove('fadeIn');
            toPopOver.classList.add('fadeOut');
        } else {
            toPopOver.classList.remove('fadeOut');
            toPopOver.classList.add('fadeIn');
        }

        new Popper(trigger, toPopOver, {
            placement: 'bottom',
            modifiers: {
                arrow: {
                    element: '.arrow'
                }
            }
        });
    }
    if (event.target.matches('#log-in')) {
        console.log('Iniciamos sesión!');
        toPopOver.classList.remove('fadeIn');
        toPopOver.classList.add('fadeOut');
    }
}, false);