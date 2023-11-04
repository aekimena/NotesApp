import {generateUniqueNotesId} from './IdGenerator';

export const notesArray = [
  {
    id: generateUniqueNotesId(),
    title: '',
    description: '',
    time: '',
    favourite: false,
    important: false,
  },
];
