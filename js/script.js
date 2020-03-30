const body = document.querySelector('body');
const keyboardArrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '/', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctrl', 'Fn', 'Win', 'Alt', 'Space', 'Alt', 'Menu', 'Ctrl'];
const keyboardArrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Ctrl', 'Fn', 'Win', 'Alt', 'Space', 'Alt', 'Menu', 'Ctrl'];
const keyboardArrRuShift = ['Ё', '!', "''", '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Shift', 'Ctrl', 'Fn', 'Win', 'Alt', 'Space', 'Alt', 'Menu', 'Ctrl'];
const keyboardArrEngShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "''", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'Ctrl', 'Fn', 'Win', 'Alt', 'Space', 'Alt', 'Menu', 'Ctrl'];
let inputValue = '';
body.innerHTML = '';
let isEng = false;
let isCaps = false;
let isShift = false;


const wrapper = document.createElement('div');
wrapper.className = 'wrapper';


const textarea = document.createElement('textarea');
textarea.setAttribute('rows', '10');
textarea.className = 'input-text';

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';

body.appendChild(wrapper);
wrapper.appendChild(textarea);
wrapper.appendChild(keyboard);


let template = '';

function generateKey(arr) {
  const arrKey = arr;
  for (let i = 0; i < arrKey.length; i += 1) {
    if (i === 54) {
      template += '<div class="clearfix"></div>';
    }
    if (arrKey[i] === 'Del') {
      template += `<div class="key" id=Delete>${arrKey[i]}</div>`;
    } else if (arrKey[i] === 'Ctrl') {
      template += `<div class="key" id=Control>${arrKey[i]}</div>`;
    } else if (arrKey[i] === 'Alt') {
      template += `<div class="key" id=${arrKey[i]}>${arrKey[i]}</div>`;
    } else if (arrKey[i] === 'Win') {
      template += '<div class="key key--win" id=Meta></div>';
    } else if (arrKey[i] === 'Menu') {
      template += `<div class="key key--menu" id=${arrKey[i]}></div>`;
    } else if (arrKey[i] === 'Backspace') {
      template += `<div class="key key--big" id=${arrKey[i]}>${arrKey[i]}</div>`;
    } else if (arrKey[i] === 'Tab') {
      template += `<div class="key key--big" id=${arrKey[i]}>${arrKey[i]}</div>`;
    } else if (arrKey[i] === 'CapsLock') {
      template += `<div class="key key--big" id=${arrKey[i]}>${arrKey[i]}</div>`;
    } else if (arrKey[i] === 'Enter') {
      template += `<div class="key key--big" id=${arrKey[i]}>${arrKey[i]}</div>`;
      arrKey[i].textContent = 1;
    } else if (arrKey[i] === 'Shift') {
      template += `<div class="key key--big" id=${arrKey[i]}>${arrKey[i]}</div>`;
    } else if (arrKey[i] === 'Space') {
      template += `<div class="key key--space" id=Space>${arrKey[i]}</div>`;
    } else {
      template += `<div  class="key" id=${arrKey[i]}>${arrKey[i]}</div>`;
    }
  }
}


textarea.addEventListener('keypress', (e) => {
  e.preventDefault();
});


generateKey(keyboardArrRu);
keyboard.innerHTML = template;

document.addEventListener('keydown', (e) => {
  if (!isEng) {
    if (!isCaps) {
      if (e.code === 'CapsLock') {
        template = '';
        const capsRu = keyboardArrRu.map((el) => {
          if (el.length < 2) {
            return el.toUpperCase();
          }
          return el;
        });
        generateKey(capsRu);
        keyboard.innerHTML = template;
        isCaps = true;
      }
    } else if (e.code === 'CapsLock') {
      template = '';
      generateKey(keyboardArrRu);
      keyboard.innerHTML = template;
      isCaps = false;
    }

    if ((e.code === 'AltLeft' && e.shiftKey) || (e.altKey && e.code === 'ShiftLeft')) {
      template = '';
      generateKey(keyboardArrEng);
      document.querySelectorAll('.key').forEach((el) => {
        keyboard.removeChild(el);
      });
      keyboard.innerHTML = template;
      isEng = true;
    }


    if (!isShift) {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        template = '';
        generateKey(keyboardArrRuShift);
        keyboard.innerHTML = template;
        isShift = true;
      }
    }
  } else {
    if (!isCaps) {
      if (e.code === 'CapsLock') {
        template = '';
        const capsEng = keyboardArrEng.map((el) => {
          if (el.length < 2) {
            return el.toUpperCase();
          }
          return el;
        });
        generateKey(capsEng);
        keyboard.innerHTML = template;
        isCaps = true;
      }
    } else if (e.code === 'CapsLock') {
      template = '';
      generateKey(keyboardArrEng);
      keyboard.innerHTML = template;
      isCaps = false;
    }

    if ((e.code === 'AltLeft' && e.shiftKey) || (e.altKey && e.code === 'ShiftLeft')) {
      template = '';
      generateKey(keyboardArrRu);
      document.querySelectorAll('.key').forEach((el) => {
        keyboard.removeChild(el);
      });
      keyboard.innerHTML = template;
      isEng = false;
    }

    if (!isShift) {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        template = '';
        generateKey(keyboardArrEngShift);
        keyboard.innerHTML = template;
        isShift = true;
      }
    }
  }
});

