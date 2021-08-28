import React from "react";

class SubNavItem extends React.Component {
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
      <li>{ this.label }</li>
    )
  }
}

export default SubNavItem;