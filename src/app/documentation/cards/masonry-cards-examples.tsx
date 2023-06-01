import React, { ReactElement } from "react";
import MasonryCard, { MasonryCardBody, MasonryCardHeader, MasonryCardImg, MasonryCardTop } from "stepone-ui/masonryCard";

const data_mock: any = {
  imgSrc: "https://i.pinimg.com/736x/ee/be/fb/eebefb37815a1346e8cb4f3db608e1b1.jpg",
  statusTag: "semantic",
  title: "This is a title",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea voluptates, facilis dolore dignissimos eum accusamus vitae accusantium dolores veritatis maiores deserunt unde natus similique omnis sit quaerat! At, asperiores.",
};

// VERTICAL MASONRY CARD EXAMPLE
export const VerticalMasonryCard: React.FC<any> = (): ReactElement => {
  return (
    <MasonryCard>
      <MasonryCardImg>
        <img src={data_mock.imgSrc} alt="img-background" />
      </MasonryCardImg>
      <MasonryCardTop>
        <div className="status-tag_success">{data_mock.statusTag}</div>
        <button className="button-card-icon">
          <span className="material-icons">more_vert</span>
        </button>
        <button className="button-card-icon">
          <span className="material-icons">favorite_border</span>
        </button>
      </MasonryCardTop>
      <MasonryCardHeader>
        <h4>{data_mock.title}</h4>
      </MasonryCardHeader>
      <MasonryCardBody>{data_mock.body}</MasonryCardBody>
    </MasonryCard>
  );
};

export const vertical_masonry_card = `
import React, { ReactElement } from "react";
import MasonryCard, { MasonryCardBody, MasonryCardHeader, MasonryCardImg, MasonryCardTop } from "stepone-ui/masonryCard";
import { data_mock } from "./data-mock-file"

const VerticalMasonryCard: React.FC<any> = (): ReactElement => {
  return (
    <MasonryCard>
    <MasonryCardImg>
      <img src={data_mock.imgSrc} alt="img-background" />
    </MasonryCardImg>
    <MasonryCardTop>
      <div className="status-tag_success">{data_mock.statusTag}</div>
      <button className="button-card-icon">
        <span className="material-icons">more_vert</span>
      </button>
      <button className="button-card-icon">
        <span className="material-icons">favorite_border</span>
      </button>
    </MasonryCardTop>
    <MasonryCardHeader>
      <h4>{data_mock.title}</h4>
    </MasonryCardHeader>
    <MasonryCardBody>{data_mock.body}</MasonryCardBody>
  </MasonryCard>
  );
};

export default VerticalMasonryCard
`;

export const masonry_data_mock_file = `
export const data_mock: any = {
  imgSrc: "https://i.pinimg.com/736x/ee/be/fb/eebefb37815a1346e8cb4f3db608e1b1.jpg",
  statusTag: "semantic",
  title: "This is a title",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea voluptates, facilis dolore dignissimos eum accusamus vitae accusantium dolores veritatis maiores deserunt unde natus similique omnis sit quaerat! At, asperiores.",
  };
};
`;

// HORIZONTAL MASONRY CARD EXAMPLE
export const HorizontalMasonryCard: React.FC<any> = (): ReactElement => {
  return (
    <MasonryCard horizontal>
      <MasonryCardImg>
        <img src={data_mock.imgSrc} alt="img-background" />
      </MasonryCardImg>
      <MasonryCardTop>
        <div className="status-tag_success">{data_mock.statusTag}</div>
        <button className="button-card-icon">
          <span className="material-icons">more_vert</span>
        </button>
        <button className="button-card-icon">
          <span className="material-icons">favorite_border</span>
        </button>
      </MasonryCardTop>
      <MasonryCardHeader>
        <h4>{data_mock.title}</h4>
      </MasonryCardHeader>
      <MasonryCardBody>{data_mock.body}</MasonryCardBody>
    </MasonryCard>
  );
};

export const horizontal_masonry_card = `
import React, { ReactElement } from "react";
import MasonryCard, { MasonryCardBody, MasonryCardHeader, MasonryCardImg, MasonryCardTop } from "stepone-ui/masonryCard";
import { data_mock } from "./data-mock-file"

const HorizontalMasonryCard: React.FC<any> = (): ReactElement => {
  return (
    <MasonryCard horizontal>
    <MasonryCardImg>
      <img src={data_mock.imgSrc} alt="img-background" />
    </MasonryCardImg>
    <MasonryCardTop>
      <div className="status-tag_success">{data_mock.statusTag}</div>
      <button className="button-card-icon">
        <span className="material-icons">more_vert</span>
      </button>
      <button className="button-card-icon">
        <span className="material-icons">favorite_border</span>
      </button>
    </MasonryCardTop>
    <MasonryCardHeader>
      <h4>{data_mock.title}</h4>
    </MasonryCardHeader>
    <MasonryCardBody>{data_mock.body}</MasonryCardBody>
  </MasonryCard>
  );
};

export default HorizontalMasonryCard
`;
