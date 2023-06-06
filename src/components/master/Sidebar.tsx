"use client";

import { useEffect, useState } from "react";
import Drawer from "stepone-ui/drawer";
import { useDevice } from "@/components/_overrides/useDevice/useDevice";
export default function Sidebar({ children }: { children: React.ReactNode }) {
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
