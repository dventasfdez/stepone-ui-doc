import React, { ReactElement } from "react";
import TeaserCard, { TeaserCardBody, TeaserCardFooter, TeaserCardHeader, TeaserCardImg, TeaserCardTop } from "stepone-ui/teaserCard";

const data_mock: any = {
  imgSrc: "https://img.freepik.com/fotos-premium/edificios-modernos-torre-o-rascacielos-distrito-financiero-nubes-dia-soleado-chicago-ee-uu_43552-32.jpg?w=2000",
  statusTag: "Semantic",
  date: "12 Apr 2023",
  title: "This is a title",
  subtitle: "And this is a subtitle",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias ipsa quis, eum officia aliquid eaque cum illum voluptates nobis libero deserunt labore voluptas adipisci minima vero voluptatem veritatis. Rerum?",
  buttonText: "Join our newsletter",
};

// TEASER CARD EXAMPLE
export const TeaserCards: React.FC<any> = (): ReactElement => {
  return (
    <TeaserCard>
      <TeaserCardImg>
        <img src={data_mock.imgSrc} alt="img-top" />
      </TeaserCardImg>
      <TeaserCardTop>
        <div className="status-tag">{data_mock.statusTag}</div>
        <span className="tag">{data_mock.date}</span>
      </TeaserCardTop>
      <TeaserCardHeader>
        <h4>{data_mock.title}</h4>
        <span className="subtitle">{data_mock.subtitle}</span>
      </TeaserCardHeader>
      <TeaserCardBody>{data_mock.description}</TeaserCardBody>
      <TeaserCardFooter>
        <button className="button_large">{data_mock.buttonText}</button>
      </TeaserCardFooter>
    </TeaserCard>
  );
};

export const teaser_card = `
import React, { ReactElement } from "react";
import TeaserCard, { TeaserCardBody, TeaserCardFooter, TeaserCardHeader, TeaserCardImg, TeaserCardTop } from "stepone-ui/teaserCard";
import { data_mock } from "./data-mock-file"

const TeaserCards: React.FC<any> = (): ReactElement => {
  return (
    <TeaserCard>
      <TeaserCardImg>
        <img src={data_mock.imgSrc} alt="img-top" />
      </TeaserCardImg>
      <TeaserCardTop>
        <div className="status-tag">{data_mock.statusTag}</div>
        <span className="tag">{data_mock.date}</span>
      </TeaserCardTop>
      <TeaserCardHeader>
        <h4>{data_mock.title}</h4>
        <span className="subtitle">{data_mock.subtitle}</span>
      </TeaserCardHeader>
      <TeaserCardBody>
        {data_mock.description}
      </TeaserCardBody>
      <TeaserCardFooter>
        <button className="button_large">{data_mock.buttonText}</button>
      </TeaserCardFooter>
  </TeaserCard>
  );
};

export default TeaserCards
`;

export const teaser_data_mock_file = `
export const data_mock: any = {
  imgSrc: "https://img.freepik.com/fotos-premium/edificios-modernos-torre-o-rascacielos-distrito-financiero-nubes-dia-soleado-chicago-ee-uu_43552-32.jpg?w=2000",
  statusTag: "Semantic",
  date: "12 Apr 2023",
  title: "This is a title",
  subtitle: "And this is a subtitle",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias ipsa quis, eum officia aliquid eaque cum illum voluptates nobis libero deserunt labore voluptas adipisci minima vero voluptatem veritatis. Rerum?",
  buttonText: "Join our newsletter"
};
`;
