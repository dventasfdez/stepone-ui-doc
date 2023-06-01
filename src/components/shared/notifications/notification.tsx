import React, { ReactElement, useEffect, useState } from "react";
import { INotificationitem, getIcon, removeNotification } from "./notifications-service";

const Notification: React.FC<any> = (props: INotificationitem): ReactElement => {
  const { timer = 0, id, type, content, richText } = props;
  const [seconds, setSeconds] = useState(timer);
  const [cssClass, setCssClass] = useState("");

  useEffect(() => {
    if (timer !== 0) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(myInterval);
          closeNotification();
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  });

  const closeNotification = () => {
    setCssClass("hidden");
    removeNotification(id);
  };

  const types = { error: "error", success: "success", warning: "warning", loading: "info", info: "info" };

  let typeClass = type ? "_" + types[type] : "";

  return (
    <div className={`notification${typeClass} ${cssClass}`} data-testid="notification" style={{ minHeight: "56px" }}>
      <button type="button" className="notification-close-button" data-testid="notification-close-test" onClick={closeNotification}>
        <span className="material-icons">close</span>
      </button>
      <div className="notification-icon">{getIcon(type)}</div>
      <div className="notification-content" style={{ minHeight: "24px", display: "flex", alignItems: "center" }}>
        <div className="notification-header">{richText && richText === true ? <div dangerouslySetInnerHTML={{ __html: content as string }}></div> : content}</div>
      </div>
    </div>
  );
};

export default Notification;
