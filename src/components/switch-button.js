import React from 'react';

const SwitchButton = (props) => {

  return <button 
    onClick={props.onSwitchClick}
    className="switch-button">{props.currentWindow === 1 ? "View Markdown" : "Edit Markdown"}</button>;
}

export default SwitchButton;
