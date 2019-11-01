const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
const TextPlace = document.createElement('input');
TextPlace.type = 'textarea';

for (let i = 0; i < 6; i += 1) {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);
}
