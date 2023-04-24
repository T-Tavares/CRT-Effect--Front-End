// ---------------------------------------------------------------- //
// -------------------------- VARIABLES --------------------------- //
// ---------------------------------------------------------------- //

const crtButtonSwitch = document.querySelector('.tv-switch');
const body = document.querySelector('body');

const crtElements = [...document.querySelectorAll('.crt-effect div')];

const crtEffect = document.querySelector('.crt-effect');
const yourContent = document.querySelector('.your-content');
const tv = [crtEffect, yourContent];

const screenColourSwitch = document.querySelector('.screen-colour-switch');

const themeBtns = [...document.querySelectorAll('.screen-colour-switch button')];

// ---------------------------------------------------------------- //
// -------------------------- FUNCTIONS --------------------------- //
// ---------------------------------------------------------------- //

// ----------------------- ON/OFF FUNCTIONS ----------------------- //
function turnOn() {
    crtElements[0].classList.add('black');
    crtElements[1].classList.add('turn-on');

    tv.forEach(e => {
        e.classList.remove('off');
    });
    setTimeout(() => {
        crtElements[0].classList.remove('black');
        crtElements[1].classList.remove('turn-on');
    }, 300);

    crtButtonSwitch.textContent = 'On';
    crtButtonSwitch.classList.add('open');
}

function turnOff() {
    crtElements[0].classList.add('black');
    crtElements[1].classList.add('turn-off');

    setTimeout(() => {
        crtElements[1].classList.remove('black');
        crtElements[1].classList.remove('turn-off');

        tv.forEach(e => {
            e.classList.add('off');
        });
    }, 300);

    crtButtonSwitch.textContent = 'Off';
    crtButtonSwitch.classList.remove('open');
}

// -------------------- SCREEN THEME FUNCTION --------------------- //

function setTheme(fontColour, bgColour, inputBG, inputText) {
    body.style.setProperty('--font-colour', fontColour);
    body.style.setProperty('--screen-colour', bgColour);
    body.style.setProperty('--input-colour', inputBG);
    body.style.setProperty('--input-text-colour', inputText);
}

// ---------------------------------------------------------------- //
// ----------------------- EVENT LISTENERS ------------------------ //
// ---------------------------------------------------------------- //

// -------------------- ON/OFF EVENT LISTENER --------------------- //

crtButtonSwitch.addEventListener('click', e => {
    const status = e.target.textContent;
    if (status === 'Off') {
        turnOn();
        setTheme('#555', '#111', '#222', '#fff');
    } else if (status === 'On') {
        turnOff();
        setTheme('#555', '#111', '#222', '#fff');
    }
});

// --------------- SCREEN THEMES SWITCHER LISTENER ---------------- //

themeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        switch (e.target.textContent) {
            case 'Dark':
                font = '#555';
                screen = '#111';
                input = '#222';
                inputText = '#fff';
                break;
            case 'Light':
                font = '#666';
                screen = '#ccc';
                input = '#aaa';
                inputText = '#000';
                break;
            case 'Color':
                font = '#1b2687';
                screen = '#2a74b0';
                input = '#5f93e8';
                inputText = '#030a38';
                break;
        }
        if (crtButtonSwitch.textContent === 'On') {
            setTheme(font, screen, input, inputText);
        }
    });
});
