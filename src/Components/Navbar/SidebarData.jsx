import NavbarLogo from './Logo/NavbarLogo.png';
import BlackHome from './Logo/BlackHome.png';
import BlackGame from './Logo/BlackGame.png';
import BlackCollection from './Logo/BlackCollection.png';
import BlackRules from './Logo/BlackRules.png';
import BlackNews from './Logo/BlackNews.png';

const SidebarData = [
  {
    path: '/',
    icon: { NavbarLogo },
    cName: 'nav-logo',
  },
  {
    title: 'Home',
    path: '/',
    icon: { BlackHome },
    cName: 'nav-text',
  },
  {
    title: 'New Game',
    path: '/newgame',
    icon: { BlackGame },
    cName: 'nav-text',
  },
  {
    title: 'Collection',
    path: '/collection',
    icon: { BlackCollection },
    cName: 'nav-text',
  },
  {
    title: 'Rules',
    path: '/rules',
    icon: { BlackRules },
    cName: 'nav-text',
  },
  {
    title: 'News',
    path: '/news',
    icon: { BlackNews },
    cName: 'nav-text',
  },
];

export default SidebarData;
