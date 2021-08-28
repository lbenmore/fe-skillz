import React from "react";

/* Not as complex; no need for React.Component */

export default function SubNavItem (props) {
  return (
    <li>{ props.data.label }</li>
  )
}