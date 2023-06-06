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
          <div className="mb4">
            <p className="caption mb2">StepOne Fundation </p>
            <ul className="mb3">
              <li className="small-title guidline-option">
                <Link href="/documentation/typography">Typography</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/grid">Grid</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/helpers">Helpers</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/variables">Variables</Link>
              </li>
            </ul>
          </div>
          <div className="mb4">
            <p className="caption mb2">StepOne Modules </p>
            <ul>
              <li className="small-title guidline-option">
                <Link href="/documentation/forms">Forms</Link>
              </li>
              <li className="small-title guidline-option">
                <span>Data tables</span>
              </li>
              <li className="small-title guidline-option">
                <span>Notifications system</span>
              </li>
              <li className="small-title guidline-option">
                <span>Internationalization</span>
              </li>
            </ul>
          </div>

          <div className="mb4">
            <p className="caption mb2">StepOne Components</p>
            <ul className="mb3">
              <li className="small-title guidline-option">
                <Link href="/documentation/accordions">Accordion</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/avatar">Avatar</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/breadcrumbs">Breadcrumbs</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/calendars">Calendars</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/cards">Cards</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/carousel">Carousel</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/chips">Chips</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/content-switcher">ContentSwitcher</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/drawer">Drawer</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/dropdown-menu">DropdownMenu</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/file-uploader">FileUploader</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/link">Link</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/loader">Loader</Link>
              </li>
              <li className="small-title guidline-option">
                <span>Modal</span>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/notifications">Notifications</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/overflow-menu">OverflowMenu</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/paginator">Paginator</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/progress-bar">Progress Bar</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/quote">Quote</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/rating">Rating</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/searchbox">Searchbox</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/slider">Slider</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/status-tag">Status tag</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/stepper">Stepper</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/tabs">Tabs</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/toggle">Toggle</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/tooltip">Tooltip</Link>
              </li>

              <li className="small-title guidline-option">
                <Link href="/documentation/treeview">Tree View</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="/documentation/video-preview">Video Preview</Link>
              </li>
            </ul>
          </div>
        </DrawerBody>
      </Sidebar>
      <main className="drawer-content p4">{children}</main>
    </div>
  );
}
