import Data from '../helpers/data/messageData';

// Add message
const addMessage = () => {
  $('#submit-message').on('click', () => {
    const newId = Data.getInitialMessages().length + 1;
    const userMessage = $('#input-message').val();
    console.log(`newId: ${newId}, userMessage: ${userMessage}`);
    Data.getInitialMessages().push({
      id: newId,
      quote: userMessage,
      // name: $('Gollem').html(),
      character: 'Gollum',
    });
    console.log(Data.getInitialMessages());
    // $('#input-message').reset();
  });
};

export default { addMessage };
