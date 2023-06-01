import Link from "next/link";
import React, { ReactElement } from "react";

// DEFAULT LINK EXAMPLE
export const DefaultLink: React.FC<any> = (): ReactElement => {
  return <Link href="/ui-library">Link default</Link>;
};

export const default_link = `
import React, { ReactElement } from "react";

const DefaultLink: React.FC<any> = (): ReactElement => {
  return (
    <Link href="/ui-library">
      Link default
    </Link >
  ) 
};

export default DefaultLink
`;

// LINK WITH ICON LEFT EXAMPLE
export const IconLeftLink: React.FC<any> = (): ReactElement => {
  return (
    <Link className="m2" href="/development-guidelines">
      <span className="material-icons left">face</span> Link icon left
    </Link>
  );
};

export const icon_left_link = `
  import React, { ReactElement } from "react";
  
  const IconLeftLink: React.FC<any> = (): ReactElement => {
    return (
      <Link className="m2" href="/development-guidelines">
        <span className="material-icons left">face</span> Link icon left
      </Link>
    ) 
  };
  
  export default IconLeftLink
  `;

// LINK WITH ICON RIGHT EXAMPLE
export const IconRightLink: React.FC<any> = (): ReactElement => {
  return (
    <Link href="/development-guidelines">
      Link icon right<span className="material-icons right">face</span>
    </Link>
  );
};

export const icon_right_link = `
  import React, { ReactElement } from "react";
  
  const IconRightLink: React.FC<any> = (): ReactElement => {
    return (
      <Link href="/development-guidelines">
        Link icon right<span className="material-icons right">face</span>
      </Link>
    ) 
  };
  
  export default IconRightLink
  `;

// LINK SMALL EXAMPLE
export const SmallLink: React.FC<any> = (): ReactElement => {
  return (
    <Link className="link_small" href="/ui-library">
      Link default
    </Link>
  );
};

export const small_link = `
  import React, { ReactElement } from "react";
  
  const SmallLink: React.FC<any> = (): ReactElement => {
    return (
      <Link className="link_small" href="/development-guidelines">
        Link default
      </Link>
    ) 
  };
  
  export default SmallLink
  `;

// LINK SMALL WITH LEFT ICON EXAMPLE
export const SmallIconLeftLink: React.FC<any> = (): ReactElement => {
  return (
    <Link className="link_small" href="/development-guidelines">
      <span className="material-icons left">face</span> Link small icon left
    </Link>
  );
};

export const small_icon_left_link = `
  import React, { ReactElement } from "react";
  
  const SmallIconLeftLink: React.FC<any> = (): ReactElement => {
    return (
      <Link className="link_small" href="/development-guidelines">
        <span className="material-icons left">face</span> Link small icon left
      </Link>
    ) 
  };
  
  export default SmallIconLeftLink
  `;

// LINK SMALL WITH LEFT ICON EXAMPLE
export const SmallIconRightLink: React.FC<any> = (): ReactElement => {
  return (
    <Link className="link_small" href="/development-guidelines">
      <span className="material-icons left">face</span> Link small icon left
    </Link>
  );
};

export const small_icon_right_link = `
    import React, { ReactElement } from "react";
    
    const SmallIconRightLink: React.FC<any> = (): ReactElement => {
      return (
        <Link className="link_small" href="/development-guidelines">
          <span className="material-icons left">face</span> Link small icon left
        </Link>
      ) 
    };
    
    export default SmallIconRightLink
    `;
