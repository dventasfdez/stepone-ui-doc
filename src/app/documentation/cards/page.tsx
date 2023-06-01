"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import { card_props, data_mock_file, HorizontalCard, horizontal_card, VerticalCard, vertical_card } from "./cards-examples";
import { FigureCards, figure_card, figure_data_mock_file } from "./figure-cards-examples";
import { HorizontalMasonryCard, horizontal_masonry_card, masonry_data_mock_file, VerticalMasonryCard, vertical_masonry_card } from "./masonry-cards-examples";
import { LocationMapCards, location_data_mock_file, location_map_card } from "./location-cards-examples";
import { IconCards, icon_card, icon_data_mock_file } from "./icon-cards-examples";
import { TeaserCards, teaser_card, teaser_data_mock_file } from "./teaser-cards-examples";
import { DragAndDropCards, drag_and_drop_card, drag_and_drop_data_mock_file } from "./drag-and-drop-cards-examples";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
const CardsGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Cards</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>We have different components of cards</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={card_props} title="Select Props" />
      <hr className="mb3" />
      <h3>Card</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>In this component we have vertical and horizontal variants</NotificationBody>
      </Notification>
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Vertical Card</NotificationHeader>
        <NotificationBody>Example with vertical card</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "vertical_card.tsx", code: vertical_card },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<VerticalCard />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Horizontal Card</NotificationHeader>
        <NotificationBody>Example with horizontal card by adding horizontal props</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "horizontal_card.tsx", code: horizontal_card },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<HorizontalCard />}
      />
      <hr className="mb3" />
      <h3 className="mb2">Figure Card</h3>
      <h4>Example</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Figure Card</NotificationHeader>
        <NotificationBody>Example with Figure Card.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "figure_card.tsx", code: figure_card },
          { name: "data-mock-file.ts", code: figure_data_mock_file, language: "javascript" },
        ]}
        componentExample={<FigureCards />}
      />
      <hr className="mb3" />
      <h3>Mansory Card</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>In this component we have vertical and horizontal variants</NotificationBody>
      </Notification>
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Vertical Mansory Card</NotificationHeader>
        <NotificationBody>Vertical Mansory Card example.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "vertical_masonry_card.tsx", code: vertical_masonry_card },
          { name: "data-mock-file.ts", code: masonry_data_mock_file, language: "javascript" },
        ]}
        componentExample={<VerticalMasonryCard />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Horizontal Mansory Card</NotificationHeader>
        <NotificationBody>Horizontal Mansory Card example</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "horizontal_masonry_card.tsx", code: horizontal_masonry_card },
          { name: "data-mock-file.ts", code: masonry_data_mock_file, language: "javascript" },
        ]}
        componentExample={<HorizontalMasonryCard />}
      />
      <hr className="mb3" />
      <h3 className="mb2">Location Map Card</h3>
      <h4>Example</h4>
      <ComponentExample
        codeExample={[
          { name: "location_map_card.tsx", code: location_map_card },
          { name: "data-mock-file.ts", code: location_data_mock_file, language: "javascript" },
        ]}
        componentExample={<LocationMapCards />}
      />
      <hr className="mb3" />
      <h3 className="mb2">Icon Card</h3>
      <h4>Example</h4>
      <ComponentExample
        codeExample={[
          { name: "icon_card.tsx", code: icon_card },
          { name: "data-mock-file.ts", code: icon_data_mock_file, language: "javascript" },
        ]}
        componentExample={<IconCards />}
      />
      <hr className="mb3" />
      <h3 className="mb2">Teaser Card</h3>
      <h4>Example</h4>
      <ComponentExample
        codeExample={[
          { name: "teaser_card.tsx", code: teaser_card },
          { name: "data-mock-file.ts", code: teaser_data_mock_file, language: "javascript" },
        ]}
        componentExample={<TeaserCards />}
      />
      <hr className="mb3" />
      <h3 className="mb2">Drag and Drop Cards</h3>
      <h4>Example</h4>
      <ComponentExample
        codeExample={[
          { name: "drag_and_drop_card.tsx", code: drag_and_drop_card },
          { name: "data-mock-file.ts", code: drag_and_drop_data_mock_file, language: "javascript" },
        ]}
        componentExample={<DragAndDropCards />}
      />
    </NoSSR>
  );
};

export default CardsGuideline;
