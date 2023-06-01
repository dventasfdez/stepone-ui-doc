import { createSlice } from "@reduxjs/toolkit";
import { INotificationitem } from "../../components/shared/notifications/notifications-service";

export interface NotificationsState {
  notifications: INotificationitem[];
}
const initialState: NotificationsState = {
  notifications: [],
};
export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    addNotification: (state, action) => {
      const _newNotification: INotificationitem = action.payload;
      if (_newNotification) {
        let _notifications: INotificationitem[] = state.notifications;
        _newNotification.id = _newNotification.id ? _newNotification.id : Date.now().toString();
        if (_notifications) {
          _notifications.push(_newNotification);
        } else {
          _notifications = [_newNotification];
        }
        state.notifications = _notifications;
      }
    },
    removeNotification: (state, action) => {
      return { notifications: state.notifications.filter((notification) => notification.id !== action.payload) };
    },
  },
});

export const notifications = (state: NotificationsState) => state.notifications;
export const { addNotification, removeNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
