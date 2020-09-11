import '../styles/main.scss';
import SeedData from './helpers/data/messageData';
import multipleUsers from './components/multipleUsers';
import navigation from './components/navigation';

const init = () => {
  console.warn(SeedData.getInitialMessages());
  multipleUsers.dropDown();
  navigation.renderNavBar();
  navigation.initalButtonClick();
};

init();
