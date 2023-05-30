import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="  ">
      <div className="drawer-wrapper sidepanel ">
        <div className="drawer-body ">
          {/* <div className="input-container ">
            <span className="material-icons search">search</span>
            <input className="searchbox" placeholder="Search Text" type="search" value="defaultValue" />
            <button type="button" className="button-interactive">
              <span className="material-icons">close</span>
            </button>
          </div> */}
          <ul className="tree-container ">
            <ul>
              <li role="button" className="tree-element ">
                <Link href="/documentation">Documentation</Link>
              </li>
              <li role="button" className="tree-element ">
                <Link href="/documentation/forms">Forms</Link>
              </li>
              {/* <li role="button" className="tree-element ">
                <span className="material-icons icon-order">mood</span>Item Two<span className="material-icons tree-element-icon-right">keyboard_arrow_down</span>
              </li>
              <li role="button" className="tree-element ">
                Item Third
              </li>
              <li role="button" className="tree-element ">
                Item Fourth
              </li>
              <li role="button" className="tree-element ">
                <span className="material-icons icon-order"></span>Item Fifth<span className="material-icons tree-element-icon-right">keyboard_arrow_down</span>
              </li>
              <li role="button" className="tree-element ">
                <span className="material-icons icon-order">mood</span>Item One
              </li>
              <li role="button" className="tree-element ">
                <span className="material-icons icon-order">mood</span>Item Two<span className="material-icons tree-element-icon-right">keyboard_arrow_down</span>
              </li>
              <li role="button" className="tree-element ">
                Item Third
              </li>
              <li role="button" className="tree-element ">
                Item Fourth
              </li>
              <li role="button" className="tree-element ">
                <span className="material-icons icon-order"></span>Item Fifth<span className="material-icons tree-element-icon-right">keyboard_arrow_down</span>
              </li>
              <li role="button" className="tree-element ">
                <span className="material-icons icon-order"></span>Item Sixth<span className="material-icons tree-element-icon-right">keyboard_arrow_down</span>
              </li> */}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
