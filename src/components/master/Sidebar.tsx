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
            <p className="caption">StepOne Components </p>
            <div className="mb3">
              <p className="small-title guidline-option">
                <Link href="/documentation/forms">Forms</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Results</Link>
              </p>

              <p className="small-title guidline-option">
                <Link href="#">SelectInput</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Select</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">SelectFilter</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">DateInput</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">NumberInput</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">SearchInput</Link>
              </p>
            </div>
          </div>
          <div>
            <p className="caption">StepOne Fundation </p>
            <div className="mb3">
              <p className="small-title guidline-option">
                <Link href="#">Typography</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Grid</Link>
              </p>
            </div>
          </div>
          <div>
            <p className="caption">StepOne Components</p>
            <div className="mb3">
              <p className="small-title guidline-option">
                <Link href="#">Calendars</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Accordion</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">ContentSwitcher</Link>
              </p>

              <p className="small-title guidline-option">
                <Link href="#">FileUploader</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Cards</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Loader</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Avatar</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Breadcrumbs</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Carousel</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Chips</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">DropdownMenu</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Drawer</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Modal</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Progress Bar</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Paginator</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Stepper</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Toggle</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Tooltip</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Tabs</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Tree View</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Video Preview</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Notifications</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">OverflowMenu</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Link</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Rating</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Quote</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Searchbox</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Slider</Link>
              </p>
              <p className="small-title guidline-option">
                <Link href="#">Status tag</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
