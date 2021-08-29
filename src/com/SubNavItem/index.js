import React from "react";
import './index.scss';

/* Not as complex; no need for React.Component */

export default function SubNavItem (props) {
  return (
    <li className="nav__item--sub"><a href={`#/${props.data.link}`}>{ props.data.label }</a></li>
  )
}