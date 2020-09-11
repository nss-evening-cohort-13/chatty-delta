import '../styles/main.scss';
// import SeedData from './helpers/data/messageData';
import themes from './components/modes';
import container from './components/options-container';
import multipleUsers from './components/multipleUsers';
import navigation from './components/navigation';

const init = () => {
  console.warn(SeedData.getInitialMessages());
  container.containerDom();
  themes.themeDom();
  themes.themeChange();
  multipleUsers.dropDown();
  navigation.renderNavBar();
  navigation.initalButtonClick();
};

init();
