import Data from '../helpers/data/messageData';
import Display from './displayMessages';

// Add message
const addMessage = () => {
  $('#submit-message').on('click', () => {
    const newId = Data.getInitialMessages().length + 1;
    const userMessage = $('#input-message').val();
    const userName = $('input:checked + label').text();
    Data.getInitialMessages().push({
      id: newId,
      quote: userMessage,
      character: userName,
    });
    $('#load-messages').html('');
    Display.displayDummy();
  });
};

export default { addMessage };
