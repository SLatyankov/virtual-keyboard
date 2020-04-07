/* Задал массив будущих кнопок. Сверни, чтобы не прокручивать */

const BATTON = [{
    codeS: 'Backquote',
    ru: 'ё',
    RU: 'Ё',
    en: '`',
    EN: '~',
    special: false
}, {
    codeS: "Digit1",
    ru: '1',
    RU: '!',
    en: '1',
    EN: '!',
    special: false
}, {
    codeS: "Digit2",
    ru: '2',
    RU: '"',
    en: '2',
    EN: '@',
    special: false
}, {
    codeS: "Digit3",
    ru: '3',
    RU: '№',
    en: '3',
    EN: '#',
    special: false
}, {
    codeS: "Digit4",
    ru: '4',
    RU: ';',
    en: '4',
    EN: '$',
    special: false
}, {
    codeS: "Digit5",
    ru: '5',
    RU: '%',
    en: '5',
    EN: '%',
    special: false
}, {
    codeS: "Digit6",
    ru: '6',
    RU: ':',
    en: '6',
    EN: '^',
    special: false
}, {
    codeS: "Digit7",
    ru: '7',
    RU: '?',
    en: '7',
    EN: '&',
    special: false
}, {
    codeS: "Digit8",
    ru: '8',
    RU: '*',
    en: '8',
    EN: '*',
    special: false
}, {
    codeS: "Digit9",
    ru: '9',
    RU: '(',
    en: '9',
    EN: '(',
    special: false
}, {
    codeS: "Digit0",
    ru: '0',
    RU: ')',
    en: '0',
    EN: ')',
    special: false
}, {
    codeS: "Minus",
    ru: '-',
    RU: '_',
    en: '-',
    EN: '_',
    special: false
}, {
    codeS: "Equal",
    ru: '=',
    RU: '+',
    en: '=',
    EN: '+',
    special: false
}, {
    codeS: "Backslash",
    ru: '\\',
    RU: '/',
    en: '\\',
    EN: '|',
    special: false
}, {
    codeS: "Backspace",
    ru: '<-',
    RU: '<-',
    en: '<-',
    EN: '<-',
    special: true
}, {
    codeS: "Tab",
    ru: 'Tab',
    RU: 'Tab',
    en: 'Tab',
    EN: 'Tab',
    special: true
}, {
    codeS: "KeyQ",
    ru: 'й',
    RU: 'Й',
    en: 'q',
    EN: 'Q',
    special: false
}, {
    codeS: "KeyW",
    ru: 'ц',
    RU: 'Ц',
    en: 'w',
    EN: 'W',
    special: false
}, {
    codeS: "KeyE",
    ru: 'у',
    RU: 'У',
    en: 'e',
    EN: 'E',
    special: false
}, {
    codeS: "KeyR",
    ru: 'к',
    RU: 'К',
    en: 'r',
    EN: 'R',
    special: false
}, {
    codeS: "KeyT",
    ru: 'е',
    RU: 'Е',
    en: 't',
    EN: 'T',
    special: false
}, {
    codeS: "KeyY",
    ru: 'н',
    RU: 'Н',
    en: 'y',
    EN: 'Y',
    special: false
}, {
    codeS: "KeyU",
    ru: 'г',
    RU: 'Г',
    en: 'u',
    EN: 'U',
    special: false
}, {
    codeS: "KeyI",
    ru: 'ш',
    RU: 'Ш',
    en: 'i',
    EN: 'I',
    special: false
}, {
    codeS: "KeyO",
    ru: 'щ',
    RU: 'Щ',
    en: 'o',
    EN: 'O',
    special: false
}, {
    codeS: "KeyP",
    ru: 'з',
    RU: 'З',
    en: 'p',
    EN: 'P',
    special: false
}, {
    codeS: "BracketLeft",
    ru: 'х',
    RU: 'Х',
    en: '[',
    EN: '{',
    special: false
}, {
    codeS: "BracketRight",
    ru: 'ъ',
    RU: 'Ъ',
    en: ']',
    EN: '}',
    special: false
}, {
    codeS: "Delete",
    ru: 'Delete',
    RU: 'Delete',
    en: 'Delete',
    EN: 'Delete',
    special: true
}, {
    codeS: "CapsLock",
    ru: 'Caps Lock',
    RU: 'Caps Lock',
    en: 'Caps Lock',
    EN: 'Caps Lock',
    special: true
}, {
    codeS: "KeyA",
    ru: 'ф',
    RU: 'Ф',
    en: 'a',
    EN: 'A',
    special: false
}, {
    codeS: "KeyS",
    ru: 'ы',
    RU: 'Ы',
    en: 's',
    EN: 'S',
    special: false
}, {
    codeS: "KeyD",
    ru: 'в',
    RU: 'В',
    en: 'd',
    EN: 'D',
    special: false
}, {
    codeS: "KeyF",
    ru: 'а',
    RU: 'А',
    en: 'f',
    EN: 'F',
    special: false
}, {
    codeS: "KeyG",
    ru: 'п',
    RU: 'П',
    en: 'g',
    EN: 'G',
    special: false
}, {
    codeS: "KeyH",
    ru: 'р',
    RU: 'Р',
    en: 'h',
    EN: 'H',
    special: false
}, {
    codeS: "KeyJ",
    ru: 'о',
    RU: 'О',
    en: 'j',
    EN: 'J',
    special: false
}, {
    codeS: "KeyK",
    ru: 'л',
    RU: 'Л',
    en: 'k',
    EN: 'K',
    special: false
}, {
    codeS: "KeyL",
    ru: 'д',
    RU: 'Д',
    en: 'l',
    EN: 'L',
    special: false
}, {
    codeS: "Semicolon",
    ru: 'ж',
    RU: 'Ж',
    en: ';',
    EN: ':',
    special: false
}, {
    codeS: "Quote",
    ru: 'э',
    RU: 'Э',
    en: '\'',
    EN: '"',
    special: false
}, {
    codeS: "Enter",
    ru: 'Enter',
    RU: 'Enter',
    en: 'Enter',
    EN: 'Enter',
    special: true
}, {
    codeS: "ShiftLeft",
    ru: 'Shift',
    RU: 'Shift',
    en: 'Shift',
    EN: 'Shift',
    special: true
}, {
    codeS: "KeyZ",
    ru: 'я',
    RU: 'Я',
    en: 'z',
    EN: 'Z',
    special: false
}, {
    codeS: "KeyX",
    ru: 'ч',
    RU: 'Ч',
    en: 'x',
    EN: 'X',
    special: false
}, {
    codeS: "KeyC",
    ru: 'с',
    RU: 'С',
    en: 'c',
    EN: 'C',
    special: false
}, {
    codeS: "KeyV",
    ru: 'м',
    RU: 'М',
    en: 'v',
    EN: 'V',
    special: false
}, {
    codeS: "KeyB",
    ru: 'и',
    RU: 'И',
    en: 'b',
    EN: 'B',
    special: false
}, {
    codeS: "KeyN",
    ru: 'т',
    RU: 'Т',
    en: 'n',
    EN: 'N',
    special: false
}, {
    codeS: "KeyM",
    ru: 'ь',
    RU: 'Ь',
    en: 'm`',
    EN: 'M',
    special: false
}, {
    codeS: "Comma",
    ru: 'б',
    RU: 'Б',
    en: ',',
    EN: '<',
    special: false
}, {
    codeS: "Period",
    ru: 'ю',
    RU: 'Ю',
    en: '.',
    EN: '>',
    special: false
}, {
    codeS: "Slash",
    ru: '.',
    RU: ',',
    en: '/',
    EN: '?',
    special: false
}, {
    codeS: "ArrowUp",
    ru: '|',
    RU: '|',
    en: '|',
    EN: '|',
    special: true
}, {
    codeS: "ShiftRight",
    ru: 'Shift',
    RU: 'Shift',
    en: 'Shift',
    EN: 'Shift',
    special: true
}, {
    codeS: "ControlLeft",
    ru: 'Ctrl',
    RU: 'Ctrl',
    en: 'Ctrl',
    EN: 'Ctrl',
    special: true
}, {
    codeS: "AltLeft",
    ru: 'Alt',
    RU: 'Alt',
    en: 'Alt',
    EN: 'Alt',
    special: true
}, {
    codeS: "Space",
    ru: ' ',
    RU: ' ',
    en: ' ',
    EN: ' ',
    special: false
}, {
    codeS: "AltRight",
    ru: 'Alt',
    RU: 'Alt',
    en: 'Alt',
    EN: 'Alt',
    special: true
}, {
    codeS: "ControlRight",
    ru: 'Ctrl',
    RU: 'Ctrl',
    en: 'Ctrl',
    EN: 'Ctrl',
    special: true
}, {
    codeS: "ArrowLeft",
    ru: '<--',
    RU: '<--',
    en: '<--',
    EN: '<--',
    special: true
}, {
    codeS: "ArrowDown",
    ru: '|',
    RU: '|',
    en: '|',
    EN: '|',
    special: true
}, {
    codeS: "ArrowRight",
    ru: '-->',
    RU: '-->',
    en: '-->',
    EN: '-->',
    special: true
}]

