import React from "react";
import './index.scss';

/* Not as complex; no need for React.Component */

export default function SubNavItem (props) {
  return (
    <li className="nav__item--sub">{ props.data.label }</li>
  )
}