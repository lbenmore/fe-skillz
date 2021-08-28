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
  
  render () {
    return (
      <li tabIndex={this.idx}>
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