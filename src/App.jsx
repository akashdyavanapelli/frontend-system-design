import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification/Notification";
import useNotifications from "./hooks/useNotifications";

function App() {
  const [count, setCount] = useState(0);
  const { NotificationComponent, triggerNotification } =
    useNotifications("top-right");

  return (
    <>
      <h1>I am the Best Full Stack Developer</h1>
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "File Sent Successfully",
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>

      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "File Sent Failed",
            duration: 3000,
          })
        }
      >
        Trigger Error
      </button>
      {NotificationComponent}
    </>
  );
}

export default App;
