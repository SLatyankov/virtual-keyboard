let lang;
if (localStorage.getItem('langStorage') === 'en') {
    lang = 'en';
} else if (localStorage.getItem('langStorage') === 'ru') {
    lang = 'ru';
} else {
    lang = 'en';
}

/* Задал массив будущих кнопок. Сверни, чтобы не прокручивать */

const BUTTON_KEYS = [{
    codeS: 'Backquote',
    ru: 'ё',
    RU: 'Ё',
    en: '`',
    EN: '~',
    special: false,
    perceivesTab: true,
}, {
    codeS: "Digit1",
    ru: '1',
    RU: '!',
    en: '1',
    EN: '!',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit2",
    ru: '2',
    RU: '"',
    en: '2',
    EN: '@',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit3",
    ru: '3',
    RU: '№',
    en: '3',
    EN: '#',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit4",
    ru: '4',
    RU: ';',
    en: '4',
    EN: '$',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit5",
    ru: '5',
    RU: '%',
    en: '5',
    EN: '%',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit6",
    ru: '6',
    RU: ':',
    en: '6',
    EN: '^',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit7",
    ru: '7',
    RU: '?',
    en: '7',
    EN: '&',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit8",
    ru: '8',
    RU: '*',
    en: '8',
    EN: '*',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit9",
    ru: '9',
    RU: '(',
    en: '9',
    EN: '(',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Digit0",
    ru: '0',
    RU: ')',
    en: '0',
    EN: ')',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Minus",
    ru: '-',
    RU: '_',
    en: '-',
    EN: '_',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Equal",
    ru: '=',
    RU: '+',
    en: '=',
    EN: '+',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Backslash",
    ru: '\\',
    RU: '/',
    en: '\\',
    EN: '|',
    special: false,
    perceivesTab: false,
}, {
    codeS: "Backspace",
    ru: '⬅',
    RU: '⬅',
    en: '⬅',
    EN: '⬅',
    special: true,
    perceivesTab: false,
}, {
    codeS: "Tab",
    ru: 'Tab',
    RU: 'Tab',
    en: 'Tab',
    EN: 'Tab',
    special: true,
    perceivesTab: false,
}, {
    codeS: "KeyQ",
    ru: 'й',
    RU: 'Й',
    en: 'q',
    EN: 'Q',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyW",
    ru: 'ц',
    RU: 'Ц',
    en: 'w',
    EN: 'W',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyE",
    ru: 'у',
    RU: 'У',
    en: 'e',
    EN: 'E',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyR",
    ru: 'к',
    RU: 'К',
    en: 'r',
    EN: 'R',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyT",
    ru: 'е',
    RU: 'Е',
    en: 't',
    EN: 'T',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyY",
    ru: 'н',
    RU: 'Н',
    en: 'y',
    EN: 'Y',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyU",
    ru: 'г',
    RU: 'Г',
    en: 'u',
    EN: 'U',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyI",
    ru: 'ш',
    RU: 'Ш',
    en: 'i',
    EN: 'I',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyO",
    ru: 'щ',
    RU: 'Щ',
    en: 'o',
    EN: 'O',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyP",
    ru: 'з',
    RU: 'З',
    en: 'p',
    EN: 'P',
    special: false,
    perceivesTab: true,
}, {
    codeS: "BracketLeft",
    ru: 'х',
    RU: 'Х',
    en: '[',
    EN: '{',
    special: false,
    perceivesTab: true,
}, {
    codeS: "BracketRight",
    ru: 'ъ',
    RU: 'Ъ',
    en: ']',
    EN: '}',
    special: false,
    perceivesTab: true,
}, {
    codeS: "Delete",
    ru: 'Delete',
    RU: 'Delete',
    en: 'Delete',
    EN: 'Delete',
    special: true,
    perceivesTab: false,
}, {
    codeS: "CapsLock",
    ru: 'Caps Lock',
    RU: 'Caps Lock',
    en: 'Caps Lock',
    EN: 'Caps Lock',
    special: true,
    perceivesTab: false,
}, {
    codeS: "KeyA",
    ru: 'ф',
    RU: 'Ф',
    en: 'a',
    EN: 'A',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyS",
    ru: 'ы',
    RU: 'Ы',
    en: 's',
    EN: 'S',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyD",
    ru: 'в',
    RU: 'В',
    en: 'd',
    EN: 'D',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyF",
    ru: 'а',
    RU: 'А',
    en: 'f',
    EN: 'F',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyG",
    ru: 'п',
    RU: 'П',
    en: 'g',
    EN: 'G',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyH",
    ru: 'р',
    RU: 'Р',
    en: 'h',
    EN: 'H',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyJ",
    ru: 'о',
    RU: 'О',
    en: 'j',
    EN: 'J',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyK",
    ru: 'л',
    RU: 'Л',
    en: 'k',
    EN: 'K',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyL",
    ru: 'д',
    RU: 'Д',
    en: 'l',
    EN: 'L',
    special: false,
    perceivesTab: true,
}, {
    codeS: "Semicolon",
    ru: 'ж',
    RU: 'Ж',
    en: ';',
    EN: ':',
    special: false,
    perceivesTab: true,
}, {
    codeS: "Quote",
    ru: 'э',
    RU: 'Э',
    en: '\'',
    EN: '"',
    special: false,
    perceivesTab: true,
}, {
    codeS: "Enter",
    ru: 'Enter',
    RU: 'Enter',
    en: 'Enter',
    EN: 'Enter',
    special: true,
    perceivesTab: false,
}, {
    codeS: "ShiftLeft",
    ru: 'Shift',
    RU: 'Shift',
    en: 'Shift',
    EN: 'Shift',
    special: true,
    perceivesTab: false,
}, {
    codeS: "KeyZ",
    ru: 'я',
    RU: 'Я',
    en: 'z',
    EN: 'Z',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyX",
    ru: 'ч',
    RU: 'Ч',
    en: 'x',
    EN: 'X',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyC",
    ru: 'с',
    RU: 'С',
    en: 'c',
    EN: 'C',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyV",
    ru: 'м',
    RU: 'М',
    en: 'v',
    EN: 'V',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyB",
    ru: 'и',
    RU: 'И',
    en: 'b',
    EN: 'B',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyN",
    ru: 'т',
    RU: 'Т',
    en: 'n',
    EN: 'N',
    special: false,
    perceivesTab: true,
}, {
    codeS: "KeyM",
    ru: 'ь',
    RU: 'Ь',
    en: 'm`',
    EN: 'M',
    special: false,
    perceivesTab: true,
}, {
    codeS: "Comma",
    ru: 'б',
    RU: 'Б',
    en: ',',
    EN: '<',
    special: false,
    perceivesTab: true,
}, {
    codeS: "Period",
    ru: 'ю',
    RU: 'Ю',
    en: '.',
    EN: '>',
    special: false,
    perceivesTab: true,
}, {
    codeS: "Slash",
    ru: '.',
    RU: ',',
    en: '/',
    EN: '?',
    special: false,
    perceivesTab: false,
}, {
    codeS: "ArrowUp",
    ru: '↑',
    RU: '↑',
    en: '↑',
    EN: '↑',
    special: true,
    perceivesTab: false,
}, {
    codeS: "ShiftRight",
    ru: 'Shift',
    RU: 'Shift',
    en: 'Shift',
    EN: 'Shift',
    special: true,
    perceivesTab: false,
}, {
    codeS: "ControlLeft",
    ru: 'Ctrl',
    RU: 'Ctrl',
    en: 'Ctrl',
    EN: 'Ctrl',
    special: true,
    perceivesTab: false,
}, {
    codeS: "AltLeft",
    ru: 'Alt',
    RU: 'Alt',
    en: 'Alt',
    EN: 'Alt',
    special: true,
    perceivesTab: false,
}, {
    codeS: "Space",
    ru: ' ',
    RU: ' ',
    en: ' ',
    EN: ' ',
    special: false,
    perceivesTab: false,
}, {
    codeS: "AltRight",
    ru: 'Alt',
    RU: 'Alt',
    en: 'Alt',
    EN: 'Alt',
    special: true,
    perceivesTab: false,
}, {
    codeS: "ControlRight",
    ru: 'Ctrl',
    RU: 'Ctrl',
    en: 'Ctrl',
    EN: 'Ctrl',
    special: true,
    perceivesTab: false,
}, {
    codeS: "ArrowLeft",
    ru: '←',
    RU: '←',
    en: '←',
    EN: '←',
    special: true,
    perceivesTab: false,
}, {
    codeS: "ArrowDown",
    ru: '↓',
    RU: '↓',
    en: '↓',
    EN: '↓',
    special: true,
    perceivesTab: false,
}, {
    codeS: "ArrowRight",
    ru: '→',
    RU: '→',
    en: '→',
    EN: '→',
    special: true,
    perceivesTab: false,
}]

