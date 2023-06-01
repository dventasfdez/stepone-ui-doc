"use client";
import React, { ReactElement } from "react";
import store from "@/redux/store";
import Notifications from "./notifications";
import { Provider } from "react-redux";

const NotificationsContainer: React.FC<any> = (props: any): ReactElement => {
  return (
    <Provider store={store}>
      <Notifications />
    </Provider>
  );
};

export default NotificationsContainer;
