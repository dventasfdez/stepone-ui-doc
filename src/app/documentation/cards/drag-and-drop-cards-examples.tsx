import React, { ReactElement } from "react";
import DragAndDropCard, { DragAndDropCardHeader } from "stepone-ui/dragAndDropCard";

const data_mock: any = [
  { id: "Drag and drop card", title: "Start" },
  { id: "Drag and drop card draggable", title: "Phase 1", draggable: true },
  { id: "Drag and drop card draggable completed", title: "Phase 1", draggable: true, completed: true },
  {
    id: "Drag and drop card options",
    title: "Phase 1",
    draggable: true,
    options: [
      { id: "1", label: "Duplicate" },
      { id: "2", label: "Delete" },
      { id: "3", label: "Share" },
    ],
  },
  { id: "Add phase", title: "Add phase", options: [{ id: "1", label: "Phase" }] },
  { id: "Drag and drop card placeholder", title: "Placeholder", placeholder: true },
];

// TEASER CARD EXAMPLE
export const DragAndDropCards: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      {data_mock.map((card: any) => (
        <DragAndDropCard key={card.id} className="mr1" id={card.id} title={card.title} completed={card.completed} draggable={card.draggable} options={card.options} placeholder={card.placeholder}>
          <DragAndDropCardHeader id="drag and drop card header">{card.title}</DragAndDropCardHeader>
        </DragAndDropCard>
      ))}
    </div>
  );
};

export const drag_and_drop_card = `
import React, { ReactElement } from "react";
import DragAndDropCard, { DragAndDropCardHeader } from "stepone-ui/dragAndDropCard";
import { data_mock } from "./data-mock-file"

const DragAndDropCards: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
    {data_mock.map((card: any) => (
      <DragAndDropCard key={card.id} className="mr1" id={card.id} title={card.title} completed={card.completed} draggable={card.draggable} options={card.options} placeholder={card.placeholder}>
        <DragAndDropCardHeader id="drag and drop card header">{card.title}</DragAndDropCardHeader>
      </DragAndDropCard>
    ))}
  </div>
  );
};

export default DragAndDropCards
`;

export const drag_and_drop_data_mock_file = `
export const data_mock: any = [
  { id: "Drag and drop card", title: "Start" },
  { id: "Drag and drop card draggable", title: "Phase 1", draggable: true },
  { id: "Drag and drop card draggable completed", title: "Phase 1", draggable: true, completed: true },
  {
    id: "Drag and drop card options",
    title: "Phase 1",
    draggable: true,
    options: [
      { id: "1", label: "Duplicate" },
      { id: "2", label: "Delete" },
      { id: "3", label: "Share" },
    ],
  },
  { id: "Add phase", title: "Add phase", options: [{ id: "1", label: "Phase" }] },
  { id: "Drag and drop card placeholder", title: "Placeholder", placeholder: true },
];
`;
