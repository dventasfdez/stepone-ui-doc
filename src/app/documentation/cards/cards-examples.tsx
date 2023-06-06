import React, { ReactElement } from "react";
import Card, { CardBody, CardFloatButtons, CardFooter, CardHeader, CardImg, CardTop } from "stepone-ui/card";

export const card_props = [
  { name: "id", use: false, type: "string", link: true, definition: "Identifies the card item" },
  { name: "horizontal", use: false, type: "boolean", link: true, definition: "Add horizontal card" },
  { name: "className", use: false, type: "string", definition: "Add diffrents classes to the card" },
  { name: "onClick", use: false, type: "Function", definition: "Allows to specify a function to be called when the card is clicked" },
  { name: "children", use: false, type: "any", definition: "Allows to pass child components or elements to the card component" },
];

const data_mock: any = {
  imgSrc: "https://img.freepik.com/fotos-premium/edificios-modernos-torre-o-rascacielos-distrito-financiero-nubes-dia-soleado-chicago-ee-uu_43552-32.jpg?w=2000",
  statusTag: "semantic",
  date: "12 Apr 2023",
  avatarSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=400&h=400&q=80",
  title: "This is a title",
  subtitle: "And this is a subtitle",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus illum nam est necessitatibus voluptatibus quam quae iusto ea consequuntur dolores saepe rem porro quasi, quis optio dolor consequatur perferendis voluptates temporibus corrupti veritatis error ipsa. Perspiciatis et voluptate totam magni vel magnam debitis est rem quisquam, ipsum, placeat culpa?",
  email: "stepone@stepone.com",
  phone: "000 000 000",
  linkedin: "https://www.linkedin.com/",
  gmail: "https://www.gmail.com/",
  cv: "https://www.example.com/cv",
  period: "08:30 / 18:30",
  link: "https://www.example.com/",
  buttonText: "My button text",
};

// VERTICAL CARD EXAMPLE
export const VerticalCard: React.FC<any> = (): ReactElement => {
  return (
    <Card id="Vertical card">
      <CardImg id="img-top">
        <img src={data_mock.imgSrc} alt="img-top" />
      </CardImg>
      <CardFloatButtons id="card float buttons">
        <button className="button-card-icon">
          <span className="material-icons">more_vert</span>
        </button>
      </CardFloatButtons>
      <CardTop id="card top">
        <div className="status-tag_success">{data_mock.statusTag}</div>
        <span className="caption">{data_mock.date}</span>
      </CardTop>
      <CardHeader id="card header">
        <img alt="avatar image" className="avatar_big" id="avatar image" src={data_mock.avatarSrc} />
        <h4>{data_mock.title}</h4>
        <span className="subtitle">{data_mock.subtitle}</span>
      </CardHeader>
      <CardBody id="card body">
        <span>{data_mock.description}</span>
        <ul className="list-icon_small">
          <li className="item-double">
            <span className="material-icons icon-order">alternate_email</span>
            Email <span>{data_mock.email}</span>
          </li>
          <li className="item-double">
            <span className="material-icons icon-order">phone</span>
            Phone <span>{data_mock.phone}</span>
          </li>
          <li className="item-double">
            <span className="material-icons icon-order">link</span>
            Links
            <span>
              <a className="small" href={data_mock.linkedin}>
                Linkedin
              </a>
              <a className="small" href={data_mock.gmail}>
                Gmail
              </a>
              <a className="small" href={data_mock.cv}>
                CV
              </a>
            </span>
          </li>
          <li className="item-double">
            <span className="material-icons icon-order">schedule</span>
            Period <span>{data_mock.period}</span>
          </li>
        </ul>
      </CardBody>
      <CardFooter id="card footer">
        <a href={data_mock.link}>link</a>
        <button>{data_mock.buttonText}</button>
      </CardFooter>
    </Card>
  );
};

export const data_mock_file = `
export const data_mock: any = {
    imgSrc: "https://img.freepik.com/fotos-premium/edificios-modernos-torre-o-rascacielos-distrito-financiero-nubes-dia-soleado-chicago-ee-uu_43552-32.jpg?w=2000",
    statusTag: "semantic",
    date: "12 Apr 2023",
    avatarSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=400&h=400&q=80",
    title: "This is a title",
    subtitle: "And this is a subtitle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus illum nam est necessitatibus voluptatibus quam quae iusto ea consequuntur dolores saepe rem porro quasi, quis optio dolor consequatur perferendis voluptates temporibus corrupti veritatis error ipsa. Perspiciatis et voluptate totam magni vel magnam debitis est rem quisquam, ipsum, placeat culpa?",
    email: "stepone@stepone.com",
    phone: "000 000 000",
    linkedin: "https://www.linkedin.com/",
    gmail: "https://www.gmail.com/",
    cv: "https://www.example.com/cv",
    period: "08:30 / 18:30",
    link: "https://www.example.com/",
    buttonText: "My button text",
  };
`;
export const vertical_card = `
import React, { ReactElement } from "react";
import Card, { CardBody, CardFloatButtons, CardFooter, CardHeader, CardImg, CardTop } from "stepone-ui/card";
import { data_mock } from "./data-mock-file"

const VerticalCard: React.FC<any> = (): ReactElement => {
  return (
    <Card id="Vertical card">
    <CardImg id="img-top">
      <img src={data_mock.imgSrc} alt="img-top" />
    </CardImg>
    <CardFloatButtons id="card float buttons">
      <button className="button-card-icon">
        <span className="material-icons">more_vert</span>
      </button>
    </CardFloatButtons>
    <CardTop id="card top">
      <div className="status-tag_success">{data_mock.statusTag}</div>
      <span className="caption">{data_mock.date}</span>
    </CardTop>
    <CardHeader id="card header">
      <img alt="avatar image" className="avatar_big" id="avatar image" src={data_mock.avatarSrc} />
      <h4>{data_mock.title}</h4>
      <span className="subtitle">{data_mock.subtitle}</span>
    </CardHeader>
    <CardBody id="card body">
      <span>{data_mock.description}</span>
      <ul className="list-icon_small">
        <li className="item-double">
          <span className="material-icons icon-order">alternate_email</span>
          Email <span>{data_mock.email}</span>
        </li>
        <li className="item-double">
          <span className="material-icons icon-order">phone</span>
          Phone <span>{data_mock.phone}</span>
        </li>
        <li className="item-double">
          <span className="material-icons icon-order">link</span>
          Links
          <span>
            <a className="small" href={data_mock.linkedin}>
              Linkedin
            </a>{" "}
            |{" "}
            <a className="small" href={data_mock.gmail}>
              Gmail
            </a>{" "}
            |{" "}
            <a className="small" href={data_mock.cv}>
              CV
            </a>
          </span>
        </li>
        <li className="item-double">
          <span className="material-icons icon-order">schedule</span>
          Period <span>{data_mock.period}</span>
        </li>
      </ul>
    </CardBody>
    <CardFooter id="card footer">
      <a href={data_mock.link}>link</a>
      <button>{data_mock.buttonText}</button>
    </CardFooter>
  </Card>
  );
};

export default VerticalCard
`;

