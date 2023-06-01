import React, { ReactElement } from "react";
import ContentSwitcher, { ContentSwitcherItem } from "stepone-ui/contentSwitcher";

export const contentSwitcher_props = [
  { name: "defaultActiveItem", use: false, type: "string", definition: "Indicates the active tab when the component is rendered." },
  { name: "small", use: false, type: "boolean", definition: "Indicates the small size of the content-switcher component." },
  { name: "divider", use: false, type: "boolean", definition: "Add separator between content-switcher items." },
  { name: "className", use: false, type: "string", definition: "Add class to content-switcher component." },
  { name: "icon", use: false, type: "any", definition: "Add icon to content-switcher component." },
  { name: "badge", use: false, type: "number", definition: "Add badge to content-switcher component." },
  { name: "id", use: false, type: "string", definition: "Identifies the content-switcher item." },
  { name: "title", use: false, type: "string", definition: "Add title to content-switcher item." },
];

const data_mock = [
  {
    id: "item1",
    title: "I am title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 1",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
    disabled: true,
  },
  {
    id: "item2",
    title: "I am title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 2",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
  },
  {
    id: "item3",
    title: "I am title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 3",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
  },
];

// SIMPLE CONTENT SWITCHER EXAMPLE
export const SimpleContentSwitcher: React.FC<any> = (): ReactElement => {
  return (
    <ContentSwitcher defaultActiveItem="item2">
      {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title}>
          {item.content}
        </ContentSwitcherItem>
      ))}
    </ContentSwitcher>
  );
};

export const simple_content_switcher = `
import React, { ReactElement } from "react";
import ContentSwitcher, { ContentSwitcherItem } from "stepone-ui/contentSwitcher";
import { data_mock } from "./data-mock-file"

const SimpleContentSwitcher: React.FC<any> = (): ReactElement => {
  return (
    <ContentSwitcher defaultActiveItem="item2">
      {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title}>
          {item.content}
        </ContentSwitcherItem>
      ))}
    </ContentSwitcher>
  ) 
};

export default SimpleContentSwitcher
`;

export const data_mock_file = `
export const data_mock = [
    {
      id: "item1",
      title: "I am title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 1",
    },
    {
      id: "item2",
      title: "I am title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 2",
    },
    {
      id: "item3",
      title: "I am title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 3",
    },
  ];
`;

// SMALL CONTENT SWITCHER EXAMPLE
export const SmallContentSwitcher: React.FC<any> = (): ReactElement => {
  return (
    <ContentSwitcher defaultActiveItem="item2" small>
      {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title}>
          {item.content}
        </ContentSwitcherItem>
      ))}
    </ContentSwitcher>
  );
};

export const small_content_switcher = `
import React, { ReactElement } from "react";
import ContentSwitcher, { ContentSwitcherItem } from "stepone-ui/contentSwitcher";
import { data_mock } from "./data-mock-file"

const SmallContentSwitcher: React.FC<any> = (): ReactElement => {
return (
    <ContentSwitcher defaultActiveItem="item2" small>
    {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title}>
        {item.content}
        </ContentSwitcherItem>
    ))}
    </ContentSwitcher>
) 
};

export default SmallContentSwitcher
`;

// CONTENT SWITCHER WITH ICONS EXAMPLE
export const IconsContentSwitcher: React.FC<any> = (): ReactElement => {
  return (
    <ContentSwitcher defaultActiveItem="item2">
      {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title} icon={item.icon}>
          {item.content}
        </ContentSwitcherItem>
      ))}
    </ContentSwitcher>
  );
};

export const icons_content_switcher = `
import React, { ReactElement } from "react";
import ContentSwitcher, { ContentSwitcherItem } from "stepone-ui/contentSwitcher";
import { data_mock } from "./data-mock-file"

const IconsContentSwitcher: React.FC<any> = (): ReactElement => {
    return (
    <ContentSwitcher defaultActiveItem="item2">
        {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title} icon={item.icon}>
            {item.content}
        </ContentSwitcherItem>
        ))}
    </ContentSwitcher>
    ) 
};

export default IconsContentSwitcher
`;
export const icons_data_mock_file = `
export const data_mock = [
    {
      id: "item1",
      title: "I am title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 1",
      icon: <span className="material-icons">local_fire_department</span>,
    },
    {
      id: "item2",
      title: "I am title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 2",
      icon: <span className="material-icons">local_fire_department</span>,
    },
    {
      id: "item3",
      title: "I am title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 3",
      icon: <span className="material-icons">local_fire_department</span>,
    },
  ];
`;

