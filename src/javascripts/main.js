import '../styles/main.scss';
// import SeedData from './helpers/data/messageData';
import themes from './components/modes';
import container from './components/options-container';

const init = () => {
  container.containerDom();
  themes.themeDom();
  themes.themeChange();
};

init();
