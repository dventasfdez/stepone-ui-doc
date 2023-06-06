import Sidebar from "@/components/master/Sidebar";
import Link from "next/link";
import { DrawerBody, DrawerHeader } from "stepone-ui/drawer";

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="g-container flex">
      <Sidebar>
        <DrawerHeader>
          <h5>Welcome to the StepOne components documentation</h5>
          <p className="small-title guidline-option">
            <Link href="/documentation">How to start</Link>
          </p>
        </DrawerHeader>
        <DrawerBody>
          <div>
            <p className="caption">Downloads</p>
            <div className="mb3">
              <p className="small-title guidline-option">
                <Link href="/documentation/forms">Latest Version</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Previous Versions</Link>
              </p>
            </div>
          </div>
          <div>
            <p className="caption">Examples</p>
            <div className="mb3">
              <p className="small-title guidline-option">
                <Link href="#">Basic Usage</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Components</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Layouts</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Forms</Link>
              </p>
            </div>
          </div>
        </DrawerBody>
      </Sidebar>
      <main className="drawer-content p4">{children}</main>
    </div>
  );
}
