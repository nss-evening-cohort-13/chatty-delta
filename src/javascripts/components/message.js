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

// Delete message
const deleteMessage = () => {
  $('body').on('click', 'button', (e) => {
    const arr = e.target.id.split('-');
    if (arr[0] === 'delete') {
      const index = Data.getInitialMessages().findIndex(
        (message) => message.id === arr[1]
      );
      Data.removeMessage(index);
      $(`#card-${arr[1]}`).remove();
    }
  });
};

export default { addMessage, deleteMessage };
