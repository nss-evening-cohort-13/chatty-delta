import messageData from '../helpers/data/messageData';

const messageDummy = (item) => {
  // const time = new Date();
  // const hours = time.getHours();
  // const minutes = time.getMinutes();
  // const date = time.getDate();
  // const month = time.getMonth() + 1;
  // const year = time.getFullYear();
  const domString = `
    <div id="card-${item.id}" class="card" style="width: 18rem;">
    <div class="card-body">
    <div class="dummy">
      <h5 class="card-character">${item.character}</h5>
      <p class="card-quote">${item.quote}</p>
      <button id="delete-${item.id}" type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i> Delete Message</button>
      </div>
    </div>
  </div>
    `;
  return domString;
};

const displayDummy = () => {
  const message = messageData.getInitialMessages();
  message.forEach((item) => {
    $('#load-messages').append(messageDummy(item));
  });
};

export default { displayDummy };