// CONTENT SWITCHER WITH ICONS EXAMPLE
export const BadgesContentSwitcher: React.FC<any> = (): ReactElement => {
  return (
    <ContentSwitcher defaultActiveItem="item2">
      {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title} icon={item.icon} badge={item.badge}>
          {item.content}
        </ContentSwitcherItem>
      ))}
    </ContentSwitcher>
  );
};

export const badges_content_switcher = `
import React, { ReactElement } from "react";
import ContentSwitcher, { ContentSwitcherItem } from "stepone-ui/contentSwitcher";
import { data_mock } from "./data-mock-file"

const BadgesContentSwitcher: React.FC<any> = (): ReactElement => {
return (
    <ContentSwitcher defaultActiveItem="item2">
    {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title} icon={item.icon} badge={item.badge}>
        {item.content}
        </ContentSwitcherItem>
    ))}
    </ContentSwitcher>
) 
};

export default BadgesContentSwitcher
`;
export const badges_data_mock_file = `
export const data_mock =  [
{
    id: "item1",
    title: "I am title",
    content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 1",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
},
{
    id: "item2",
    title: "I am title",
    content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 2",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
},
{
    id: "item3",
    title: "I am title",
    content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 3",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
},
];
`;

// CONTENT SWITCHER WITH DIVIDER EXAMPLE
export const DividerContentSwitcher: React.FC<any> = (): ReactElement => {
  return (
    <ContentSwitcher divider defaultActiveItem="item2 ">
      {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title} icon={item.icon} badge={item.badge}>
          {item.content}
        </ContentSwitcherItem>
      ))}
    </ContentSwitcher>
  );
};

export const divider_content_switcher = `
import React, { ReactElement } from "react";
import ContentSwitcher, { ContentSwitcherItem } from "stepone-ui/contentSwitcher";
import { data_mock } from "./data-mock-file"

const DividerContentSwitcher: React.FC<any> = (): ReactElement => {
return (
    <ContentSwitcher divider defaultActiveItem="item2">
    {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title} icon={item.icon} badge={item.badge}>
        {item.content}
        </ContentSwitcherItem>
    ))}
    </ContentSwitcher>
) 
};

export default DividerContentSwitcher
`;

// DISABLED CONTENT SWITCHER EXAMPLE
export const DisabledContentSwitcher: React.FC<any> = (): ReactElement => {
  return (
    <ContentSwitcher divider disabled defaultActiveItem="item2 ">
      {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title} icon={item.icon} badge={item.badge} disabled={item.disabled}>
          {item.content}
        </ContentSwitcherItem>
      ))}
    </ContentSwitcher>
  );
};

export const disabled_content_switcher = `
import React, { ReactElement } from "react";
import ContentSwitcher, { ContentSwitcherItem } from "stepone-ui/contentSwitcher";
import { data_mock } from "./data-mock-file"

const DisabledContentSwitcher: React.FC<any> = (): ReactElement => {
    return (
    <ContentSwitcher divider disabled defaultActiveItem="item2">
        {data_mock.map((item) => (
        <ContentSwitcherItem key={item.id} id={item.id} title={item.title} icon={item.icon} badge={item.badge} disabled={item.disabled}>
            {item.content}
        </ContentSwitcherItem>
        ))}
    </ContentSwitcher>
    ) 
};

export default DisabledContentSwitcher
`;
export const disabled_data_mock_file = `
export const data_mock = [
{
    id: "item1",
    title: "I am title",
    content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 1",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
    disabled: true,
},
{
    id: "item2",
    title: "I am title",
    content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 2",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
},
{
    id: "item3",
    title: "I am title",
    content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt natus possimus labore similique consectetur vero odio nemo ipsam aperiam earum modi sit quia harum, vel aliquid commodi illo quaerat, pariatur ullam quam numquam illum quisquam porro. Amet cupiditate exercitationem fugiat harum recusandae et, neque sapiente voluptas ut at ex. 3",
    icon: <span className="material-icons">local_fire_department</span>,
    badge: 8,
},
];
 `;
