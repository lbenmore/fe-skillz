import NavItem from '../NavItem';
import Logo from '../Logo';
import pages from '../../pages.js';
import './index.scss';

export default function Header () {
  const isMobile = window.innerWidth <= 1024;
  const width = isMobile ? '100px' : '120px';
  const height = '100%';

  return (
    <header>
      <Logo style={{ width, height }} />
      <ul className="header__list">{ pages.map((page, i) => (
        <NavItem idx={ i } data={ page } key={ i } />
      )) }</ul>
    </header>
  )
}