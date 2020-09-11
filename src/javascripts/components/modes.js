const themeDom = () => {
  const domString = `
  <div class="mode">
    <div class="item-one">
      Dark Mode: 
      <span class="change">OFF</span>
    </div>
  </div>  
      `;
  $('.button-container').html(domString);
};

const themeChange = () => {
  $('.change').on('click', () => {
    if ($('body').hasClass('dark')) {
      $('body').removeClass('dark');
      $('.change').text('OFF');
    } else {
      $('body').addClass('dark');
      $('.change').text('ON');
    }
  });
};

export default { themeDom, themeChange };
