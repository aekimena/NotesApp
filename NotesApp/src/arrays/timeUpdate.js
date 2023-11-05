// export let updatedTime = new Date();
const months = [
  {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  },
];

export const correctTime = updatedTime => {
  switch (true) {
    case updatedTime.getMinutes() < 10:
      return `${updatedTime.getHours()}:0${updatedTime.getMinutes()}, ${
        months[0][updatedTime.getMonth()]
      } ${updatedTime.getDate()}, ${updatedTime.getFullYear()}`;
    case updatedTime.getHours() < 10:
      return `0${updatedTime.getHours()}:${updatedTime.getMinutes()}, ${
        months[0][updatedTime.getMonth()]
      } ${updatedTime.getDate()}, ${updatedTime.getFullYear()}`;
    case updatedTime.getHours() < 10 && updatedTime.getMinutes() < 10:
      return `0${updatedTime.getHours()}:0${updatedTime.getMinutes()}, ${
        months[0][updatedTime.getMonth()]
      } ${updatedTime.getDate()}, ${updatedTime.getFullYear()}`;
    default:
      return `${updatedTime.getHours()}:${updatedTime.getMinutes()}, ${
        months[0][updatedTime.getMonth()]
      } ${updatedTime.getDate()}, ${updatedTime.getFullYear()}`;
  }
};
