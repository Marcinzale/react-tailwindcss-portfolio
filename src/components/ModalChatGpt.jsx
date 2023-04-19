import React from "react";

const ModalChatGpt = ({visible, onClose}) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'modalContainer') onClose();
  }

  if (!visible) return null;

  return (
    <div id='modalContainer' onClick={handleOnClose} className="fixed z-50 bg-black inset-0 bg-opacity-70 backdrop-blur-md flex flex-col justify-center items-center">
      <div className="bg-white flex flex-col justify-center items-center p-4 rounded-md">
        <p>ModalChatGpt</p>
        <div>
          <img src={require("../assets/Android_logo.png")} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default ModalChatGpt;