"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  ComplexDoubleSlider,
  ComplexSingleSlider,
  DisabledDoubleSlider,
  DisabledSingleSlider,
  SimpleDoubleSlider,
  SimpleSingleSlider,
  complex_double_slider,
  complex_single_slider,
  disabled_double_slider,
  disabled_single_slider,
  simple_double_slider,
  simple_single_slider,
  slider_props,
} from "./slider-examples";

const SliderGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Slider</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The Slider is a component used for picking a value between a bound.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={slider_props} title="Slider Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Single slider</NotificationHeader>
        <NotificationBody>Simple slider example with only label prop passed.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "simple_single_slider.tsx", code: simple_single_slider }]} componentExample={<SimpleSingleSlider />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Single slider with label, tooltip, min and max</NotificationHeader>
        <NotificationBody>Single slider example with with label, tooltip, min and max props passed.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "complex_single_slider.tsx", code: complex_single_slider }]} componentExample={<ComplexSingleSlider />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled single slider</NotificationHeader>
        <NotificationBody>Disabled single slider example by adding disabled prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "disabled_single_slider.tsx", code: disabled_single_slider }]} componentExample={<DisabledSingleSlider />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple Double Slider</NotificationHeader>
        <NotificationBody>Simple double slider example by adding double prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "simple_double_slider.tsx", code: simple_double_slider }]} componentExample={<SimpleDoubleSlider />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Double Slider with label, tooltip, min and max</NotificationHeader>
        <NotificationBody>Complex double slider example by adding label, tooltip, min and max props.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "complex_double_slider.tsx", code: complex_double_slider }]} componentExample={<ComplexDoubleSlider />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled double slider</NotificationHeader>
        <NotificationBody>Complex double slider example by adding disabled props.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "disabled_double_slider.tsx", code: disabled_double_slider }]} componentExample={<DisabledDoubleSlider />} />
    </>
  );
};

export default SliderGuideline;