//Создание экрана, клавиатуры и описания

const textarea = document.createElement('textarea');
textarea.placeholder = "Just press a button. I know, you can";
textarea.id = "textarea";
textarea.name = "display";
textarea.autofocus = true;
document.body.append(textarea);

const keyboard = document.createElement('div');
keyboard.id = 'keyboard';
document.body.append(keyboard);

const manual = document.createElement('p');
manual.id = 'manual';
manual.className = 'manual';
manual.innerHTML = 'Для смены языка нажми Ctrl + Alt. <br> Клавиатура писалась на windows';
document.body.append(manual);
let langStorage = 'langStorage';
let KEYS = [];

//Функция для создания и пересоздания клавиатуры
let isCapsOn = false;
let isShiftOn = false;

function createButtons(array) {
    document.querySelectorAll('.key').forEach(el => el.remove());
    array.forEach(element => {

        let key = document.createElement('div');
        key.className = toLoverFirst(element.codeS);
        key.classList.add("key");
        key.id = element.codeS;
        if (lang === 'ru') {
            if (isCapsOn === false && isShiftOn === false) {
                key.innerHTML = element.ru;
            } else if (isCapsOn === false && isShiftOn === true) {
                key.innerHTML = element.RU;
            } else if (isCapsOn === true && isShiftOn === false) {
                if (element.perceivesTab) {
                    key.innerHTML = element.RU;
                } else {
                    key.innerHTML = element.ru;
                }
            } else {
                key.innerHTML = element.ru;
            }
        } else {
            if (isCapsOn === false && isShiftOn === false) {
                key.innerHTML = element.en;
            } else if (isCapsOn === false && isShiftOn === true) {
                key.innerHTML = element.EN;
            } else if (isCapsOn === true && isShiftOn === false) {
                if (element.perceivesTab === true) {
                    key.innerHTML = element.EN;
                } else {
                    key.innerHTML = element.en;
                }
            } else {
                key.innerHTML = element.en;
            }
        }
        keyboard.append(key);
        KEYS = document.querySelectorAll('.key');
    });
}

