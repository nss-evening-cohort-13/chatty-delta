const renderNavBar = () => {
  const domString = $('#navbarContainer').html(`
    <div class="fixed-top">
        <nav class="navbar">
            <a class="navbar-brand" href="#">
            <img src="./images/logo.jpg" width="90" height="90" class="d-inline-block align-top" alt="" loading="lazy">
          </a>
            <form class="form-inline">
                <input id="input-message" class="form-control mr-sm-2" type="text" placeholder="Enter message..." aria-label="Search">
                <button id="submit-message" class="btn btn-success my-2 my-sm-0" type="button">Enter Message</button>
                <div id = "error-message></div>
            </form>
        </nav>
    </div>
    `);

  return domString;
};

export default { renderNavBar };
