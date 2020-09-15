import messageData from '../helpers/data/messageData';

const messageDummy = (item) => {
  const domString = `
    <div id="card-${item.id}" class="card msgBox" style="width: 25rem;">
    <div class="card-body">
    <div class="dummy">
      <h5 class="card-character">${item.character}</h5>
      <p class="card-quote">${item.quote}</p>
      <button id="delete-${item.id}" type="button" class="delete-btn"><i class="far fa-trash-alt"></i> Delete Message</button>
      <p class="timeStamped">${item.time}</p>
      </div>
    </div>
  </div>
    `;
  return domString;
};

const displayDummy = () => {
  const message = messageData.getInitialMessages();
  message.slice(-20).forEach((item) => {
    $('#load-messages').append(messageDummy(item));
  });
};

export default { displayDummy };
