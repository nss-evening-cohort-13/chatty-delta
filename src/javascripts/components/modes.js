import messageData from '../helpers/data/messageData';

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
  <div class="clear-mode">
    <div class="item-three">
    <i class="fas fa-user-slash"></i></i> Clear Chat: 
      <span class="clear-change">CLEAR</span>
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

const clearChange = () => {
  $('.clear-change').click(() => {
    $('#load-messages').empty();
    messageData.getInitialMessages().length = 0;
  });
};

export default {
  themeDom, themeChange, fontChange, clearChange
};
