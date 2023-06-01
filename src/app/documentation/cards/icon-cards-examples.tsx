import React, { ReactElement } from "react";
import IconCard, { IconCardBody, IconCardFooter, IconCardHeader, IconCardIcon } from "stepone-ui/iconCard";

const data_mock: any = {
  icon: "collections",
  title: "Icon Card Title",
  body: "This is the body text of the Icon Card component.",
  link: "https://example.com",
};

// ICON CARD EXAMPLE
export const IconCards: React.FC<any> = (): ReactElement => {
  return (
    <IconCard className="m2">
      <IconCardIcon>
        <span className="material-icons">{data_mock.icon}</span>
      </IconCardIcon>
      <IconCardHeader>
        <h4>{data_mock.title}</h4>
      </IconCardHeader>
      <IconCardBody>{data_mock.body}</IconCardBody>
      <IconCardFooter>
        <a href={data_mock.link}>link</a>
      </IconCardFooter>
    </IconCard>
  );
};

export const icon_card = `
import React, { ReactElement } from "react";
import IconCard, { IconCardBody, IconCardFooter, IconCardHeader, IconCardIcon } from "stepone-ui/iconCard";
import { data_mock } from "./data-mock-file"

const IconCards: React.FC<any> = (): ReactElement => {
  return (
    <IconCard>
      <IconCardIcon>
        <span className="material-icons">{data_mock.icon}</span>
      </IconCardIcon>
      <IconCardHeader>
        <h4>{data_mock.title}</h4>
      </IconCardHeader>
      <IconCardBody>{data_mock.body}</IconCardBody>
      <IconCardFooter>
        <a href={data_mock.link}>link</a>
      </IconCardFooter>
  </IconCard>
  );
};

export default IconCards
`;

export const icon_data_mock_file = `
export const data_mock: any = {
  icon: "collections",
  title: "Icon Card Title",
  body: "This is the body text of the Icon Card component.",
  link: "https://example.com",
};
`;
