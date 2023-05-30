import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer-container ">
      <div className="footer-header ">
        <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
          <a href="/">Home</a>
          <a href="/documentation">Documentation</a>
          <a href="/downloads-and-examples">Downloads and examples</a>
        </div>
      </div>
      <hr className="mt4 mb4" />
      <div className="footer-bottom ">
        <Link href="/">
          <Image className="footer-logo  " src="/UST-logo.svg" alt="Logo" width={48} height={52} priority style={{ objectFit: "contain" }} />
        </Link>
        <a target="_blank" href="https://ust.com/">
          UST.com
        </a>
        <a target="_blank" href=" https://www.ust.com/es/who-we-are/ust-newsroom">
          News & Events
        </a>

        <a target="_blank" href="https://www.linkedin.com/company/ustespana/?originalSubdomain=es">
          Linkedin
        </a>
        <a href="https://www.ust.com/es/who-we-are">Who we are</a>
        <p className="footer-brand  ">@UST 2023</p>
      </div>
    </div>
  );
}
