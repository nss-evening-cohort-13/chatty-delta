import '../styles/main.scss';
import SeedData from './helpers/data/messageData';
import multipleUsers from './components/multipleUsers';

const init = () => {
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.log('YOU ARE UP AND RUNNING!');
  console.log(SeedData.getInitialMessages());
  multipleUsers.dropDown();
};

init();
