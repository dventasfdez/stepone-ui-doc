import React, { ReactElement } from "react";
import Carousel, { CarouselItem } from "stepone-ui/carousel";

export const carousel_props = [
  { name: "defaultId", use: false, type: "string", definition: "Add an custom defaultId instead to render the first element." },
  { name: "outlined", use: false, type: "boolean", definition: "Set to true in order to render arrows and dots outside the box." },
  { name: "className", use: false, type: "string", definition: "Additional or alternative styling." },
  { name: "children", use: false, type: "any", definition: "Allows to pass child elements to the Carousel component" },
];

const data_mock = [
  {
    id: "1",
    content: "Element 0",
  },
  {
    id: "2",
    content: "Element 1",
  },
  {
    id: "3",
    content: "Element 2",
  },
  {
    id: "4",
    content: "Element 3",
  },
];

const data_mock_2 = [
  {
    id: "1",
    content: "Element 0",
  },
  {
    id: "2",
    content: "Element 1",
  },
  {
    id: "3",
    content: "Element 2",
  },
  {
    id: "4",
    content: "Element 3",
  },
  {
    id: "5",
    content: "Element 4",
  },
  {
    id: "6",
    content: "Element 5",
  },
  {
    id: "7",
    content: "Element 6",
  },
  {
    id: "8",
    content: "Element 7",
  },
  {
    id: "9",
    content: "Element 8",
  },
];

// DEFAULT CAROUSEL EXAMPLE
export const DefaultCarousel: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex justify-content-center">
      <Carousel defaultId={"4"} data-testid="carousel" className="m2">
        {data_mock.map((item) => (
          <CarouselItem
            key={item.id}
            id={item.id}
            style={{
              width: "400px",
              height: "400px",
              backgroundColor: "#ffc133",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.content}
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export const default_carousel = `
import React, { ReactElement } from "react";
import Carousel, { CarouselItem } from "stepone-ui/carousel";
import { data_mock } from "./data-mock-file"

const DefaultCarousel: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex justify-content-center">
    <Carousel defaultId={"4"} data-testid="carousel" className="m2">
      {data_mock.map((item) => (
        <CarouselItem
          key={item.id}
          id={item.id}
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#ffc133",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.content}
        </CarouselItem>
      ))}
    </Carousel>
  </div>
  ) 
};

export default DefaultCarousel
`;

export const data_mock_file = `
export const data_mock = [
    {
      id: "1",
      content: "Element 0",
    },
    {
      id: "2",
      content: "Element 1",
    },
    {
      id: "3",
      content: "Element 2",
    },
    {
      id: "4",
      content: "Element 3",
    },
  ];
`;

// OUTLINED CAROUSEL EXAMPLE
export const OutlinedCarousel: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex justify-content-center">
      <Carousel outlined defaultId={"4"} data-testid="carousel" className="m2">
        {data_mock.map((item) => (
          <CarouselItem
            key={item.id}
            id={item.id}
            style={{
              width: "400px",
              height: "400px",
              backgroundColor: "#ffc133",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.content}
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export const outlined_carousel = `
  import React, { ReactElement } from "react";
  import Carousel, { CarouselItem } from "stepone-ui/carousel";
  import { data_mock } from "./data-mock-file"
  
  const OutlinedCarousel: React.FC<any> = (): ReactElement => {
    return (
      <div className="flex justify-content-center">
      <Carousel outlined defaultId={"4"} data-testid="carousel" className="m2">
        {data_mock.map((item) => (
          <CarouselItem
            key={item.id}
            id={item.id}
            style={{
              width: "400px",
              height: "400px",
              backgroundColor: "#ffc133",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.content}
          </CarouselItem>
        ))}
      </Carousel>
    </div>
    ) 
  };
  
  export default OutlinedCarousel
  `;

// CAROUSEL WITH MAX ELEMENTS EXAMPLE
export const MaxElementCarousel: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex justify-content-center">
      <Carousel defaultId={"1"} data-testid="carousel" className="m2">
        {data_mock_2.map((item) => (
          <CarouselItem
            key={item.id}
            id={item.id}
            style={{
              width: "400px",
              height: "400px",
              backgroundColor: "#ffc133",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.content}
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export const max_element_carousel = `
  import React, { ReactElement } from "react";
  import Carousel, { CarouselItem } from "stepone-ui/carousel";
  import { data_mock } from "./data-mock-file"
  
  const MaxElementCarousel: React.FC<any> = (): ReactElement => {
    return (
      <div className="flex justify-content-center">
      <Carousel defaultId={"1"} data-testid="carousel" className="m2">
      {data_mock_2.map((item) => (
        <CarouselItem
          key={item.id}
          id={item.id}
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#ffc133",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.content}
        </CarouselItem>
      ))}
    </Carousel>
    </div>
    ) 
  };
  
  export default MaxElementCarousel
  `;

export const maxElement_data_mock_file = `
export const data_mock = [
    {
      id: "1",
      content: "Element 0",
    },
    {
      id: "2",
      content: "Element 1",
    },
    {
      id: "3",
      content: "Element 2",
    },
    {
      id: "4",
      content: "Element 3",
    },
    {
      id: "5",
      content: "Element 4",
    },
    {
      id: "6",
      content: "Element 5",
    },
    {
      id: "7",
      content: "Element 6",
    },
    {
      id: "8",
      content: "Element 7",
    },
    {
      id: "9",
      content: "Element 8",
    },
  ];
`;
