import userData from '../helpers/data/userData';

const dropDown = () => {
  const character = userData.getUsers();
  const domString = `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Character
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div>
      <input type="radio" id="dropdown-select" value="samwise" name="characters" checked>
      <label for="samwise">${character[0].name}</label>
    </div>
    <div>
      <input type="radio" id="dropdown-select" value="legolas" name="characters">
      <label for="legolas">${character[1].name}</label>
    </div>
    <div>
      <input type="radio" id="dropdown-select" value="frodo" name="characters">
      <label for="frodo">${character[2].name}</label>
    </div>
    <div>
      <input type="radio" id="dropdown-select" value="gandalf" name="characters">
      <label for="gandalf">${character[3].name}</label>
    </div>
    <div>
      <input type="radio" id="dropdown-select" value="gollum" name="characters">
      <label for="gollum">${character[4].name}</label>
    </div>
  </div>
</div>
    `;
  $('#user-select').html(domString);
};

export default { dropDown };
