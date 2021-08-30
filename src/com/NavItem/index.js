import React from "react";
import SubNavItem from "../SubNavItem";
import './index.scss';

class NavItem extends React.Component {
  constructor (props) {
    super(props);
    for (const _ in props) {
      if (typeof props[_] === 'object' && !Array.isArray(props[_])) {
        for (const __ in props[_]) this[__] = props[_][__];
      } else {
        this[_] = props[_];
      }
    }

    this.hasSubNav = this.subitems && !!this.subitems.length
    this.state = { subnavActive: false };
  }

  onClick (evt) {
    if (window.innerWidth > 1024) return;
    if (this.hasSubNav) {
      this.setState(state => ({ subnavActive: !state.subnavActive }));
    }
  }
  
  render () {
    return (
      <li className="nav__item" tabIndex={this.idx} onClick={ this.onClick.bind(this) }>
        { this.hasSubNav 
          ?
          <React.Fragment>
            <span>{ this.label }</span>
            <ul className={ `nav__list--sub ${this.state.subnavActive ? 'expanded' : ''}` }>
              { this.subitems.map((si, i) => ( 
                <SubNavItem data={ si } idx={ i } key={ i } /> 
              )) }
            </ul>
          </React.Fragment> 
          :
          <a href={ `#${this.link}` }>{ this.label }</a>
        }
      </li>
    )
  }
}

export default NavItem;