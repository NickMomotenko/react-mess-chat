import React from "react";

import "./Button.scss";

import optionSvgIcon from '../../assets/option-b.svg';

const Button = ({ title, otherStyle, optionStyle , fun }) => {
  if (otherStyle) {
    return (
      <button className="button button-reg" onClick={fun}>
        {title}
      </button>
    );
  }

  if (optionStyle) {
    return <button className="button button-option" onClick={fun}>
        <img src={optionSvgIcon} alt="Option Button"/>
    </button>;
  }

  return (
    <button className="button" onClick={fun}>
      {title}
    </button>
  );
};

export default Button;
