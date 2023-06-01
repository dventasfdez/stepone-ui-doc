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
          <div>
            <p className="caption">StepOne Fundation </p>
            <ul className="mb3">
              <li className="small-title guidline-option">
                <Link href="#">Typography</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Grid</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Helpers</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="caption">StepOne Modules </p>
            <ul className="mb3">
              <li className="small-title guidline-option">
                <Link href="/documentation/forms">Forms</Link>

                <ul className="mb3">
                  <li className="small-title guidline-option">
                    <Link href="#">SelectInput</Link>
                  </li>
                  <li className="small-title guidline-option">
                    <Link href="#">Select</Link>
                  </li>
                  <li className="small-title guidline-option">
                    <Link href="#">SelectFilter</Link>
                  </li>
                  <li className="small-title guidline-option">
                    <Link href="#">DateInput</Link>
                  </li>
                  <li className="small-title guidline-option">
                    <Link href="#">NumberInput</Link>
                  </li>
                  <li className="small-title guidline-option">
                    <Link href="#">SearchInput</Link>
                  </li>
                </ul>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Results</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="caption">StepOne Components</p>
            <ul className="mb3">
              <li className="small-title guidline-option">
                <Link href="#">Calendars</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Accordion</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">ContentSwitcher</Link>
              </li>

              <li className="small-title guidline-option">
                <Link href="#">FileUploader</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Cards</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Loader</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Avatar</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Breadcrumbs</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Carousel</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Chips</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">DropdownMenu</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Drawer</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Modal</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Progress Bar</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Paginator</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Stepper</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Toggle</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Tooltip</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Tabs</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Tree View</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Video Preview</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Notifications</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">OverflowMenu</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Link</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Rating</Link>
              </li>
              <li className="small-title guidline-option">
                <Link href="#">Quote</Link>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
