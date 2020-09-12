import '../styles/main.scss';
import themes from './components/modes';
import container from './components/options-container';
import multipleUsers from './components/multipleUsers';
import navigation from './components/navigation';

const init = () => {
  container.containerDom();
  themes.themeDom();
  themes.themeChange();
  multipleUsers.dropDown();
  navigation.renderNavBar();
};

init();
