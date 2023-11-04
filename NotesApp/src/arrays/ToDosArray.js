import {generateUniqueToDosId} from './IdGenerator';
import {generateUniqueToDosListId} from './IdGenerator';

export const toDosArray = [
  {
    id: generateUniqueToDosId(),
    title: '',
    time: '',
    favourite: false,
    important: false,
    toDoLists: [{id: generateUniqueToDosListId(), list: '', checked: false}],
  },
];