createButtons(BUTTON_KEYS);

//Подсветка клавиш + особое поведение

let keysDown = {};
let isControlDown = false;

document.addEventListener('keydown', function (event) {
    if (!(event.key in keysDown)) {
        keysDown[event.key] = true;
    }
    event.preventDefault();
    textarea.focus();
    let string = textarea.value;
    KEYS.forEach(el => {
        if (el.id === event.code) {
            el.classList.add('active');
            if (el.id === 'Tab') {
                textarea.value += '\t';
            } else if (el.id === 'CapsLock') {
                isCapsOn = !isCapsOn;
                createButtons(BUTTON_KEYS);
                KEYS = document.querySelectorAll('.key');
                KEYS.forEach(el => {
                    if (el.id === event.code) {
                        el.classList.add('active');
                    }
                });
            } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                isShiftOn = true;
                createButtons(BUTTON_KEYS);
                KEYS = document.querySelectorAll('.key');
                KEYS.forEach(el => {
                    if (el.id === event.code) {
                        el.classList.add('active');
                    }
                });
            } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
                isControlDown = true;
            } else if (el.id === 'AltLeft' || el.id === 'AltRight') {
                if (isControlDown === true) {
                    if (lang == 'ru') {
                        lang = 'en';
                       localStorage.setItem(langStorage, 'en');
                    } else {
                        lang = 'ru';
                       localStorage.setItem(langStorage, 'ru');
                    }
                    createButtons(BUTTON_KEYS);
                    KEYS = document.querySelectorAll('.key');
                }
            } else if (el.id == 'Enter') {
                textarea.value += '\n';
            } else if (el.id === 'Delete') {
                textarea.value = string.slice(0, textarea.selectionStart + 1) + string.slice(textarea.selectionStart + 2, string.length);
            } else if (el.id === 'Backspace') {
                textarea.value = string.slice(0, textarea.selectionStart - 1) + string.slice(textarea.selectionStart, string.length);
            } else {
                textarea.value += el.textContent;
            }
        }
    })
})

document.addEventListener('keyup', function (event) {

    KEYS.forEach(el => {
        if (el.id === event.code) {
            el.classList.remove('active');
        }
    });

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        isShiftOn = false;
        createButtons(BUTTON_KEYS);
        KEYS = document.querySelectorAll('.key');
        KEYS.forEach(el => {
            if (el.id === event.code) {
                el.classList.remove('active');
            }
        });
    }

    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        isControlDown = false;
    }
})

keyboard.addEventListener('mousedown', function (event) {
    let string = textarea.value;
    KEYS.forEach(el => {
        if (el === event.target) {
            el.classList.add('active');
            if (el.id === 'Tab') {
                textarea.value += '\t';
            } else if (el.id === 'CapsLock') {
                isCapsOn = !isCapsOn;
                createButtons(BUTTON_KEYS);
                KEYS = document.querySelectorAll('.key');
                KEYS.forEach(el => {

                    if (el.id === event.target) {
                        el.classList.add('active');
                    }

                });
            } else if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
                isShiftOn = true;
                createButtons(BUTTON_KEYS);
                KEYS = document.querySelectorAll('.key');
                KEYS.forEach(el => {

                    if (el.id === event.target) {
                        el.classList.add('active');
                    }

                });
            } else if (el.id === 'ControlLeft' || el.id === 'ControlRight' || el.id === 'AltLeft' || el.id === 'AltRight') {} else if (el.id == 'Enter') {
                textarea.value += '\n';
            } else if (el.id === 'Delete') {
                textarea.value = string.slice(0, textarea.selectionStart + 1) + string.slice(textarea.selectionStart + 2, string.length);
            } else if (el.id === 'Backspace') {
                textarea.value = string.slice(0, textarea.selectionStart - 1) + string.slice(textarea.selectionStart, string.length);
            } else {
                textarea.value += el.textContent;
            }
        }
    })
});

keyboard.addEventListener('mouseup', function (event) {
    KEYS.forEach(el => {
        if (el === event.target) {
            el.classList.remove('active');
            if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
                isShiftOn = false;
                createButtons(BUTTON_KEYS);
                KEYS = document.querySelectorAll('.key');
            }
        }
    })
});


function toLoverFirst(str) {
    let x = str.charAt(0).toLowerCase();;
    return x + str.slice(1);
}