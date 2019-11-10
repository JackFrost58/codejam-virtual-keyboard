const keyboard = document.createElement('div');
const languages = ['ru', 'en'];
const letterRegisters = ['low', 'upper'];
const systemCommandKeys = ['ctrl', 'win', 'alt', 'space', 'alt', 'arrow', 'arrow', 'arrow', 'ctrl'];

const buttonNameIndx = 0;
const keyRows = [
  [
    ['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '"', '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', 'к', 'К', 'r', 'R'],
    ['KeyT', 'е', 'Е', 't', 'T'],
    ['KeyY', 'н', 'Н', 'y', 'Y'],
    ['KeyU', 'г', 'Г', 'u', 'U'],
    ['KeyI', 'ш', 'Ш', 'i', 'I'],
    ['KeyO', 'щ', 'Щ', 'o', 'O'],
    ['KeyP', 'з', 'З', 'p', 'P'],
    ['BracketLeft', 'х', 'Х', '[', '{'],
    ['BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['Backslash', '\\', '/', '\\', '|'],
    ['Delete', 'DEL', 'DEL', 'DEL', 'DEL'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a', 'A'],
    ['KeyS', 'ы', 'Ы', 's', 'S'],
    ['KeyD', 'в', 'В', 'd', 'D'],
    ['KeyF', 'а', 'А', 'f', 'F'],
    ['KeyG', 'п', 'П', 'g', 'G'],
    ['KeyH', 'р', 'Р', 'h', 'H'],
    ['KeyJ', 'о', 'О', 'j', 'J'],
    ['KeyK', 'л', 'Л', 'k', 'K'],
    ['KeyL', 'д', 'Д', 'l', 'L'],
    ['Semicolon', 'ж', 'Ж', ':', ';'],
    ['Quote', 'э', 'Э', '\'', '"'],
    ['Enter', 'ENTER', 'ENTER', 'ENTER', 'ENTER'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'z', 'Z'],
    ['KeyX', 'ч', 'Ч', 'x', 'X'],
    ['KeyC', 'с', 'С', 'c', 'C'],
    ['KeyV', 'м', 'М', 'v', 'V'],
    ['KeyB', 'и', 'И', 'b', 'B'],
    ['KeyN', 'т', 'Т', 'n', 'N'],
    ['KeyM', 'ь', 'Ь', 'm', 'M'],
    ['Comma', 'б', 'Б', ',', '<'],
    ['Period', 'ю', 'Ю', '.', '>'],
    ['Slash', '.', ',', '/', '?'],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ]
];

function createTextArea(rows, cols) {
  const TextPlace = document.createElement('textarea');
  TextPlace.id = 'result';
  TextPlace.rows = rows;
  TextPlace.cols = cols;
  document.body.append(TextPlace);
}

function createKeyboard() {
  keyboard.className = 'keyboard';
  document.body.append(keyboard);
}

function pressCapsLock() {
  const up = document.getElementsByClassName('case');
  for (const iterator of up) {
    iterator.classList.toggle('upper');
    iterator.classList.toggle('low');
  }
}

function createButtons(firstButton, lastButton, keyRow) {
  const elementRow = document.createElement('div');
  elementRow.className = 'row';
  keyboard.append(elementRow);


  const elementFirstButton = document.createElement('div');
  if (firstButton === '') {
    elementFirstButton.className = 'key';
  } else {
    elementFirstButton.classList.add('key', firstButton);
  }

  createButton(keyRow[0], elementFirstButton, elementRow);

  for (let j = 1; j <= keyRow.length - 2; j++) {
    const key = document.createElement('div');
    key.className = 'key';
    createButton(keyRow[j], key, elementRow);
  }

  const elementLastButton = document.createElement('div');
  elementLastButton.classList.add('key', lastButton);
  createButton(keyRow[keyRow.length - 1], elementLastButton, elementRow);
}

function createControlButtons(systemCommandKeys, keyRow) {
  const rowElement = document.createElement('div');
  rowElement.className = 'row';
  keyboard.append(rowElement);
  for (let j = 0; j < systemCommandKeys.length; j++) {
    const buttonElement = document.createElement('div');
    buttonElement.classList.add('key', systemCommandKeys[j]);
    createButton(keyRow[j], buttonElement, rowElement);
  }
}

function createButton(keyDescription, buttonElement, rowElement) {
  let position = 1;
  for (const language of languages) {
    const languageElement = document.createElement('span');
    languageElement.classList.add(keyDescription[buttonNameIndx], language);
    for (const letterRegister of letterRegisters) {
      const caseElement = document.createElement('span');
      caseElement.classList.add('case', letterRegister);
      caseElement.innerHTML = keyDescription[position++];
      languageElement.append(caseElement);
    }
    buttonElement.append(languageElement);
  }
  rowElement.append(buttonElement);
}

function activeLetter(key, consist) {
  const activeSpan = key.getElementsByClassName('en');
  const letter = activeSpan[0].getElementsByClassName(consist);

  return letter[0];
}

const rows = 6;
const cols = 60;
createTextArea(rows, cols);
createKeyboard();
createButtons('', 'backspace', keyRows[0]);
createButtons('tab', 'del', keyRows[1]);
createButtons('capslock', 'enter', keyRows[2]);
createButtons('shift', 'shift-right', keyRows[3]);
createControlButtons(systemCommandKeys, keyRows[4]);

const textArea = document.getElementById('result');
const key = Array.from(document.getElementsByClassName('key'));

key.forEach(element => {
  element.addEventListener('mousedown', () => {
    element.classList.add('active');
    if (element.classList[1] === 'alt' ||
      element.classList[1] === 'ctrl' ||
      element.classList[1] === 'win') {
      textArea.value += '';
    } else if (element.classList[1] === 'capslock') {
      textArea.value += '';
      pressCapsLock();
    } else if (element.classList[1] === 'tab') {
      textArea.value += '  ';
    } else if (element.classList[1] === 'enter') {
      textArea.value += '\n';
    } else if (element.classList[1] === 'del') {
      textArea.value = '';
    } else if (element.classList[1] === 'backspace') {
      textArea.value = textArea.value.slice(0, -1);
    } else if (element.classList[1] === 'shift') {
      pressCapsLock();
    } else {
      textArea.value += activeLetter(element, 'low').textContent;
    }
  });
  element.addEventListener('mouseup', () => {
    if (element.classList[1] === 'shift') {
      element.classList.remove('active');
      pressCapsLock();
    } else {
      element.classList.remove('active');
    }
  });
});

window.addEventListener('keydown', event => {
  textArea.focus();
  if (event.code) {
    const button = document.getElementsByClassName(event.code);
    button[0].parentElement.classList.add('active');
  }

  if (event.code === 'CapsLock') {
    pressCapsLock();
  }

  if (event.altKey && event.shiftKey) {
    for (let i = 0; i < key.length; i++) {
      key[i].firstChild.classList.toggle('en');
      key[i].firstChild.classList.toggle('ru');
      key[i].lastChild.classList.toggle('ru');
      key[i].lastChild.classList.toggle('en');
    }
  }
});

window.addEventListener('keyup', (event) => {
  if (event.code) {
    const button = document.getElementsByClassName(event.code);
    button[0].parentElement.classList.remove('active');
  }
});