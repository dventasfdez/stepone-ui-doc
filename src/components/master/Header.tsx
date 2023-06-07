"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header, { HeaderItem, HeaderLogo } from "../_overrides/header";

export default function _Header() {
  const pathname = usePathname();

  return (
    <>
      <Header className="tag-ds ">
        <HeaderLogo>
          <Image className="header-logo" src="/UST-logo.svg" alt="Logo" width={48} height={52} priority />
        </HeaderLogo>

        <HeaderItem href="/documentation" selected={pathname.startsWith("/documentation") ? true : false}>
          Documentation
        </HeaderItem>
        <HeaderItem href="/downloads-and-examples" selected={pathname.startsWith("/downloads-and-examples") ? true : false}>
          Downloads and examples
        </HeaderItem>

        {/* <HeaderContact href="#">Contact</HeaderContact>   */}
      </Header>
    </>
  );
}
