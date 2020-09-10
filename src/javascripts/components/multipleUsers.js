import userData from '../helpers/data/userData';

const dropDown = () => {
  const character = userData.getUsers();
  const domString = `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Character
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdown-samwise">${character[0].name}</a>
    <a class="dropdown-item" id="dropdown-legolas">${character[1].name}</a>
    <a class="dropdown-item" id="dropdown-frodo">${character[2].name}</a>
    <a class="dropdown-item" id="dropdown-gandalf">${character[3].name}</a>
    <a class="dropdown-item" id="dropdown-gollum">${character[4].name}</a>
  </div>
</div>
    `;
  $('#user-select').html(domString);
};

export default { dropDown };
