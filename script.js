const keyboard = document.createElement('div');
const swither = ['off', 'on'];
const state = ['down', 'up'];
const ClassArray = ['ctrl', 'win', 'alt', 'space', 'alt', 'arrow', 'arrow', 'arrow', 'ctrl'];

const keyRow1 = [
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
];

const keyRow2 = [
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
];

const keyRow3 = [
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
];

const keyRow4 = [
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
];

const keyRow5 = [
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', ' ', ' ', ' ', ' '],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', '◄', '◄', '◄', '◄'],
  ['ArrowDown', '▼', '▼', '▼', '▼'],
  ['ArrowRight', '►', '►', '►', '►'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
];

function CreateTextArea() {
  const TextPlace = document.createElement('textarea');
  TextPlace.id = 'result';
  TextPlace.rows = '6';
  TextPlace.cols = '60';
  document.body.append(TextPlace);
}

function CreateKeyboard() {
  keyboard.className = 'keyboard';
  document.body.append(keyboard);
}

function PressCapsLock() {
  const up = document.getElementsByClassName('case');
  for (let i = 0; i < up.length; i += 1) {
    up[i].classList.toggle('up');
    up[i].classList.toggle('down');
  }
}

function CreateButtons(firstButton, lastButton, count, array) {
  let position = 0;
  const CreateRow = document.createElement('div');
  CreateRow.className = 'row';
  keyboard.append(CreateRow);
  if (firstButton === '') {
    const first = document.createElement('div');
    first.className = 'key';
    for (let k = 0; k < 2; k += 1) {
      const NameButton = document.createElement('span');
      NameButton.classList.add(array[0][0], swither[k]);
      for (let m = 0; m < 2; m += 1) {
        position += 1;
        const caseName = document.createElement('span');
        caseName.classList.add('case', state[m]);
        caseName.innerHTML = array[0][position];
        NameButton.append(caseName);
      }
      first.append(NameButton);
    }
    CreateRow.append(first);
  } else {
    const first = document.createElement('div');
    first.classList.add('key', firstButton);
    for (let k = 0; k < 2; k += 1) {
      const NameButton = document.createElement('span');
      NameButton.classList.add(array[0][0], swither[k]);
      for (let m = 0; m < 2; m += 1) {
        position += 1;
        const caseName = document.createElement('span');
        caseName.classList.add('case', state[m]);
        caseName.innerHTML = array[0][position];
        NameButton.append(caseName);
      }
      first.append(NameButton);
    }
    CreateRow.append(first);
  }

  for (let j = 0; j < count; j += 1) {
    const CreateKey = document.createElement('div');
    CreateKey.className = 'key';
    position = 0;
    for (let k = 0; k < 2; k += 1) {
      const NameButton = document.createElement('span');
      NameButton.classList.add(array[j + 1][0], swither[k]);
      for (let m = 0; m < 2; m += 1) {
        position += 1;
        const caseName = document.createElement('span');
        caseName.classList.add('case', state[m]);
        caseName.innerHTML = array[j + 1][position];
        NameButton.append(caseName);
      }
      CreateKey.append(NameButton);
    }
    CreateRow.append(CreateKey);
  }

  const last = document.createElement('div');
  last.classList.add('key', lastButton);
  CreateRow.append(last);
  for (let k = 0; k < 2; k += 1) {
    const NameButton = document.createElement('span');
    NameButton.classList.add(array[array.length - 1][0], swither[k]);
    for (let m = 1; m < 3; m += 1) {
      const caseName = document.createElement('span');
      caseName.classList.add('case', state[m - 1]);
      caseName.innerHTML = array[array.length - 1][m];
      NameButton.append(caseName);
    }
    last.append(NameButton);
  }
}

function CreateControlButtons(array, keyRow) {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);
  for (let j = 0; j < array.length; j += 1) {
    const key = document.createElement('div');
    key.classList.add('key', array[j]);
    for (let k = 0; k < 2; k += 1) {
      const NameButton = document.createElement('span');
      NameButton.classList.add(keyRow[j][0], swither[k]);
      for (let m = 1; m < 3; m += 1) { // problem with English word
        const caseName = document.createElement('span');
        caseName.classList.add('case', state[m - 1]);
        caseName.innerHTML = keyRow[j][m];
        NameButton.append(caseName);
      }
      key.append(NameButton);
      row.append(key);
    }
  }
}

function ActiveLetter(key, consist) {
  const ActiveSpan = key.getElementsByClassName('on');
  const letter = ActiveSpan[0].getElementsByClassName(consist);

  return letter[0];
}

CreateTextArea();
CreateKeyboard();
CreateButtons('', 'backspace', 12, keyRow1);
CreateButtons('tab', 'del', 13, keyRow2);
CreateButtons('capslock', 'enter', 11, keyRow3);
CreateButtons('shift', 'shift-right', 11, keyRow4);
CreateControlButtons(ClassArray, keyRow5);

const TextArea = document.getElementById('result');
const key = Array.from(document.getElementsByClassName('key'));

key.forEach((element, index) => {
  element.addEventListener('mousedown', () => {
    key[index].classList.add('active');
    if (key[index].classList[1] === 'alt' || key[index].classList[1] === 'ctrl' || key[index].classList[1] === 'win') {
      TextArea.value += '';
    } else if (key[index].classList[1] === 'capslock') {
      TextArea.value += '';
      PressCapsLock();
    } else if (key[index].classList[1] === 'tab') {
      TextArea.value += '  ';
    } else if (key[index].classList[1] === 'enter') {
      TextArea.value += '\n';
    } else if (key[index].classList[1] === 'del') {
      TextArea.value = '';
    } else if (key[index].classList[1] === 'backspace') {
      TextArea.value = TextArea.value.slice(0, -1);
    } else if (key[index].classList[1] === 'shift') {
      PressCapsLock();
    } else { TextArea.value += ActiveLetter(key[index], 'down').textContent; }
  });
  element.addEventListener('mouseup', () => {
    if (key[index].classList[1] === 'shift') {
      key[index].classList.remove('active');
      PressCapsLock();
    } else {
      key[index].classList.remove('active');
    }
  });
});

window.addEventListener('keydown', (event) => {
  TextArea.focus();
  if (event.code) {
    const button = document.getElementsByClassName(event.code);
    button[0].parentElement.classList.add('active');
  }

  if (event.code === 'CapsLock') {
    PressCapsLock();
  }

  if (event.altKey && event.shiftKey) {
    for (let i = 0; i < key.length; i += 1) {
      key[i].firstChild.classList.toggle('on');
      key[i].firstChild.classList.toggle('off');
      key[i].lastChild.classList.toggle('off');
      key[i].lastChild.classList.toggle('on');
    }
  }
});

window.addEventListener('keyup', (event) => {
  if (event.code) {
    const button = document.getElementsByClassName(event.code);
    button[0].parentElement.classList.remove('active');
  }
});