//Создание экрана, клавиатуры и описания

const TEXTAREA = document.createElement('textarea');
TEXTAREA.placeholder = "Just press a button. I know, you can";
TEXTAREA.id = "textarea";
TEXTAREA.name = "display";
document.body.append(TEXTAREA);

const KEYBOARD = document.createElement('div');
KEYBOARD.id = 'keyboard';
document.body.append(KEYBOARD);

const MANUAL = document.createElement('p');
MANUAL.id = 'manual';
MANUAL.innerHTML = 'Для смены языка нажми левые Shift + Alt.';
document.body.append(MANUAL);


//Сохранение языка.  ---------------------------------------------------Доделать!!!!!!!
/*localStorage.setItem(fontRuEn, 'ru');
let font = localStorage.getItem(fontRuEn);*/

//шрифт на клавиатуре
let lang = 'ru';
let caps = false;

//Функция для создания и пересоздания клавиатуры

function CreateBattons(array) {
    document.querySelectorAll('.keys').forEach(el => el.remove());
    array.forEach(element => {
        let key = document.createElement('div');
        key.className = "keys";
        key.id = element.codeS;
        if (lang == 'ru') {
            if (caps == false) {
                key.innerHTML = element.ru;
            } else {
                key.innerHTML = element.RU;
            }
        } else {
            if (caps == false) {
                key.innerHTML = element.en;
            } else {
                key.innerHTML = element.EN;
            }
        }
        KEYBOARD.append(key);
    });
}

CreateBattons(BATTON);

//Подсветка клавиш + особое поведение

const KEYS = document.querySelectorAll('.keys');

document.addEventListener('keydown', function (event) {

    KEYS.forEach(el => {
        if (el.id == event.code) {
            el.classList.add('active');
        }
    });
    if (event.code == 'CapsLock' || event.code == 'ShiftLeft' || event.code == 'ShiftRight') {

        if (caps == false) {
            caps = true;
        } else {
            caps = false;
        }
        console.log(caps);

        CreateBattons(BATTON);
    }
})



document.addEventListener('keyup', function (event) {

    KEYS.forEach(el => {
        if (el.id == event.code) {
            el.classList.remove('active');
        }
    });

        if ( event.code == 'ShiftLeft' || event.code == 'ShiftRight') {

            if (caps == false) {
                caps = true;
            } else {
                caps = false;
            }
            console.log(caps);

            CreateBattons(BATTON);
        }
})


/*TEXTAREA.onkeydown = TEXTAREA.onkeyup = TEXTAREA.onkeypress = handle;*/