// HORIZONTAL CARD EXAMPLE
export const HorizontalCard: React.FC<any> = (): ReactElement => {
  return (
    <Card id="Vertical card" horizontal>
      <CardImg id="img-top">
        <img src={data_mock.imgSrc} alt="img-top" />
      </CardImg>
      <CardFloatButtons id="card float buttons">
        <button className="button-card-icon">
          <span className="material-icons">more_vert</span>
        </button>
      </CardFloatButtons>
      <CardTop id="card top">
        <div className="status-tag_success">{data_mock.statusTag}</div>
        <span className="caption">{data_mock.date}</span>
      </CardTop>
      <CardHeader id="card header">
        <img alt="avatar image" className="avatar_big" id="avatar image" src={data_mock.avatarSrc} />
        <h4>{data_mock.title}</h4>
        <span className="subtitle">{data_mock.subtitle}</span>
      </CardHeader>
      <CardBody id="card body">
        <span>{data_mock.description}</span>
        <ul className="list-icon_small">
          <li className="item-double">
            <span className="material-icons icon-order">alternate_email</span>
            Email <span>{data_mock.email}</span>
          </li>
          <li className="item-double">
            <span className="material-icons icon-order">phone</span>
            Phone <span>{data_mock.phone}</span>
          </li>
          <li className="item-double">
            <span className="material-icons icon-order">link</span>
            Links
            <span>
              <a className="small" href={data_mock.linkedin}>
                Linkedin
              </a>{" "}
              |{" "}
              <a className="small" href={data_mock.gmail}>
                Gmail
              </a>{" "}
              |{" "}
              <a className="small" href={data_mock.cv}>
                CV
              </a>
            </span>
          </li>
          <li className="item-double">
            <span className="material-icons icon-order">schedule</span>
            Period <span>{data_mock.period}</span>
          </li>
        </ul>
      </CardBody>
      <CardFooter id="card footer">
        <a href={data_mock.link}>link</a>
        <button>{data_mock.buttonText}</button>
      </CardFooter>
    </Card>
  );
};

export const horizontal_card = `
import React, { ReactElement } from "react";
import Card, { CardBody, CardFloatButtons, CardFooter, CardHeader, CardImg, CardTop } from "stepone-ui/card";
import { data_mock } from "./data-mock-file"

const HorizontalCard: React.FC<any> = (): ReactElement => {
  return (
    <Card id="Vertical card">
    <CardImg id="img-top">
      <img src={data_mock.imgSrc} alt="img-top" />
    </CardImg>
    <CardFloatButtons id="card float buttons">
      <button className="button-card-icon">
        <span className="material-icons">more_vert</span>
      </button>
    </CardFloatButtons>
    <CardTop id="card top">
      <div className="status-tag_success">{data_mock.statusTag}</div>
      <span className="caption">{data_mock.date}</span>
    </CardTop>
    <CardHeader id="card header">
      <img alt="avatar image" className="avatar_big" id="avatar image" src={data_mock.avatarSrc} />
      <h4>{data_mock.title}</h4>
      <span className="subtitle">{data_mock.subtitle}</span>
    </CardHeader>
    <CardBody id="card body">
      <span>{data_mock.description}</span>
      <ul className="list-icon_small">
        <li className="item-double">
          <span className="material-icons icon-order">alternate_email</span>
          Email <span>{data_mock.email}</span>
        </li>
        <li className="item-double">
          <span className="material-icons icon-order">phone</span>
          Phone <span>{data_mock.phone}</span>
        </li>
        <li className="item-double">
          <span className="material-icons icon-order">link</span>
          Links
          <span>
            <a className="small" href={data_mock.linkedin}>
              Linkedin
            </a>
            <a className="small" href={data_mock.gmail}>
              Gmail
            </a>
            <a className="small" href={data_mock.cv}>
              CV
            </a>
          </span>
        </li>
        <li className="item-double">
          <span className="material-icons icon-order">schedule</span>
          Period <span>{data_mock.period}</span>
        </li>
      </ul>
    </CardBody>
    <CardFooter id="card footer">
      <a href={data_mock.link}>link</a>
      <button>{data_mock.buttonText}</button>
    </CardFooter>
  </Card>
  );
};

export default HorizontalCard
`;
