"use client";
import React, { ReactElement } from "react";
import Accordion, { AccordionContent, AccordionHeader } from "stepone-ui/accordion";

export const accordion_props = [
  { name: "filled", use: false, type: "boolean", definition: "Add shadow box to accordion." },
  { name: "id", use: false, type: "string", definition: "Identifies the accordion item." },
  { name: "defaultShow", use: false, type: "boolean", definition: "Indicates if the accordion show the content." },
  { name: "className", use: false, type: "string", definition: "Add class to accordion." },
];

const data_mock = {
  header: "Accordion example",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
  helper: "Helper",
  button: "Button",
};

// SIMPLE ACCORDION EXAMPLE
export const SimpleAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion>
      <AccordionHeader>{data_mock.header}</AccordionHeader>
      <AccordionContent>{data_mock.content}</AccordionContent>
    </Accordion>
  );
};

export const simple_accordion = `
import React, { ReactElement } from "react";
import Accordion, { AccordionContent, AccordionHeader } from "stepone-ui/accordion";
import { data_mock } from "./data-mock-file"

const SimpleAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion>
      <AccordionHeader> {data_mock.header} </AccordionHeader>
      <AccordionContent> {data_mock.content} </AccordionContent>
    </Accordion>
  ) 
};

export default SimpleAccordion
`;

export const data_mock_file = `
export const data_mock = {
  header: "Accordion example",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
};
`;

// FILLED ACCORDION EXAMPLE
export const FilledAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion filled>
      <AccordionHeader>{data_mock.header}</AccordionHeader>
      <AccordionContent>{data_mock.content}</AccordionContent>
    </Accordion>
  );
};

export const filled_accordion = `
import React, { ReactElement } from "react";
import Accordion, { AccordionContent, AccordionHeader } from "stepone-ui/accordion";
import { data_mock } from "./data-mock-file"

const FilledAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion
        filled
    >
        <AccordionHeader> {data_mock.header} </AccordionHeader>
        <AccordionContent> {data_mock.content} </AccordionContent>
        </Accordion>
  ) 
};

export default FilledAccordion
`;

// HELPER TEXT ACCORDION EXAMPLE
export const HelperTextAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion>
      <AccordionHeader>
        {data_mock.header}
        <span className="accordion-helper-text">{data_mock.helper}</span>
      </AccordionHeader>
      <AccordionContent>{data_mock.content}</AccordionContent>
    </Accordion>
  );
};

export const helperText_accordion = `
import React, { ReactElement } from "react";
import Accordion, { AccordionContent, AccordionHeader } from "stepone-ui/accordion";
import { data_mock } from "./data-mock-file"
    
const helperTextAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion>
    <AccordionHeader>
      {data_mock.header}
      <span className="accordion-helper-text">{data_mock.helper}</span>
    </AccordionHeader>
    <AccordionContent>{data_mock.content}</AccordionContent>
  </Accordion>
  )
};

export default helperTextAccordion
`;

export const helper_data_mock_file = `
export const data_mock = {
  header: "Accordion example",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
  helper: "Helper",
};
`;

// OTHERS ACCORDION
export const OthersAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion>
      <AccordionHeader>
        <div className="flex">
          <span>{data_mock.header}</span>
          <button className="button-secondary mla">{data_mock.button}</button>
        </div>
      </AccordionHeader>
      <AccordionContent>{data_mock.content}</AccordionContent>
    </Accordion>
  );
};

export const others_accordion = `
import React, { ReactElement } from "react";
import Accordion, { AccordionContent, AccordionHeader } from "stepone-ui/accordion";
import { data_mock } from "./data-mock-file"
    
const othersAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion>
    <AccordionHeader>
      <div className="flex">
        <span>{data_mock.header}</span>
        <button className="button-secondary mla">{data_mock.button}</button>
      </div>
    </AccordionHeader>
    <AccordionContent>{data_mock.content}</AccordionContent>
  </Accordion>
  )
};

export default othersAccordion
`;

export const others_data_mock_file = `
export const data_mock == {
  header: "Accordion example",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
  button: "Button"
};
`;

// GROUP ACCORDION EXAMPLE
export const GroupAccordion: React.FC<any> = (): ReactElement => {
  return (
    <div className="accordion-group">
      <Accordion>
        <AccordionHeader>
          {data_mock.header}
          <span className="accordion-helper-text">{data_mock.helper}</span>
        </AccordionHeader>
        <AccordionContent>{data_mock.content}</AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHeader>
          {data_mock.header}
          <span className="accordion-helper-text">{data_mock.helper}</span>
        </AccordionHeader>
        <AccordionContent>{data_mock.content}</AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHeader>
          {data_mock.header}
          <span className="accordion-helper-text">{data_mock.helper}</span>
        </AccordionHeader>
        <AccordionContent>{data_mock.content}</AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionHeader>
          {data_mock.header}
          <span className="accordion-helper-text">{data_mock.helper}</span>
        </AccordionHeader>
        <AccordionContent>{data_mock.content}</AccordionContent>
      </Accordion>
    </div>
  );
};

export const group_accordion = `
import React, { ReactElement } from "react";
import Accordion, { AccordionContent, AccordionHeader } from "stepone-ui/accordion";
import { data_mock } from "./data-mock-file"
      
const groupAccordion: React.FC<any> = (): ReactElement => {
  return (
    <div className="accordion-group">
  <Accordion>
    <AccordionHeader>
      {data_mock.header}
      <span className="accordion-helper-text">{data_mock.helper}</span>
    </AccordionHeader>
    <AccordionContent>{data_mock.content}</AccordionContent>
  </Accordion>
  <Accordion>
    <AccordionHeader>
      {data_mock.header}
      <span className="accordion-helper-text">{data_mock.helper}</span>
    </AccordionHeader>
    <AccordionContent>{data_mock.content}</AccordionContent>
  </Accordion>
  <Accordion>
    <AccordionHeader>
      {data_mock.header}
      <span className="accordion-helper-text">{data_mock.helper}</span>
    </AccordionHeader>
    <AccordionContent>{data_mock.content}</AccordionContent>
  </Accordion>
  <Accordion>
    <AccordionHeader>
      {data_mock.header}
      <span className="accordion-helper-text">{data_mock.helper}</span>
    </AccordionHeader>
    <AccordionContent>{data_mock.content}</AccordionContent>
  </Accordion>
</div>
  )
};
  
export default groupAccordion
`;

// OPENED ACCORDION EXAMPLE
export const OpenedAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion defaultShow>
      <AccordionHeader>{data_mock.header}</AccordionHeader>
      <AccordionContent>{data_mock.content}</AccordionContent>
    </Accordion>
  );
};

export const opened_accordion = `
import React, { ReactElement } from "react";
import Accordion, { AccordionContent, AccordionHeader } from "stepone-ui/accordion";
import { data_mock } from "./data-mock-file"
      
const openedAccordion: React.FC<any> = (): ReactElement => {
  return (
    <Accordion defaultShow >
  <AccordionHeader>{data_mock.header}</AccordionHeader>
  <AccordionContent>{data_mock.content}</AccordionContent>
</Accordion>
  );
};
  
export default openedAccordion
`;
