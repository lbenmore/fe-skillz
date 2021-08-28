import React from 'react';import Hamburger from '../Hamburger';
import Logo from '../Logo';
import NavItem from '../NavItem';
import pages from '../../pages.js';
import './index.scss';

class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = { menuActive: false };

    const isMobile = window.innerWidth <= 1024;
    const width = isMobile ? '100px' : '120px';
    const height = '100%';

    this.logoStyle = { width, height };
  }

  toggleMenu (evt) {
    evt.currentTarget.classList.toggle('active');
    this.setState((state) => ({ menuActive: !state.menuActive }))
  }

  render () {
    return (
      <header>
        <Logo style={ this.logoStyle } />
        <ul className={ `header__list ${this.state.menuActive ? 'active' : ''}` }>{ pages.map((page, i) => (
          <NavItem idx={ i } data={ page } key={ i } />
        )) }</ul>
        <Hamburger clickfn={ this.toggleMenu.bind(this) } active="0" />
      </header>
    ) 
  }
}

export default Header;