"use client";
import { useDevice } from "@/hooks/useDevice/useDevice";

import Link from "next/link";
import { useEffect, useState } from "react";
import Drawer, { DrawerBody, DrawerHeader } from "stepone-ui/drawer";

export default function Sidebar({ children }) {
  const { isMobile } = useDevice();
  const [showContent, setShowContent] = useState(isMobile ? false : true);

  const toggleContent = (showContent: boolean) => {
    setShowContent(showContent);
  };
  useEffect(() => {
    setShowContent(!isMobile);
  }, [isMobile]);

  return (
    <>
      <button className={`drawer-mobile-toggle button-interactive ${isMobile ? "" : "display_none"}`} onClick={() => toggleContent(!showContent)}>
        <span className="material-icons icon-order">arrow_forward</span>
      </button>
      <Drawer renderAsPortal={isMobile} onBack={isMobile ? () => toggleContent(!showContent) : undefined} open={showContent}>
        {children}
      </Drawer>
    </>
  );
}
