import React from 'react';

import './InfoPanel.scss';

const InfoPanel = ({ title , subtitle }) => {
  return (
    <div className="info-panel">
      <div className="info-panel__title">{title}</div>
      <div className="info-panel__subtitle">{subtitle}</div>
    </div>
  );
}

export default InfoPanel;