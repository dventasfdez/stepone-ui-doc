import React, { ReactElement } from "react";
import Tabs, { TabItem } from "stepone-ui/tabs";

export const tabs_props = [
  { name: "className", use: false, type: "string", definition: "Additional class name(s) for the component." },
  { name: "defaultActiveTab", use: false, type: "string", definition: "Indicates the active tab when the component is rendered." },
  { name: "onChangeTab", use: false, type: "(_id: string) => void", definition: "Handler function that gets called when a tab is changed." },
  { name: "vertical", use: false, type: "boolean", definition: "Changes the tabs to be aligned vertically instead of horizontally." },
];

export const tab_item_props = [
  { name: "id", use: true, type: "string", definition: "Identifies the tab item." },
  { name: "title", use: true, type: "string", definition: "Tab name to show." },
  { name: "activeTab", use: false, type: "string", definition: "Identifies if this tab is selected." },
  { name: "collapsed", use: false, type: "boolean", definition: "Adds the tab to the dropdown menu." },
  { name: "disabled", use: false, type: "boolean", definition: "Identifies if this tab is disabled." },
];

// TABS HORIZONTAL
export const TabsHorizontal: React.FC<any> = (): ReactElement => {
  return (
    <Tabs>
      <TabItem id="tab1" title="Tab label 01">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe fugit perspiciatis architecto eum voluptatem fugiat error, tempore iste? Consequatur similique quia in nam
          pariatur illum voluptatibus sit? Nobis, quae!
        </p>
      </TabItem>
      <TabItem id="tab2" title="Tab label 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident.</p>
      </TabItem>
      <TabItem id="tab3" title="Tab label 03">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam eos natus consequuntur, possimus culpa beatae vel iure! Ab, dolorem!</p>
      </TabItem>
      <TabItem id="tab4" title="Tab label 04">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde debitis tempore id tempora, totam aut tenetur fugiat quod atque laudantium quas laboriosam molestias maiores
          exercitationem, aliquam veniam, adipisci perspiciatis?
        </p>
      </TabItem>
      <TabItem id="tab5" title="Tab label 05">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum atque et, aut fuga incidunt quas. Vel odio quis excepturi in molestiae architecto eveniet, fugiat culpa est velit
          aliquam ea recusandae totam perspiciatis sapiente ab, fuga odit cum blanditiis vitae.
        </p>
      </TabItem>
    </Tabs>
  );
};

export const tabs_horizontal = `
import React, { ReactElement } from "react";
import Tabs, { TabItem } from "stepone-ui/tabs";

export const TabsHorizontal: React.FC<any> = (): ReactElement => {
  return (
    <Tabs>
      <TabItem id="tab1" title="Tab label 01">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe fugit perspiciatis architecto eum voluptatem fugiat error, tempore iste? Consequatur similique quia in nam
          pariatur illum voluptatibus sit? Nobis, quae!
        </p>
      </TabItem>
      <TabItem id="tab2" title="Tab label 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident.</p>
      </TabItem>
      <TabItem id="tab3" title="Tab label 03">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam eos natus consequuntur, possimus culpa beatae vel iure! Ab, dolorem!</p>
      </TabItem>
      <TabItem id="tab4" title="Tab label 04">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde debitis tempore id tempora, totam aut tenetur fugiat quod atque laudantium quas laboriosam molestias maiores
          exercitationem, aliquam veniam, adipisci perspiciatis?
        </p>
      </TabItem>
      <TabItem id="tab5" title="Tab label 05">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum atque et, aut fuga incidunt quas. Vel odio quis excepturi in molestiae architecto eveniet, fugiat culpa est velit
          aliquam ea recusandae totam perspiciatis sapiente ab, fuga odit cum blanditiis vitae.
        </p>
      </TabItem>
    </Tabs>
  );
};

export default TabsHorizontal
`;

