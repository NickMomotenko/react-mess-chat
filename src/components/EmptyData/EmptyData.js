import React from "react";

import "./EmptyData.scss";

import empty_data_icon_main from "../../assets/empty-data-main.png";
import empty_data from "../../assets/empty-data.png";

const EmptyData = ({ text }) => {
  return (
    <div className="empty-data">
      <div className="empty-data__icon">
        <img
          src={empty_data}
          alt="Data Icon"
          className="empty-data__icon-pic"
        />
      </div>
      <div className="empty-data__text">{text}</div>
    </div>
  );
};

export default EmptyData;
