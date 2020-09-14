import messageData from '../helpers/data/messageData';

const messageDummy = (item) => {
  const domString = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <div class="dummy">
      <h5 class="card-character">${item.character}</h5>
      <p class="card-quote">${item.quote}</p>
      <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i> Delete Message</button>
      </div>
    </div>
  </div>
    `;
  return domString;
};

const displayDummy = () => {
  const message = messageData.getInitialMessages();
  message.slice(-20).forEach((item) => {
  // message.forEach((item) => {
    $('#load-messages').append(messageDummy(item));
  });
};

export default { displayDummy };
