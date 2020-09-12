import '../styles/main.scss';
// import SeedData from './helpers/data/messageData';
import modes from './components/modes';
import container from './components/options-container';
import multipleUsers from './components/multipleUsers';
import navigation from './components/navigation';

const init = () => {
  container.containerDom();
  modes.themeDom();
  modes.themeChange();
  modes.fontChange();
  multipleUsers.dropDown();
  navigation.renderNavBar();
};

init();