document.addEventListener('keydown', (e) => {
  textarea.focus();
  document.querySelectorAll('.key').forEach((el) => {
    if (e.key === el.getAttribute('id')) {
      el.classList.add('key--active');
      if (el.textContent.length < 2) {
        inputValue += el.textContent;
        textarea.value = inputValue;
      }
      if (el.getAttribute('id') === 'Backspace') {
        inputValue = inputValue.slice(0, -1);
      }
    } else if (e.code === el.getAttribute('id')) {
      el.classList.add('key--active');
      inputValue += ' ';
    }
  });
});

keyboard.addEventListener('mousedown', (e) => {
  textarea.focus();
  document.querySelectorAll('.key').forEach((el) => {
    if (e.target.getAttribute('id') === el.getAttribute('id')) {
      el.classList.add('key--active');
      if (el.textContent.length < 2) {
        inputValue += el.textContent;
        textarea.value = inputValue;
      }
      if (el.getAttribute('id') === 'Backspace') {
        inputValue = inputValue.slice(0, -1);
        textarea.value = inputValue;
      }
    }
  });
  if (e.target.getAttribute('id') === 'Space') {
    e.target.classList.add('key--active');
    inputValue += ' ';
  } else if (!isEng) {
    if (!isCaps) {
      if (e.target.getAttribute('id') === 'CapsLock') {
        template = '';
        const capsRu = keyboardArrRu.map((el) => {
          if (el.length < 2) {
            return el.toUpperCase();
          }
          return el;
        });
        generateKey(capsRu);
        keyboard.innerHTML = template;
        isCaps = true;
      }
    } else if (e.target.getAttribute('id') === 'CapsLock') {
      template = '';
      generateKey(keyboardArrRu);
      keyboard.innerHTML = template;
      isCaps = false;
    }

    if ((e.code === 'AltLeft' && e.shiftKey) || (e.altKey && e.code === 'ShiftLeft')) {
      isEng = true;
    }
  } else if (!isCaps) {
    if (e.target.getAttribute('id') === 'CapsLock') {
      template = '';
      const capsEng = keyboardArrEng.map((el) => {
        if (el.length < 2) {
          return el.toUpperCase();
        }
        return el;
      });
      generateKey(capsEng);
      keyboard.innerHTML = template;
      isCaps = true;
    }
  } else if (e.target.getAttribute('id') === 'CapsLock') {
    template = '';
    generateKey(keyboardArrEng);
    keyboard.innerHTML = template;
    isCaps = false;
  }
});


document.addEventListener('keyup', (e) => {
  document.querySelectorAll('.key').forEach((el) => {
    if (e.key === el.getAttribute('id')) {
      el.classList.remove('key--active');
    } else if (e.code === el.getAttribute('id')) {
      el.classList.remove('key--active');
    }
  });
  if (!isEng) {
    if (isShift) {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        template = '';
        generateKey(keyboardArrRu);
        keyboard.innerHTML = template;
        isShift = false;
      }
    }
  } else if (isShift) {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      template = '';
      generateKey(keyboardArrEng);
      keyboard.innerHTML = template;
      isShift = false;
    }
  }
});

keyboard.addEventListener('mouseup', (e) => {
  document.querySelectorAll('.key').forEach((el) => {
    if (e.target.getAttribute('id') === el.getAttribute('id')) {
      el.classList.remove('key--active');
    }
  });
});
