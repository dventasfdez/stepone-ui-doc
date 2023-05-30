"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="header">
      <div className="header-top"></div>
      <div className="header-bottom">
        <Link href="/">
          <Image className={`header-logo`} src="/UST-logo.svg" alt="Logo" width={48} height={52} priority />
        </Link>
        <div className="header-items">
          <Link href="/how-to-start" className={`header-item ${pathname.startsWith("/how-to-start") ? "active" : ""}`}>
            How to start
          </Link>
          <Link href="/documentation" className={`header-item ${pathname.startsWith("/documentation") ? "active" : ""}`}>
            Documentation
          </Link>
          <Link href="/downloads-and-examples" className={`header-item ${pathname.startsWith("/downloads-and-examples") ? "active" : ""}`}>
            Downloads and examples
          </Link>
        </div>
      </div>
    </div>
  );
}
