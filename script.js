const TextPlace = document.createElement('textarea');
const keyboard = document.createElement('div');

const swither = ['off', 'on'];
const state = ['down', 'up'];
const KeyArray = ['ctrl', 'win', 'alt', 'space', 'alt', 'arrow', 'arrow', 'arrow', 'ctrl'];
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
  ['Digit-', '-', '_', '-', '_'],
  ['Equal=', '=', '+', '=', '+'],
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

function CreateTextArea() {
  TextPlace.id = 'result';
  TextPlace.rows = '6';
  TextPlace.cols = '60';
  document.body.append(TextPlace);
}

function CreateKeyboard() {
  keyboard.className = 'keyboard';
  document.body.append(keyboard);
}

function CreateButtons(firstButton, lastButton, count, array) {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);
  if (firstButton === '') {
    const first = document.createElement('div');
    first.className = 'key';

    //Function add span
    for (let k = 0; k < 2; k += 1) {
      const NameButton = document.createElement('span');
      NameButton.classList.add(array[0][0], swither[k]);
      for (let m = 1; m < 3; m += 1) {
        const caseName = document.createElement('span');
        caseName.classList.add('case', state[m - 1]);
        caseName.innerHTML = array[0][m];
        NameButton.append(caseName);
      }
      first.append(NameButton);
      first.append(NameButton);
    }
    //
    row.append(first);
  } else {
    const first = document.createElement('div');
    first.classList.add('key', firstButton);
    for (let k = 0; k < 2; k += 1) {
      const NameButton = document.createElement('span');
      NameButton.classList.add(array[0][0], swither[k]);
      for (let m = 1; m < 3; m += 1) {
        const caseName = document.createElement('span');
        caseName.classList.add('case', state[m - 1]);
        caseName.innerHTML = array[0][m];
        NameButton.append(caseName);
      }
      first.append(NameButton);
    }
    row.append(first);
  }
  for (let j = 0; j < count; j += 1) {
    const key = document.createElement('div');
    key.className = 'key';
    //
    for (let k = 0; k < 2; k += 1) {
      const NameButton = document.createElement('span');
      NameButton.classList.add(array[j + 1][0], swither[k]);
      for (let m = 1; m < 3; m += 1) {
        const caseName = document.createElement('span');
        caseName.classList.add('case', state[m - 1]);
        caseName.innerHTML = array[j + 1][m];
        NameButton.append(caseName);
      }
      key.append(NameButton);
    }
    row.append(key);
  }
  const last = document.createElement('div');
  last.classList.add('key', lastButton);
  row.append(last);
  //
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

CreateTextArea();
CreateKeyboard();
CreateButtons('', 'backspace', 12, keyRow1);
CreateButtons('tab', 'del', 13, keyRow2);
CreateButtons('capslock', 'enter', 11, keyRow3);
CreateButtons('shift', 'shift-right', 11, keyRow4);

for (let i = 0; i < 1; i += 1) {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);
  for (let j = 0; j < KeyArray.length; j += 1) {
    const key = document.createElement('div');
    key.classList.add('key', KeyArray[j]);
    row.append(key);
  }
}


window.addEventListener('keydown', (event) => {
  if (event.code) {
    const button = document.getElementsByClassName(event.code);
    button[0].parentElement.classList.add('active');
  }
  if (event.code === 'CapsLock') {
    const up = document.getElementsByClassName('up');
    const down = document.getElementsByClassName('down');
    if (up[0].style.display === 'block') {
      for (let i = 0; i < up.length; i += 1) {
        up[i].style.display = 'none';
        down[i].style.display = 'block';
      }
    } else {
      for (let i = 0; i < up.length; i += 1) {
        up[i].style.display = 'block';
        down[i].style.display = 'none';
      }
    }
  }
  if (event.code === 'Shift' && event.code === 'AltLeft') {
    alert('lol');
  }
});

window.addEventListener('keyup', (event) => {
  if (event.code) {
    const button = document.getElementsByClassName(event.code);
    button[0].parentElement.classList.remove('active');
  }
});
