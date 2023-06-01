import React, { ReactElement } from "react";
import Quote from "stepone-ui/quote";

export const quote_props = [
  { name: "quote", use: true, type: "string", definition: "Represents the text content of the quote." },
  { name: "avatar", use: false, type: "object", definition: "Contains information about the avatar to be displayed next to the quote. It has img, title and subtitle properties." },
  { name: "className", use: false, type: "string", definition: "Adds diffrent classes to the quote." },
];

// DEFAULT QUOTE EXAMPLE
export const DefaultQuote: React.FC<any> = (): ReactElement => {
  return <Quote quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem suscipit voluptatem! Minus obcaecati illo adipisci amet? Minus, expedita nostrum?"} />;
};

export const default_quote = `
import React, { ReactElement } from "react";
import Quote from "stepone-ui/quote";

const DefaultQuote: React.FC<any> = (): ReactElement => {
  return (
    return <Quote quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem suscipit voluptatem! Minus obcaecati illo adipisci amet? Minus, expedita nostrum?"} />;
  ) 
};

export default DefaultQuote
`;

// COMPLETE AVATAR QUOTE EXAMPLE
export const CompleteAvatarQuote: React.FC<any> = (): ReactElement => {
  return (
    <Quote
      quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem suscipit voluptatem! Minus obcaecati illo adipisci amet? Minus, expedita nostrum?"}
      avatar={{
        img: "https://www.w3schools.com/howto/img_avatar.png",
        title: "John Doe",
        subtitle: "Software Developer",
      }}
    />
  );
};

export const complete_avatar_quote = `
import React, { ReactElement } from "react";
import Quote from "stepone-ui/quote";

const CompleteAvatarQuote: React.FC<any> = (): ReactElement => {
return (
    <Quote
        quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem suscipit voluptatem! Minus obcaecati illo adipisci amet? Minus, expedita nostrum?"}
        avatar={{
        img: "https://www.w3schools.com/howto/img_avatar.png",
        title: "John Doe",
        subtitle: "Software Developer",
        }}
    />
    );
};

export default CompleteAvatarQuote
`;

// QUOTE WITH AVATAR WITHOUT IMAGE EXAMPLE
export const AvatarWithoutImageQuote: React.FC<any> = (): ReactElement => {
  return (
    <Quote
      quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem suscipit voluptatem! Minus obcaecati illo adipisci amet? Minus, expedita nostrum?"}
      avatar={{
        img: "https://www.w3schools.com/howto/img_avatar.png",
        title: "John Doe",
        subtitle: "Software Developer",
      }}
    />
  );
};

export const avatar_without_image_quote = `
import React, { ReactElement } from "react";
import Quote from "stepone-ui/quote";

const AvatarWithoutImageQuote: React.FC<any> = (): ReactElement => {
    return (
        <Quote
            quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem suscipit voluptatem! Minus obcaecati illo adipisci amet? Minus, expedita nostrum?"}
            avatar={{
                title: "John Doe",
                subtitle: "Software Developer",
            }}
        />
    );
};

export default AvatarWithoutImageQuote
`;
