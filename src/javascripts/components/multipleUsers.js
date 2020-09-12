import userData from '../helpers/data/userData';

// displays the name in the choose character button;
// const clicky = () => {
//   $('.dropdown-menu button').click(function click() {
//     $('#dropdown-button').text($(this).text());
//   });
// };

// const dropDown = () => {
//   const character = userData.getUsers();
//   const domString = `
//   <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Choose Character
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <input type="radio" class="dropdown-item" id="dropdown-select">${character[0].name}</input>
//     <input type="radio" class="dropdown-item" id="dropdown-select">${character[1].name}</input>
//     <input type="radio" class="dropdown-item" id="dropdown-select">${character[2].name}</input>
//     <input type="radio" class="dropdown-item" id="dropdown-select">${character[3].name}</input>
//     <input type="radio" class="dropdown-item" id="dropdown-select">${character[4].name}</input>
//   </div>
// </div>
//     `;
//   $('#user-select').html(domString);
//   // clicky();
// };

const dropDown = () => {
  const character = userData.getUsers();
  const domString = `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Character
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div>
      <input type="radio" id="dropdown-select" value="samwise" name="character">
      <label for="samwise">${character[0].name}</label>
    </div>
    <div>
      <input type="radio" id="dropdown-select" value="legolas" name="character">
      <label for="legolas">${character[1].name}</label>
    </div>
    <div>
      <input type="radio" id="dropdown-select" value="frodo" name="character">
      <label for="frodo">${character[2].name}</label>
    </div>
    <div>
      <input type="radio" id="dropdown-select" value="gandalf" name="character">
      <label for="gandalf">${character[3].name}</label>
    </div>
    <div>
      <input type="radio" id="dropdown-select" value="gollum" name="character">
      <label for="gollum">${character[4].name}</label>
    </div>
  </div>
</div>
    `;
  $('#user-select').html(domString);
  // clicky();
};

export default { dropDown };
