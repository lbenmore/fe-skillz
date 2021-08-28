import React from "react";
import SubNavItem from "./SubNavItem";

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
  }

  onHover (evt) {
    if (window.innerWidth < 1024) return;
    console.log(evt.type);
  }

  onClick (evt) {
    if (window.innerWidth >= 1024) return;
    console.log(evt.type);
  }
  
  render () {
    return (
      <li tabIndex={this.idx} onMouseOver={ this.onHover } onClick={ this.onClick }>
        <span>{ this.label }</span>
        { this.subitems && this.subitems.length 
          ? <ul>{  this.subitems.map((si, i) => ( 
              <SubNavItem data={ si } idx={ i } key={ i } /> 
            )) }</ul>
          : ''
        }
      </li>
    )
  }
}

export default NavItem;