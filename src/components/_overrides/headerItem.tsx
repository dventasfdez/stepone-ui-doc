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
