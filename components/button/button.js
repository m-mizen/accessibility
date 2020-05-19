import React from "react";

import { classNames } from "../../helpers/class-names";

export function Button(props) {
  // Classes key-value pair
  const classes = {
    button: true,
    "button--primary": props?.primary,
    "button--disabled": props?.disabled,
  };

  // Button type attribute
  const buttonType = props?.buttonType ? props.buttonType : "button";

  const handleClick = props?.onClick ? props.onClick : (_event) => null;

  return (
    <button
      className={classNames(classes)}
      onClick={(event) => handleClick(event)}
      type={buttonType}
      aria-disabled={props.disabled}
    >
      {props.children}
      <style jsx>{`
        button {
          display: block;
          padding: 0.5rem 1rem;
        }
      `}</style>
    </button>
  );
}
