import React, { ReactElement } from "react";
import { Provider, useSelector } from "react-redux";

import { INotificationitem } from "./notifications-service";
import NotfificationMessage from "./notification";

import { notifications } from "@/redux/slices/notificationsSlice";

const Notifications: React.FC<any> = (props: any): ReactElement => {
  const _notificationsState: any = useSelector(notifications);

  return (
    <div className={`notifications-container`}>
      {props.children}
      {_notificationsState &&
        _notificationsState.notifications &&
        _notificationsState.notifications.map((item: INotificationitem) => {
          return <NotfificationMessage type={item.type} id={item.id} key={item.id} timer={item.timer} richText={item.richText} content={item.content} />;
        })}
    </div>
  );
};

export default Notifications;
