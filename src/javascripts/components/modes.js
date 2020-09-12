const themeDom = () => {
  const domString = `
  <div class="mode">
    <div class="item-one">
      <i class="fas fa-adjust"></i> Dark Mode: 
      <span class="change">ON</span>
    </div>
  </div>
  <div class="font-mode">
    <div class="item-two">
      <i class="fas fa-text-height"></i> Font Size: 
      <span class="font-change">LARGE</span>
    </div>
  </div>    
      `;
  $('.button-container').html(domString);
};

const themeChange = () => {
  $('.change').on('click', () => {
    if ($('body').hasClass('dark')) {
      $('body').removeClass('dark');
      $('.change').text('ON');
    } else {
      $('body').addClass('dark');
      $('.change').text('OFF');
    }
  });
};

const fontChange = () => {
  $('.font-change').on('click', () => {
    if ($('body').hasClass('larger')) {
      $('body').removeClass('larger');
      $('.font-change').text('LARGE');
    } else {
      $('body').addClass('larger');
      $('.font-change').text('SMALL');
    }
  });
};

export default { themeDom, themeChange, fontChange };
