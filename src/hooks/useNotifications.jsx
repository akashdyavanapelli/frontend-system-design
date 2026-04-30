import React from "react";
import { useState, useCallback } from "react";
import Notification from "./../components/Notification/Notification";

const useNotifications = (position = "top-right") => {
  const [notification, setNotification] = useState(null);

  let timer;

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    setNotification(notificationProps);
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
    console.log(timer);
  }, []);

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotifications;
