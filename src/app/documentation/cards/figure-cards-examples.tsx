import React, { ReactElement } from "react";
import FigureCard, { FigureCardBody, FigureCardFigure, FigureCardFloatIcon, FigureCardHeader } from "stepone-ui/figureCard";

const data_mock: any = {
  figure: "00",
  icon: "collections",
  title: "This is a title",
  body: "This is a Figure in horizontal disposition",
};

// FIGURE CARD EXAMPLE
export const FigureCards: React.FC<any> = (): ReactElement => {
  return (
    <FigureCard>
      <FigureCardFigure>{data_mock.figure}</FigureCardFigure>
      <FigureCardFloatIcon>
        <span className="material-icons">{data_mock.icon}</span>
      </FigureCardFloatIcon>
      <FigureCardHeader>
        <h4>{data_mock.title}</h4>
      </FigureCardHeader>
      <FigureCardBody>{data_mock.body}</FigureCardBody>
    </FigureCard>
  );
};

export const figure_card = `
import React, { ReactElement } from "react";
import FigureCard, { FigureCardBody, FigureCardFigure, FigureCardFloatIcon, FigureCardHeader } from "stepone-ui/figureCard";
import { data_mock } from "./data-mock-file"

const FigureCards: React.FC<any> = (): ReactElement => {
  return (
      <FigureCard>
      <FigureCardFigure>{data_mock.figure}</FigureCardFigure>
      <FigureCardFloatIcon>
        <span className="material-icons">{data_mock.icon}</span>
      </FigureCardFloatIcon>
      <FigureCardHeader>
        <h4>{data_mock.title}</h4>
      </FigureCardHeader>
      <FigureCardBody>{data_mock.body}</FigureCardBody>
    </FigureCard>
  );
};

export default FigureCards
`;

export const figure_data_mock_file = `
export const data_mock: any = {
  figure: "00",
  icon: "collections",
  title: "This is a title",
  body: "This is a Figure in horizontal disposition",
};
`;
