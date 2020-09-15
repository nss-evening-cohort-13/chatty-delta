const initialMessages = [
  {
    id: 1,
    quote: 'My precious.',
    character: 'Gollum',
    time: 'September 14th 2020, 6:49:18 pm',
  },
  {
    id: 2,
    quote:
      'I would rather share one lifetime with you than face all the Ages of this world alone.',
    character: 'Arwen',
    time: 'September 14th 2020, 6:49:18 pm',
  },
  {
    id: 3,
    quote: 'Even the smallest person can chnage the course of the future.',
    character: 'Galadriel',
    time: 'September 14th 2020, 6:49:18 pm',
  },
  {
    id: 4,
    quote:
      'The board is set, the pieces are moving. We come to it at last, the great battle of our time.',
    character: 'Gandalf',
    time: 'September 14th 2020, 6:49:18 pm',
  },
  {
    id: 5,
    quote:
      'A day may come when the courage of men fails... but it is not THIS day.',
    character: 'Aragorn',
    time: 'September 14th 2020, 6:49:18 pm',
  },
];

const getInitialMessages = () => initialMessages;

const removeMessage = (id) => {
  initialMessages.splice(id - 1, 1);
};

export default { getInitialMessages, removeMessage };
