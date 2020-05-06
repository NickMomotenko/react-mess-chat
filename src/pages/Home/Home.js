import React, { useState, useEffect, useRef } from "react";

import "./Home.scss";

import classNames from "classnames";

import Message from "../../components/Message/Message";
import DialogItem from "../../components/DialogItem/DialogItem";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ChatInputControls from "../../components/ChatInputControls/ChatInputControls";
import OptionsListForProfile from "../../components/OptionsListForProfile/OptionsListForProfile";
import EmptyData from "../../components/EmptyData/EmptyData";
import UserProfile from "../../components/UserProfile/UserProfile";

import dbMessages from "../../assets/db.json";

import optionsSvg from "../../assets/option-b.svg";
import muteDialogSvg from "../../assets/mute.svg";
import { message } from "antd";

const Home = () => {
  const [dialogs, setDialogs] = useState([
    {
      id: 1,
      user: {
        fullname: "Michael Sedoy",
        avatar:
          "https://sun9-15.userapi.com/impf/c850036/v850036072/252d0/RX2A4wF478Y.jpg?size=200x0&quality=90&sign=12ad500e553925b86ede3be79a6c76fb",
        isOnline: true,
      },
      message: {
        text: "Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻",
        isReaded: false,
        created_at: "13:32",
        unread_count: 3,
      },
      muted: false,
    },
    {
      id: 2,
      user: {
        fullname: "Nickolo Hit",
        avatar: null,
        isOnline: false,
      },
      message: {
        text: "Салам, Брут! Чё, как, уничтожил флот галлов 22? 🖐🏻",
        isReaded: false,
        created_at: "13:32",
        unread_count: 11,
      },
      muted: false,
    },
    {
      id: 3,
      user: {
        fullname: "Preston Herston",
        avatar: null,
        isOnline: false,
      },
      message: {
        text: "Салам, Брут! Чё, как, уничтожил флот галлов 22? 🖐🏻",
        isReaded: false,
        created_at: "13:32",
        unread_count: 11,
      },
      muted: false,
    },
    {
      id: 4,
      user: {
        fullname: "Gulp Ivanovich",
        avatar: null,
        isOnline: false,
      },
      message: {
        text: "Салам, Брут! Чё, как, уничтожил флот галлов 22? 🖐🏻",
        isReaded: false,
        created_at: "13:32",
        unread_count: 11,
      },
      muted: false,
    },
  ]);

  const [dataMessages, setDataMessages] = useState(dbMessages);
  const [activeDialog, setActiveDialog] = useState(dialogs[0]);

  const [activeDialogMessages, setActiveDialogMessages] = useState(
    dataMessages.filter((message) => message.dialogID == activeDialog.id)
  );

  const [searchInputValue, setSearchInputValue] = useState("");
  const [filtredItems, setFiltredItems] = useState(dialogs);

  const [userProfileIsActive, setUserProfileIsActive] = useState(false);

  const [buttonOnHover, setButtonOnHover] = useState(false);

  const chatMessagesRef = useRef(null);

  useEffect(() => {
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  });

  const onChangeInput = (value) => {
    setFiltredItems(
      dialogs.filter(
        (dialog) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setSearchInputValue(value);
  };

  const deleteDialog = (id) => {
    setDialogs(dialogs.filter((dialog) => dialog.id != id));
    setFiltredItems(filtredItems.filter((dialog) => dialog.id != id));
  };

  const clearDialogHistory = (id) => {};

  const disableDialogNotifications = (id) => {
    activeDialog.muted = !activeDialog.muted;
    setButtonOnHover(false);
  };

  const updateActiveDialogMessages = (dialog) => {
    setActiveDialogMessages(
      dataMessages.filter((message) => message.dialogID == dialog.id)
    );
    setActiveDialog(dialog);
  };

  const renderLastMessage = (id) => {
    const last = dataMessages.filter((message) => {
      if (message.dialogID == id) {
        return dataMessages[dataMessages.length - 1];
      }
    });

    if (last[last.length - 1]) {
      if (last[last.length - 1].isTyping) {
        return `печатает...`;
      }

      if (last[last.length - 1].text) {
        return last[last.length - 1].text;
      }

      if (last[last.length - 1].audio) {
        return `Аудиосообщение`;
      }

      if (last[last.length - 1].attacments) {
        return `Вложение`;
      }
    }
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home__col home__col--sidebar">
          <div className="home__content-bar">
            <div className="home__header-bar">
              <div className="home__header-bar-title">Список диалогов</div>
            </div>
            <div className="home__search-bar">
              <Input
                place="Поиск среди контактов"
                name="search-bar"
                searchDialogUser
                onChangeInput={onChangeInput}
                searchInputValue={searchInputValue}
              />
            </div>
          </div>
          <div className="home__sidebar">
            {filtredItems.length ? (
              filtredItems.map((item) => (
                <DialogItem
                  key={`dialog-${item.id}`}
                  dialog={item}
                  activeDialog={activeDialog}
                  renderLastMessage={renderLastMessage}
                  setActiveDialog={setActiveDialog}
                  updateActiveDialogMessages={updateActiveDialogMessages}
                />
              ))
            ) : (
              <EmptyData text="Ничего не найдено" />
            )}
          </div>
        </div>
        <div className="home__col home__col--chat">
          <div className="home__current-chat current-chat">
            <div className="current-chat__header">
              {activeDialog.muted && (
                <img
                  src={muteDialogSvg}
                  alt="Mute Dialog Icon"
                  className="current-chat__mute-icon"
                />
              )}
              <div className="current-chat__info">
                <div className="current-chat__username">
                  {activeDialog.user.fullname}
                </div>
                <div
                  className={classNames("current-chat__status", {
                    "current-chat__status--online":
                      activeDialog.user.isOnline && activeDialog.user.isOnline,
                  })}
                >
                  {activeDialog.user.isOnline ? "онлайн" : "офлайн"}
                </div>
              </div>
              <div className="current-chat__options">
                <img
                  src={optionsSvg}
                  alt="Options Button"
                  onMouseEnter={(e) => setButtonOnHover(true)}
                  onMouseLeave={(e) => setButtonOnHover(false)}
                />
                {buttonOnHover && (
                  <OptionsListForProfile
                    list={[
                      {
                        title: "Показать профиль",
                        func: (e) => {
                          setUserProfileIsActive(true);
                        },
                      },
                      {
                        title: "Удалить чат",
                        func: (e) => {
                          deleteDialog(activeDialog.id);
                          setActiveDialog(dialogs[0]);
                        },
                      },
                      {
                        title: "Очистить историю",
                        func: (e) => {
                          console.log("Очистить историю");
                        },
                      },
                      {
                        title: activeDialog.muted
                          ? "Включить уведомления"
                          : "Отключить уведомления",
                        func: (e) => {
                          disableDialogNotifications(activeDialog.id);
                        },
                      },
                    ]}
                    onMouseEnter={(e) => setButtonOnHover(true)}
                    onMouseLeave={(e) => setButtonOnHover(false)}
                    buttonOnHover={buttonOnHover}
                  />
                )}
              </div>
            </div>
            <div className="current-chat__messages" ref={chatMessagesRef}>
              {activeDialogMessages.length ? (
                activeDialogMessages.map((message) => (
                  <Message
                    key={`message-${message._id}`}
                    id={message._id}
                    avatar={message.user.avatar}
                    text={message.text}
                    date={message.created_at}
                    attacments={message.attacments && message.attacments}
                    audio={message.audio && message.audio}
                    isMe={message.isMe && message.isMe}
                    isReaded={message.isReaded && message.isReaded}
                    isTyping={message.isTyping && message.isTyping}
                    dataMessages={dataMessages}
                    setDataMessages={setDataMessages}
                  />
                ))
              ) : (
                <EmptyData text="Начните переписку с этим пользователем" />
              )}
            </div>
            <div className="current-chat__input">
              <ChatInputControls
                dataMessages={dataMessages}
                setDataMessages={setDataMessages}
              />
            </div>
          </div>
        </div>
        {userProfileIsActive && (
          <UserProfile
            userInfo={activeDialog}
            setUserProfileIsActive={setUserProfileIsActive}
            userProfileIsActive={userProfileIsActive}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
