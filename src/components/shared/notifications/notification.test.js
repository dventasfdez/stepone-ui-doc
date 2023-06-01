import React from "react";
import renderer from "react-test-renderer";
import NotificationsContainer from "./notifications-container";
import NotificationItem from "./notification";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

configure({ adapter: new Adapter() });
describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  test("Notification should render", () => {
    store = mockStore(initialState);
    const component = renderer.create(
      <Provider store={store}>
        <NotificationsContainer>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
        </NotificationsContainer>
      </Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("NotificationItem should render all types", () => {
    store = mockStore(initialState);
    const component = renderer.create(
      <Provider store={store}>
        <NotificationsContainer>
          <NotificationItem type="info"></NotificationItem>
          <NotificationItem type="info" eternal={true}></NotificationItem>
          <NotificationItem type="info" time={10}></NotificationItem>
          <NotificationItem type="warning"></NotificationItem>
          <NotificationItem type="default"></NotificationItem>
          <NotificationItem type="success"></NotificationItem>
          <NotificationItem type="error"></NotificationItem>
        </NotificationsContainer>
      </Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Notification item should render", () => {
    store = mockStore(initialState);
    const component = renderer.create(
      <Provider store={store}>
        <NotificationItem type="info"></NotificationItem>
      </Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test("Notification item should disappear after time", () => {
  //   jest.useFakeTimers();

  //   const wrapper = shallow(
  //     <NotificationsContainer>
  //       <NotificationItem timer={100} type="default"></NotificationItem>
  //       <NotificationItem timer={200} type="default"></NotificationItem>
  //     </NotificationsContainer>
  //   );

  //   wrapper.setProps({
  //     updateNotifications: () => {},
  //   });

  //   expect(wrapper.instance().counters[0].active).toBe(true);
  //   expect(wrapper.instance().counters[1].active).toBe(true);

  //   jest.advanceTimersByTime(1300);

  //   expect(wrapper.instance().counters[0].active).toBe(false);
  //   expect(wrapper.instance().counters[1].active).toBe(true);

  //   jest.advanceTimersByTime(1000);
  //   expect(wrapper.instance().counters.length).toBe(0);
  //   jest.clearAllTimers();
  //   jest.useRealTimers();
  // });

  // test("Notification item should close when clicked on x icon", () => {
  //   const wrapper = mount(
  //     <NotificationsContainer>
  //       <NotificationItem time={1000000} type="default"></NotificationItem>
  //     </NotificationsContainer>
  //   );

  //   wrapper.setProps({
  //     updateNotifications: () => {},
  //   });

  //   const instance = wrapper.instance();
  //   jest.spyOn(instance, "handleClose");

  //   expect(wrapper.find(".notifications-item-shown").length).toBe(1);

  //   wrapper.find(".notifications-close").simulate("click");

  //   setTimeout(() => {
  //     expect(instance.handleClose).toHaveBeenCalled();
  //     expect(wrapper.find(".notifications-item-shown").length).toBe(0);
  //   }, 1000);
  // });

  // test("Should return error if props are not correct", () => {
  //   console.error = jest.fn();
  //   console.error.mockClear();

  //   React.createElement(NotificationItem, { close: "close", type: "type" }, null);
  //   setTimeout(() => {
  //     expect(console.error).toHaveBeenCalledTimes(2);
  //   }, 1000);
  // });
});
