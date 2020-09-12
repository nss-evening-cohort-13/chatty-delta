import '../styles/main.scss';
// import SeedData from './helpers/data/messageData';
import themes from './components/modes';
import container from './components/options-container';
import multipleUsers from './components/multipleUsers';
import displayMessages from './components/displayMessages';
import navigation from './components/navigation';

const init = () => {
  container.containerDom();
  themes.themeDom();
  themes.themeChange();
  multipleUsers.dropDown();
  displayMessages.displayDummy();
  navigation.renderNavBar();
};

init();
