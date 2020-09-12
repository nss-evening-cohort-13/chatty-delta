const renderNavBar = () => {
  const domString = $('#navbarContainer').html(`
    <div class="fixed-top">
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
            <img src="./images/logo.jpg" width="90" height="90" class="d-inline-block align-top" alt="" loading="lazy">
          </a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="text" placeholder="Enter message..." aria-label="Search">
                <button id="submit-message" class="btn btn-outline-success my-2 my-sm-0" type="submit">Enter Message</button>
                <button id="clear-message" class="btn btn-outline-danger my-2 my-sm-0" type="submit">Clear</button>
            </form>
        </nav>
    </div>
    `);

  return domString;
};

export default { renderNavBar };
