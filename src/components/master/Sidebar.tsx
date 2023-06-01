import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="  ">
      <div className="drawer-wrapper overflow ">
        <div className="drawer-header ">
          <h5>Welcome to the StepOne components documentation</h5>
          <p className="small-title guidline-option">
            <Link href="/documentation">How to start</Link>
          </p>
        </div>
        <div className="drawer-body ">
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
                <Link href="#">Data tables</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Notifications system</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Internationalization</Link>
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
                <Link href="#">Link</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Loader</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Modal</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Notifications</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">OverflowMenu</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Paginator</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Progress Bar</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Quote</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Rating</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Searchbox</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Slider</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Status tag</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Stepper</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Tabs</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Toggle</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Tooltip</Link>
              </li>

              <li className="small-title guidline-option">
                <Link href="#">Tree View</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Video Preview</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
