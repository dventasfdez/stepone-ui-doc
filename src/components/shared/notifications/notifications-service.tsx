import React from "react";

import { addNotification as _addNotification, removeNotification as _removeNotification } from "@/redux/slices/notificationsSlice";
import Loader from "stepone-ui/loader";
import store from "@/redux/store";

export interface INotificationitem {
  type: INotificationType;
  content: JSX.Element | string;
  richText?: boolean;
  timer?: number;
  id?: string;
  [others: string]: any;
}

export type INotificationType = "success" | "error" | "info" | "warning" | "loading";

export const addNotification = (notObct: INotificationitem) => {
  if (store) {
    store.dispatch(_addNotification(notObct));
  }
};

export const removeNotification = (notId: string | undefined) => {
  if (store) {
    if (notId) {
      store.dispatch(_removeNotification(notId));
    }
  }
};

export const getIcon = (type: string) => {
  switch (type) {
    case "success":
      return (
        <span className="material-icons" style={{ color: "var(--full-palette-semantic-success-400" }}>
          check_circle
        </span>
      );
    case "error":
      return (
        <span className="material-icons" style={{ color: "var(--full-palette-semantic-error-400" }}>
          cancel
        </span>
      );
    case "warning":
      return (
        <span className="material-icons" style={{ color: "var(--full-palette-semantic-warning-400" }}>
          warning
        </span>
      );

    case "loading":
      return <Loader spinner />;

    case "info":
    default:
      return <span className="material-icons">info</span>;
  }
};
