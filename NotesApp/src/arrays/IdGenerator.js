// import {notesArray} from './NotesArray';

import {toDosArray} from './ToDosArray';

function generateId() {
  let values = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }

  let selectedValues = values.slice(0, 15);
  let id = selectedValues.join('');

  return id;
}

export function generateUniqueNotesId(notesArray) {
  let idExists = notesArray.some(obj => obj.id === generateId);
  if (idExists) {
    let uniqueId;
    do {
      uniqueId = generateId();
    } while (notesArray.some(obj => obj.id === uniqueId));
    return uniqueId;
  }
  return generateId();
}

export function generateUniqueToDosId() {
  let idExists = toDosArray.some(obj => obj.id === generateId);
  if (idExists) {
    let uniqueId;
    do {
      uniqueId = generateId();
    } while (toDosArray.some(obj => obj.id === uniqueId));
    return uniqueId;
  }
  return generateId();
}

export function generateUniqueToDosListId(index) {
  let idExists = toDosArray[index].toDoLists.some(obj => obj.id === generateId);
  if (idExists) {
    let uniqueId;
    do {
      uniqueId = generateId();
    } while (notesArray.some(obj => obj.id === uniqueId));
    return uniqueId;
  }
  return generateId();
}
