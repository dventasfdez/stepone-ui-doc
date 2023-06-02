import React, { useRef, useState } from "react";
import OverflowMenu from "stepone-ui/overflowMenu";
import Tree, { TreeViewElement } from "stepone-ui/treeView";
import Link from "next/link";

export interface IHeaderItemOption {
  id?: string;
  label: string;
  onClick?: () => void;
  href?: string;
}
export interface IHeaderItemProps {
  id?: string;
  className?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  options?: IHeaderItemOption[];
  optionsDivider?: boolean;
  children: string;
  [others: string]: any;
}

const HeaderItem: React.FC<IHeaderItemProps> = (props) => {
  const { className, children, id, selected, onClick, href, options, disabled, optionsDivider, ...rest } = props;
  const [showOptions, setShowOptions] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onClickItem = (e?: React.MouseEvent) => {
    if (options) {
      if (rest && rest["data-mobile"]) e?.stopPropagation();
      setShowOptions(!showOptions);
    }
    if (typeof onClick === "function") {
      onClick();
    }
  };
  const renderItem = () => {
    return (
      <Link className={`header-item ${selected ? "active" : ""} ${className ?? ""}`} href={href ?? ""} {...rest}>
        {children}
      </Link>
    );
  };
  return renderItem();
};

export default HeaderItem;
