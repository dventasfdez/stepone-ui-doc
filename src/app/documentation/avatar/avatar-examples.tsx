import React, { ReactElement } from "react";

export const avatar_props = [
  { name: "title", use: false, type: "string", definition: "Add title to the Avatar." },
  { name: "subtitle", use: false, type: "string", definition: "Add subtitle to the Avatar." },
  { name: "badge", use: false, type: "number", definition: "Add badge to the Avatar." },
  { name: "big", use: false, type: "boolean", definition: "Big size of the Avatar." },
  { name: "medium", use: false, type: "boolean", definition: "Medium size of the Avatar." },
  { name: "small", use: false, type: "boolean", definition: "Small size of the Avatar." },
  { name: "className", use: false, type: "string", definition: "Add class to accordion." },
  { name: "disabled", use: false, type: "boolean", definition: "Define if Avatar is disabled." },
];

// BIG AVATAR EXAMPLE
export const BigAvatar: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")} big={true}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};
export const big_avatar = `
import React, { ReactElement } from "react";
import Avatar from "stepone-ui/avatar";

const BigAvatar: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")} big={true}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
  </Avatar>
  );
};

export default BigAvatar
`;

// MEDIUM AVATAR  EXAMPLE
export const MediumAvatar: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export const medium_avatar = `
import React, { ReactElement } from "react";
import Avatar from "stepone-ui/avatar";

const MediumAvatar: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export default MediumAvatar
`;

// SMALL AVATAR EXAMPLE
export const SmallAvatar: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")} small={true}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export const small_avatar = `
import React, { ReactElement } from "react";
import Avatar from "stepone-ui/avatar";

const SmallAvatar: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")} small={true}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export default SmallAvatar
`;

// AVATAR WITH TITLE EXAMPLE
export const AvatarTitle: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")} big={true} title="Avatar title">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export const avatar_title = `
import React, { ReactElement } from "react";
import Avatar from "stepone-ui/avatar";

const AvatarTitle: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")} big={true} title="Avatar title">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export default AvatarTitle
`;

// AVATAR WITH SUBTITLE EXAMPLE
export const AvatarSubtitle: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")} big={true} title="Avatar title" subtitle="Avatar subtitle">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export const avatar_subtitle = `
  import React, { ReactElement } from "react";
  import Avatar from "stepone-ui/avatar";
  
  const AvatarSubtitle: React.FC<any> = (): ReactElement => {
    return (
      <Avatar onClick={() => console.log("onClick avatar")} big={true} title="Avatar title" subtitle="Avatar subtitle">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </Avatar>
    );
  };
  
  export default AvatarSubtitle
  `;

// DISABLED AVATAR EXAMPLE
export const DisabledAvatar: React.FC<any> = (): ReactElement => {
  return (
    <Avatar onClick={() => console.log("onClick avatar")} big={true} title="Avatar title" subtitle="Avatar subtitle" disabled>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export const disabled_avatar = `
import React, { ReactElement } from "react";
import Avatar from "stepone-ui/avatar";

const DisabledAvatar: React.FC<any> = (): ReactElement => {
    return (
    <Avatar onClick={() => console.log("onClick avatar")} big={true} title="Avatar title" subtitle="Avatar subtitle" disabled>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
    );
};

export default DisabledAvatar
`;

// AVATAR WITH BADGE EXAMPLE
export const BadgeAvatar: React.FC<any> = (): ReactElement => {
  return (
    <Avatar badge={8} onClick={() => console.log("onClick avatar")} big={true} title="Avatar title">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
    </Avatar>
  );
};

export const badge_avatar = `
  import React, { ReactElement } from "react";
  import Avatar from "stepone-ui/avatar";
  
  const BadgeAvatar: React.FC<any> = (): ReactElement => {
      return (
        <Avatar badge={8} onClick={() => console.log("onClick avatar")} big={true} title="Avatar title">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
        </Avatar>
  };
  
  export default BadgeAvatar
  `;
