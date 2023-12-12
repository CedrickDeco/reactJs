import React from 'react';
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  console.log(props);
  return (
    <div className="scroll-bottom">
      {
        props.gauche && (
          <NavLink to={props.gauche} className="left hover">
            <span>&#10092;</span>
          </NavLink>
        )
      }
      {
        props.droite && (
          <NavLink to={props.droite} className="right hover">
            <span>&#10093;</span>
          </NavLink>
        )
      }
      
    </div>
  );
};

export default Buttons;