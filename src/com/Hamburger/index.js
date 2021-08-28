import React from "react";
import "./index.scss";

class Hamburger extends React.Component {
  constructor (props) {
    super(props);
    this.active = !!Number(props.active);
    this.clickfn = props.clickfn;
  }

  render () {
    return (
      <div className={ `header__hamburger ${this.active ? 'active' : ''}` } onClick={ this.clickfn }>
        <span></span>
      </div>
    )
  }
}

export default Hamburger;