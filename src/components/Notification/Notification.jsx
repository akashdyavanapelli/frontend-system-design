import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineCloseCircle,
  AiOutlineWarning,
  AiOutlineClose,
} from "react-icons/ai";
import "./Notification.css";

const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

const Notification = ({ type = "", message, onClose = () => {} }) => {
  return (
    <div className={`notification ${type}`}>
      {/* Icons */}
      {icons[type]}
      {/* Message */}
      {message}
      {/* close button */}
      <AiOutlineClose color="white" onClick={() => onClose()} />
    </div>
  );
};

export default Notification;