// TABS VERTICAL
export const TabsVertical: React.FC<any> = (): ReactElement => {
  return (
    <Tabs vertical>
      <TabItem id="tab1" title="Tab label 01">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe fugit perspiciatis architecto eum voluptatem fugiat error, tempore iste? Consequatur similique quia in nam
          pariatur illum voluptatibus sit? Nobis, quae!
        </p>
      </TabItem>
      <TabItem id="tab2" title="Tab label 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident.</p>
      </TabItem>
      <TabItem id="tab3" title="Tab label 03">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam eos natus consequuntur, possimus culpa beatae vel iure! Ab, dolorem!</p>
      </TabItem>
      <TabItem id="tab4" title="Tab label 04">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde debitis tempore id tempora, totam aut tenetur fugiat quod atque laudantium quas laboriosam molestias maiores
          exercitationem, aliquam veniam, adipisci perspiciatis?
        </p>
      </TabItem>
      <TabItem id="tab5" title="Tab label 05">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum atque et, aut fuga incidunt quas. Vel odio quis excepturi in molestiae architecto eveniet, fugiat culpa est velit
          aliquam ea recusandae totam perspiciatis sapiente ab, fuga odit cum blanditiis vitae.
        </p>
      </TabItem>
    </Tabs>
  );
};

export const tabs_vertical = `
import React, { ReactElement } from "react";
import Tabs, { TabItem } from "stepone-ui/tabs";

export const TabsVertical: React.FC<any> = (): ReactElement => {
  return (
    <Tabs vertical>
      <TabItem id="tab1" title="Tab label 01">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe fugit perspiciatis architecto eum voluptatem fugiat error, tempore iste? Consequatur similique quia in nam
          pariatur illum voluptatibus sit? Nobis, quae!
        </p>
      </TabItem>
      <TabItem id="tab2" title="Tab label 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident.</p>
      </TabItem>
      <TabItem id="tab3" title="Tab label 03">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam eos natus consequuntur, possimus culpa beatae vel iure! Ab, dolorem!</p>
      </TabItem>
      <TabItem id="tab4" title="Tab label 04">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde debitis tempore id tempora, totam aut tenetur fugiat quod atque laudantium quas laboriosam molestias maiores
          exercitationem, aliquam veniam, adipisci perspiciatis?
        </p>
      </TabItem>
      <TabItem id="tab5" title="Tab label 05">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum atque et, aut fuga incidunt quas. Vel odio quis excepturi in molestiae architecto eveniet, fugiat culpa est velit
          aliquam ea recusandae totam perspiciatis sapiente ab, fuga odit cum blanditiis vitae.
        </p>
      </TabItem>
    </Tabs>
  );
};

export default TabsVertical
`;

// TABS COLLAPSED
export const TabsCollapsed: React.FC<any> = (): ReactElement => {
  return (
    <Tabs>
      <TabItem collapsed id="tab1" title="Tab label 01">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe fugit perspiciatis architecto eum voluptatem fugiat error, tempore iste? Consequatur similique quia in nam
          pariatur illum voluptatibus sit? Nobis, quae!
        </p>
      </TabItem>
      <TabItem id="tab2" title="Tab label 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident.</p>
      </TabItem>
      <TabItem collapsed id="tab3" title="Tab label 03">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam eos natus consequuntur, possimus culpa beatae vel iure! Ab, dolorem!</p>
      </TabItem>
      <TabItem id="tab4" title="Tab label 04">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde debitis tempore id tempora, totam aut tenetur fugiat quod atque laudantium quas laboriosam molestias maiores
          exercitationem, aliquam veniam, adipisci perspiciatis?
        </p>
      </TabItem>
      <TabItem id="tab5" title="Tab label 05">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum atque et, aut fuga incidunt quas. Vel odio quis excepturi in molestiae architecto eveniet, fugiat culpa est velit
          aliquam ea recusandae totam perspiciatis sapiente ab, fuga odit cum blanditiis vitae.
        </p>
      </TabItem>
    </Tabs>
  );
};

