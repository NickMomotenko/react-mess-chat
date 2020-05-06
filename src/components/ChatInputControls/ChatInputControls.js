import React, { useState } from "react";

import "./ChatInputControls.scss";

import Input from "../../components/Input/Input";

import smileSvg from "../../assets/chat-option/smile.svg";
import photoSvg from "../../assets/chat-option/photo.svg";
import microSvg from "../../assets/chat-option/micro.svg";
import sendSvg from "../../assets/chat-option/send.svg";

const ChatInputControls = ({ dataMessages, setDataMessages }) => {
  const [optionButton, setOptionButton] = useState([
    {
      name: "smile",
      icon: smileSvg
    },
    {
      name: "photo",
      icon: photoSvg
    },
    {
      name: "micro",
      icon: microSvg
    },
    {
      name: "send",
      icon: sendSvg
    }
  ]);

  let sendMessage = () => {
    let newArrau = [
      ...dataMessages,
      {
        _id: "141414",
        text: "Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻",
        created_at: "17.03.2020",
        user: {
          _id: "35ce83ca8dbf6c8e9d04dfe95",
          fullname: "Egor Chepyxa",
          avatar:
            "https://sun9-15.userapi.com/impf/c850036/v850036072/252d0/RX2A4wF478Y.jpg?size=200x0&quality=90&sign=12ad500e553925b86ede3be79a6c76fb"
        },
        dialog: "6e68d13b2678d793d340b5fb0c79297d"
      }
    ];
    setDataMessages(newArrau);
  };

  return (
    <>
      <Input place="Введите текст сообщения…" name="chat-input" chatInput />
      <div className="current-chat__button">
        {optionButton.map(item => (
          <button
            key={`item-${item.icon}`}
            className="chat-button"
            onClick={e => sendMessage()}
          >
            <img src={item.icon} alt={item.name} />
          </button>
        ))}
      </div>
    </>
  );
};

export default ChatInputControls;
