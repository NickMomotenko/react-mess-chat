import React from "react";

import classNames from "classnames";

import "./UserProfile.scss";

import callIcon from "../../assets/call.png";
import crossIcon from "../../assets/cross.png";

import filesIcon from "../../assets/profile-f/edit.svg";
import photoIcon from "../../assets/profile-f/camera.svg";
import videoIcon from "../../assets/profile-f/film.svg";
import audioIcon from "../../assets/profile-f/microphone.svg";
import linksIcon from "../../assets/profile-f/link.svg";

const UserProfile = ({
  userInfo,
  userProfileIsActive,
  setUserProfileIsActive,
}) => {
  const { id, user, message } = userInfo;
  console.log(userInfo);

  return (
    <div
      className={classNames("user-profile", {
        "user-profile--active": userProfileIsActive,
      })}
    >
      <div className="user-profile__wrapp">
        <div className="user-profile__bar">
          <div className="user-profile__title">Информация</div>
          <div className="user-profile__button">
            <button className="user-profile__call">
              <img src={callIcon} alt="Call Icon" />
            </button>
            <button
              className="user-profile__cross"
              onClick={(e) => setUserProfileIsActive(false)}
            >
              <img src={crossIcon} alt="Cross Icon" />
            </button>
          </div>
        </div>
        <div className="user-profile__info">
          <div className="user-profile__col">
            <div className="user-profile__avatar">
              <img
                src={user.avatar}
                alt={`user-${id}`}
                className="user-profile__avatar-icon"
              />
            </div>
          </div>
          <div className="user-profile__col">
            <div className="user-profile__fullname">{user.fullname}</div>
            <div className="user-profile__last-visit">{user.isOnline ? 'онлайн' : 'был сегодня в 19:30'}</div>
          </div>
        </div>
        <div className="user-profile__all-info">
          <div className="user-profile__subtitle">Общие медиа</div>
          <ul className="user-profile__all-info-list">
            {[
              { title: "фотографии", count: 2, icon: photoIcon },
              { title: "видео", count: 2, icon: videoIcon },
              { title: "файлы", count: 2, icon: filesIcon },
              { title: "аудиофайлы", count: 2, icon: audioIcon },
              { title: "ссылки", count: 2, icon: linksIcon },
            ].map((item, index) => (
              <li key={`item-${index}`} className="user-profile__all-info-item">
                <a href="#" className="user-profile__all-info-link">
                  <img src={item.icon} alt={item.icon} />
                  <span>{`${item.count} ${item.title}`}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="user-profile__options">
          <ul className="user-profile__options-list">
            {[
              {
                title: "Удалить чат",
                func: (e) => {
                  console.log("Удалить чат");
                },
              },
              {
                title: "Очистить историю",
                func: (e) => {
                  console.log("Очистить историю");
                },
              },
              {
                title: "Отключить уведомления",
                func: (e) => {
                  console.log("Отключить уведомления");
                },
              },
            ].map((item, index) => (
              <li key={`item-${index}`} className="user-profile__options-item">
                <a href="#" className="user-profile__options-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