export const tabs_collapsed = `
import React, { ReactElement } from "react";
import Tabs, { TabItem } from "stepone-ui/tabs";

export const TabsCollapsed: React.FC<any> = (): ReactElement => {
  return (
    <Tabs>
      <TabItem collapsed id="tab1" title="Tab label 01">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe fugit perspiciatis architecto eum voluptatem fugiat error, tempore iste? Consequatur similique quia in nam
          pariatur illum voluptatibus sit? Nobis, quae!
        </p>
      </TabItem>
      <TabItem id="tab2" title="Tab label 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident.</p>
      </TabItem>
      <TabItem collapsed id="tab3" title="Tab label 03">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam eos natus consequuntur, possimus culpa beatae vel iure! Ab, dolorem!</p>
      </TabItem>
      <TabItem id="tab4" title="Tab label 04">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde debitis tempore id tempora, totam aut tenetur fugiat quod atque laudantium quas laboriosam molestias maiores
          exercitationem, aliquam veniam, adipisci perspiciatis?
        </p>
      </TabItem>
      <TabItem id="tab5" title="Tab label 05">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum atque et, aut fuga incidunt quas. Vel odio quis excepturi in molestiae architecto eveniet, fugiat culpa est velit
          aliquam ea recusandae totam perspiciatis sapiente ab, fuga odit cum blanditiis vitae.
        </p>
      </TabItem>
    </Tabs>
  );
};

export default TabsCollapsed
`;

// TABS DISABLED
export const TabsDisabled: React.FC<any> = (): ReactElement => {
  return (
    <Tabs>
      <TabItem collapsed disabled id="tab1" title="Tab label 01">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe fugit perspiciatis architecto eum voluptatem fugiat error, tempore iste? Consequatur similique quia in nam
          pariatur illum voluptatibus sit? Nobis, quae!
        </p>
      </TabItem>
      <TabItem disabled id="tab2" title="Tab label 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident.</p>
      </TabItem>
      <TabItem collapsed disabled id="tab3" title="Tab label 03">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam eos natus consequuntur, possimus culpa beatae vel iure! Ab, dolorem!</p>
      </TabItem>
      <TabItem id="tab4" title="Tab label 04">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde debitis tempore id tempora, totam aut tenetur fugiat quod atque laudantium quas laboriosam molestias maiores
          exercitationem, aliquam veniam, adipisci perspiciatis?
        </p>
      </TabItem>
      <TabItem id="tab5" title="Tab label 05">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum atque et, aut fuga incidunt quas. Vel odio quis excepturi in molestiae architecto eveniet, fugiat culpa est velit
          aliquam ea recusandae totam perspiciatis sapiente ab, fuga odit cum blanditiis vitae.
        </p>
      </TabItem>
    </Tabs>
  );
};

export const tabs_disabled = `
import React, { ReactElement } from "react";
import Tabs, { TabItem } from "stepone-ui/tabs";

export const TabsDisabled: React.FC<any> = (): ReactElement => {
  return (
    <Tabs>
      <TabItem collapsed disabled id="tab1" title="Tab label 01">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe fugit perspiciatis architecto eum voluptatem fugiat error, tempore iste? Consequatur similique quia in nam
          pariatur illum voluptatibus sit? Nobis, quae!
        </p>
      </TabItem>
      <TabItem disabled id="tab2" title="Tab label 02">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, provident.</p>
      </TabItem>
      <TabItem collapsed disabled id="tab3" title="Tab label 03">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam eos natus consequuntur, possimus culpa beatae vel iure! Ab, dolorem!</p>
      </TabItem>
      <TabItem id="tab4" title="Tab label 04">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde debitis tempore id tempora, totam aut tenetur fugiat quod atque laudantium quas laboriosam molestias maiores
          exercitationem, aliquam veniam, adipisci perspiciatis?
        </p>
      </TabItem>
      <TabItem id="tab5" title="Tab label 05">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum harum atque et, aut fuga incidunt quas. Vel odio quis excepturi in molestiae architecto eveniet, fugiat culpa est velit
          aliquam ea recusandae totam perspiciatis sapiente ab, fuga odit cum blanditiis vitae.
        </p>
      </TabItem>
    </Tabs>
  );
};

export default TabsDisabled
`;
