import React, { useState, useEffect } from "react";

import "./Message.scss";

import classNames from "classnames";

import AudioMessage from "../../components/AudioMessage/AudioMessage";
import StatusIcon from "../../components/StatusIcon/StatusIcon";
import OptionsListForProfile from "../../components/OptionsListForProfile/OptionsListForProfile";

import readedIcon from "../../assets/readed.png";
import noReadedIcon from "../../assets/no-readed.png";
import waveSvg from "../../assets/wave.svg";
import playSvg from "../../assets/play.svg";
import pauseSvg from "../../assets/pause.svg";
import optionsSvg from "../../assets/option-b.svg";

const Message = ({
  id,
  avatar,
  text,
  date,
  attacments,
  audio,
  isMe,
  isReaded,
  isTyping,

  dataMessages,
  setDataMessages,
}) => {
  const [buttonMessageOnHover, setButtonMessageOnHover] = useState(false);

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
        <img src={avatar} alt="User Avatar" className="message__avatar-icon" />
      );
    } else {
      return (
        <div
          className="message__avatar-icon dialog__avatar-icon--no-icon"
          style={{ backgroundColor: getRandomColor() }}
        >
          <span>{"fssafsa".charAt(0)}</span>
        </div>
      );
    }
  };

  const deleteMessage = (id) => {
    setDataMessages(dataMessages.filter((message) => message._id != id));
  };

  const copyMessageText = (text) => {
    if (text.length) {
      navigator.clipboard.writeText(text);
      setButtonMessageOnHover(false);
    }
  };

  const changeMessageText = (id, text) => {
    console.log(id, text);
  };

  return (
    <div
      className={classNames("message", {
        "message--me": isMe,
        "message--audio": audio,
        "message--typing": isTyping,
        "message--image": attacments,
      })}
    >
      <div className="message__avatar">{getUserAvatar(avatar)}</div>
      <div className="message__descr">
        <div className="message__descr-bubble">
          {text && <p>{text}</p>}
          {isMe &&
            (isReaded ? (
              <StatusIcon imgSrc={readedIcon} />
            ) : (
              <StatusIcon imgSrc={noReadedIcon} />
            ))}
          {isMe && (
            <div className="message__delete">
              <img
                src={optionsSvg}
                className="message__delete-btn"
                onClick={(e) => console.log("я тут")}
                onMouseEnter={(e) => setButtonMessageOnHover(true)}
                onMouseLeave={(e) => setButtonMessageOnHover(false)}
              />
            </div>
          )}
          {isMe && buttonMessageOnHover && (
            <OptionsListForProfile
              list={[
                {
                  title: "Удалить сообщение",
                  func: (e) => {
                    deleteMessage(id);
                  },
                },
                {
                  title: "Изменить сообщение",
                  func: (e) => {
                    changeMessageText(id, text);
                  },
                },
                {
                  title: "Копировать текст",
                  func: (e) => {
                    copyMessageText(text);
                  },
                },
              ]}
              onMouseEnter={(e) => setButtonMessageOnHover(true)}
              onMouseLeave={(e) => setButtonMessageOnHover(false)}
              buttonMessageOnHover={buttonMessageOnHover}
            />
          )}
          {isTyping && (
            <>
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            </>
          )}
          {audio && <AudioMessage audio={audio} />}
        </div>
        {attacments &&
          attacments.map((item, index) => (
            <div key={`item-${index}`} className="message__attachments">
              <img
                src={item}
                alt="Attachments Image"
                className="message__attachments-img"
              />
            </div>
          ))}
        {date && <div className="message__descr-time">{date}</div>}
      </div>
    </div>
  );
};

export default Message;
