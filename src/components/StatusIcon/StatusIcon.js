import React from "react";

import "./StatusIcon.scss";

const StatusIcon = ({ imgSrc }) => {
  return (
    <img src={imgSrc} alt="Status Icon" className="message__status-icon" />
  );
};

export default StatusIcon;
