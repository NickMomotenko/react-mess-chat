import React, { useState, useEffect, useRef } from "react";

import "./OptionsListForProfile.scss";

import classNames from "classnames";

const OptionsListForProfile = ({
  list,
  buttonMessageOnHover,
  buttonOnHover,
  onMouseEnter,
  onMouseLeave,
}) => {
  const optionListRef = useRef(null);

  return (
    <ul
      className={classNames("option-list", {
        "option-list--message-on-hover": buttonMessageOnHover,
        "option-list--dialog-on-hover": buttonOnHover,
      })}
      ref={optionListRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {list &&
        list.map(({ title, func }) => (
          <li key={`item-${title}`} className="option-list__item">
            <a
              href="#"
              className="option-list__link"
              onClick={(e) => {
                e.preventDefault();
                func();
              }}
            >
              {title}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default OptionsListForProfile;
