import '../styles/main.scss';
// import SeedData from './helpers/data/messageData';
import modes from './components/modes';
import container from './components/options-container';
import multipleUsers from './components/multipleUsers';
import displayMessages from './components/displayMessages';
import navigation from './components/navigation';
import Message from './components/message';

const init = () => {
  container.containerDom();
  modes.themeDom();
  modes.themeChange();
  modes.fontChange();
  multipleUsers.dropDown();
  displayMessages.displayDummy();
  navigation.renderNavBar();
  Message.addMessage();
  Message.deleteMessage();
};

init();
