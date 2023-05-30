import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="header-top"></div>
      <div className="header-bottom">
        <Image className="header-logo" src="/UST-logo.svg" alt="Logo" width={48} height={52} priority />
        <div className="header-items">
          <Link href="/how-to-start" data-testid="header-test-item-with-options" className="header-item  ">
            How to start
          </Link>
          <Link href="/documentation" data-testid="header-test-item-with-options" className="header-item  active">
            Documentation
          </Link>
          <Link href="/downloads-and-examples" data-testid="header-test-item-with-option" className="header-item  ">
            Downloads and examples
          </Link>
        </div>
      </div>
    </div>
  );
}
