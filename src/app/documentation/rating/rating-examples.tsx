import React, { ReactElement } from "react";
import Rating from "stepone-ui/rating";

export const rating_props = [
  { name: "amount", use: true, type: "number", definition: "Specifies the amount of stars to display.." },
  {
    name: "onRate",
    use: true,
    type: "(amount: number) => void",
    definition: "Callback function prop that will be called when a star is clicked. The function receives the amount of stars as a parameter.",
  },
  { name: "label", use: false, type: "{ left: string; right: string }", definition: "Used to display a label for the rating." },
  { name: "className", use: false, type: "string", definition: "Add additional CSS classes to the component.." },
];

// RATING WITH DEFAULT AMOUNT EXAMPLE
export const DefaultAmountRating: React.FC<any> = (): ReactElement => {
  return <Rating amount={10} onRate={function noRefCheck() {}} />;
};

export const default_rating = `
import React, { ReactElement } from "react";
import Rating from "stepone-ui/rating";

const DefaultAmountRating: React.FC<any> = (): ReactElement => {
    return (
        <Rating
          amount={10}
          onRate={function noRefCheck() {}}
        />
    );
};

export default DefaultAmountRating
`;

// RATING WITH ALTERNATIVE AMOUNT EXAMPLE
export const AlternativeAmountRating: React.FC<any> = (): ReactElement => {
  return <Rating amount={15} onRate={function noRefCheck() {}} />;
};

export const alternative_rating = `
import React, { ReactElement } from "react";
import Rating from "stepone-ui/rating";

const AlternativeAmountRating: React.FC<any> = (): ReactElement => {
    return (
        <Rating
        amount={15}
        onRate={function noRefCheck() {}}
        />
    );
};

export default AlternativeAmountRating
`;

// RATING WITHOUT LABEL EXAMPLE
export const LabelRating: React.FC<any> = (): ReactElement => {
  return (
    <Rating
      amount={15}
      label={{
        left: "0 - Not likely",
        right: "Very likely - 10",
      }}
      onRate={function noRefCheck() {}}
    />
  );
};

export const label_rating = `
import React, { ReactElement } from "react";
import Rating from "stepone-ui/rating";

const LabelRating: React.FC<any> = (): ReactElement => {
    return (
    <Rating
        amount={15}
        label={{
            left: "0 - Not likely",
            right: "Very likely - 10",
        }}
    onRate={function noRefCheck() {}}
    />
    );
};

export default LabelRating
`;
