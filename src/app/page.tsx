"use client";

import FormGuideline from "@/components/content/documentantion/forms/Forms";
import NotificationsContainer from "@/components/shared/notifications/notifications-container";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <NotificationsContainer />
        <FormGuideline />
      </Provider>
    </>
  );
}
