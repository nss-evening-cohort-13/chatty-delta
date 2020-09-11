import userData from '../helpers/data/userData';

// displays the name in the choose character button;
const clicky = () => {
  $('.dropdown-menu button').click(function click() {
    $('#dropdown-button').text($(this).text());
  });
};

const dropDown = () => {
  const character = userData.getUsers();
  const domString = `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Character
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item" id="dropdown-select">${character[0].name}</button>
    <button class="dropdown-item" id="dropdown-select">${character[1].name}</button>
    <button class="dropdown-item" id="dropdown-select">${character[2].name}</button>
    <button class="dropdown-item" id="dropdown-select">${character[3].name}</button>
    <button class="dropdown-item" id="dropdown-select">${character[4].name}</button>
  </div>
</div>
    `;
  $('#user-select').html(domString);
  clicky();
};

export default { dropDown };
