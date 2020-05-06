import React, { useState } from "react";

import "./Input.scss";

import classNames from "classnames";

import correct_flag from "../../assets/correct-flag.png";

const Input = ({
  place,
  name,
  searchDialogUser,
  chatInput,
  onChangeDataLogin,
  onChangeInput,
  searchInputValue
}) => {
  // const [value, setValue] = useState("");

  // if (chatInput) {
  //   return (
  //     <>
  //       <input
  //         type="text"
  //         className={classNames("input", {
  //           "input--chat": chatInput
  //         })}
  //         placeholder={place}
  //         name={name}
  //         value={value}
  //         onChange={e => {
  //           setValue(e.target.value);
  //         }}
  //       />
  //     </>
  //   );
  // }

  // if (searchDialogUser) {
  //   return (
  //     <>
  //       <input
  //         type="text"
  //         className={classNames("input", {
  //           "input--search-user": searchDialogUser
  //         })}
  //         placeholder={place}
  //         name={name}
  //         value={searchInputValue}
  //         onChange={e => {
  //           onChangeInput(e.target.value);
  //         }}
  //       />
  //     </>
  //   );
  // }

  return (
    <>
      {/* <input
        type="text"
        className="input"
        placeholder={place}
        name={name}
        value={value}
        onChange={e => {
          onChangeDataLogin(e.target.value, name);
          setValue(e.target.value);
        }}
      />
      {value.length > 3 && (
        <img
          src={correct_flag}
          alt="form correct flag"
          className="input-flag"
        />
      )} */}
      <>
        <input
          type="text"
          className={classNames("input", {
            "input--search-user": searchDialogUser
          })}
          autoComplete="off"
          placeholder={place}
          name={name}
          value={searchInputValue}
          onChange={e => {
            onChangeInput(e.target.value);
          }}
        />
      </>
    </>
  );
};

export default Input;
