import React, { useState } from "react";

import classNames from "classnames";

import "./DialogItem.scss";

import muteDialogSvg from "../../assets/mute.svg";

const DialogItem = ({
  dialog,
  activeDialog,
  setActiveDialog,
  updateActiveDialogMessages,
  renderLastMessage,
}) => {
  let { user, message } = dialog;

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getUserAvatar = (avatar) => {
    if (avatar) {
      return (
        <img
          src={user.avatar}
          alt={`User Avatar ${user.fullname}`}
          className="dialog__avatar-icon"
        />
      );
    } else {
      return (
        <div
          className="dialog__avatar-icon dialog__avatar-icon--no-icon"
          style={{ backgroundColor: getRandomColor() }}
        >
          <span>{user.fullname.charAt(0)}</span>
        </div>
      );
    }
  };

  return (
    <>
      <div
        className={classNames("dialog", {
          "dialog--active": dialog.id === activeDialog.id,
        })}
        onClick={(e) => {
          updateActiveDialogMessages(dialog);
        }}
      >
        <div className="dialog__avatar">
          {getUserAvatar(user.avatar)}
          <span
            className="dialog__user-status"
            style={{ visibility: user.isOnline ? "visible" : "hidden" }}
          ></span>
        </div>
        <div className="dialog__info">
          <div className="dialog__info-row">
            <div className="dialog__info-fullname">{user.fullname}</div>
            {dialog.muted && <img src={muteDialogSvg} alt="Mute Dialog Icon" />}
            <div className="dialog__info-date">{message.created_at}</div>
          </div>
          <div className="dialog__info-row">
            <div className="dialog__info-text">{renderLastMessage(dialog.id)}</div>
            <div className="dialog__info-unread-count">
              <span>
                {message.unread_count > 9 ? "+9" : message.unread_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogItem;
