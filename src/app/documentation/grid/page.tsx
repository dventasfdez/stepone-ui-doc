import ComponentExample from "@/components/content/documentantion/ComponentExample";
import GridExample16Columns, { grid_example_16 } from "./grid-example-16-columns";
import GridExample12Columns, { grid_example_12 } from "./grid-example-12-columns";

export default function Grid() {
  return (
    <>
      <div className="markdown prose w-full break-words dark:prose-invert light">
        <h1>Grid</h1>
        <p>
          StepOne&apos;s grid system allows you to create flexible and responsive layouts for your web pages. With a simple and intuitive approach, you can easily structure your content into rows and
          columns. Let&apos;s dive into the details of StepOne&apos;s grid system and learn how to use it effectively.
        </p>
        <h3>Definition</h3>
        <p>This grid system must be defined by classes. We have two posibilities of grid:</p>
        <ul>
          <li>Grid based in 16 columns: The parent element must contain the class .g-container.</li>
          <li>Grid based in 12 columns: The parent element must contain the class .g-container_12.</li>
        </ul>
        <p>
          Within this parent element there must always be a child element with the class .clearfix. All child elements of each element of the grid system shall have a default spacing and padding of
          8px.
        </p>

        <section>
          <h2>Grid based on 16 columns</h2>
          <h3>Desktop</h3>
          <p>To organise the items within our grid when we are in a desktop size, we have the following classes:</p>
          <ul>
            <li>g-item_16: This item will occupied all columns in the grid.</li>
            <li>g-item_15: This item will occupied 15 columns in the grid.</li>
            <li>g-item_14: This item will occupied 14 columns in the grid.</li>
            <li>g-item_13: This item will occupied 13 columns in the grid.</li>
            <li>g-item_12: This item will occupied 12 columns in the grid.</li>
            <li>g-item_11: This item will occupied 11 columns in the grid.</li>
            <li>g-item_10: This item will occupied 10 columns in the grid.</li>
            <li>g-item_9: This item will occupied 9 columns in the grid.</li>
            <li>g-item_8: This item will occupied 8 columns in the grid.</li>
            <li>g-item_7: This item will occupied 7 columns in the grid.</li>
            <li>g-item_6: This item will occupied 6 columns in the grid.</li>
            <li>g-item_5: This item will occupied 5 columns in the grid.</li>
            <li>g-item_4: This item will occupied 4 columns in the grid.</li>
            <li>g-item_4: This item will occupied 3 columns in the grid.</li>
            <li>g-item_2: This item will occupied 2 columns in the grid.</li>
            <li>g-item_1: This item will occupied 1 columns in the grid.</li>
          </ul>
          <ComponentExample language="xml" codeExample={[{ name: "simple-form.tsx", code: grid_example_16, language: "xml" }]} componentExample={<GridExample16Columns />} />
          <h3>Tablet</h3>
          <p>In tablet this option will converted in grid based in 8 columns.</p>
          <p>
            In the case of a tablet, all the elements with the above classes will occupy all the columns in our grid system. So if we wanted to organise the columns also on a tablet we would have the
            following classes:
          </p>
          <ul>
            <li>g-item-tablet_8: This item will occupied 8 columns in the grid.</li>
            <li>g-item-tablet_7: This item will occupied 7 columns in the grid.</li>
            <li>g-item-tablet_6: This item will occupied 6 columns in the grid.</li>
            <li>g-item-tablet_5: This item will occupied 5 columns in the grid.</li>
            <li>g-item-tablet_4: This item will occupied 4 columns in the grid.</li>
            <li>g-item-tablet_4: This item will occupied 3 columns in the grid.</li>
            <li>g-item-tablet_2: This item will occupied 2 columns in the grid.</li>
            <li>g-item-tablet_1: This item will occupied 1 columns in the grid.</li>
          </ul>
          <h3>Mobile</h3>
          <p>In mobile this option will converted in grid based in 4 columns.</p>
          <p>
            In the case of a mobile phone, all the elements with the above classes will occupy all the columns in our grid system. So if we want to organise the columns also in a mobile we would have
            the following options:
          </p>
          <ul>
            <li>g-item-mobile_4: This item will occupied 4 columns in the grid.</li>
            <li>g-item-mobile_4: This item will occupied 3 columns in the grid.</li>
            <li>g-item-mobile_2: This item will occupied 2 columns in the grid.</li>
            <li>g-item-mobile_1: This item will occupied 1 columns in the grid.</li>
          </ul>
        </section>
        <section>
          <h2>Grid based on 12 columns</h2>
          <h3>Desktop</h3>
          <p>To organise the items within our grid when we are in a desktop size, we have the following classes:</p>

          <ul>
            <li>g-item_12: This item will occupied 12 columns in the grid.</li>
            <li>g-item_11: This item will occupied 11 columns in the grid.</li>
            <li>g-item_10: This item will occupied 10 columns in the grid.</li>
            <li>g-item_9: This item will occupied 9 columns in the grid.</li>
            <li>g-item_8: This item will occupied 8 columns in the grid.</li>
            <li>g-item_7: This item will occupied 7 columns in the grid.</li>
            <li>g-item_6: This item will occupied 6 columns in the grid.</li>
            <li>g-item_5: This item will occupied 5 columns in the grid.</li>
            <li>g-item_4: This item will occupied 4 columns in the grid.</li>
            <li>g-item_4: This item will occupied 3 columns in the grid.</li>
            <li>g-item_2: This item will occupied 2 columns in the grid.</li>
            <li>g-item_1: This item will occupied 1 columns in the grid.</li>
          </ul>
          <ComponentExample codeExample={[{ name: "simple-form.tsx", code: grid_example_12, language: "xml" }]} componentExample={<GridExample12Columns />} />
          <h3>Tablet</h3>
          <p>In tablet this option will converted in grid based in 6 columns.</p>
          <p>
            In the case of a tablet, all the elements with the above classes will occupy all the columns in our grid system. So if we wanted to organise the columns also on a tablet we would have the
            following classes:
          </p>
          <ul>
            <li>g-item-tablet_6: This item will occupied 6 columns in the grid.</li>
            <li>g-item-tablet_5: This item will occupied 5 columns in the grid.</li>
            <li>g-item-tablet_4: This item will occupied 4 columns in the grid.</li>
            <li>g-item-tablet_4: This item will occupied 3 columns in the grid.</li>
            <li>g-item-tablet_2: This item will occupied 2 columns in the grid.</li>
            <li>g-item-tablet_1: This item will occupied 1 columns in the grid.</li>
          </ul>
          <h3>Mobile</h3>
          <p>In mobile this option will converted in grid based in 3 columns.</p>
          <p>
            In the case of a mobile phone, all the elements with the above classes will occupy all the columns in our grid system. So if we want to organise the columns also in a mobile we would have
            the following options:
          </p>
          <ul>
            <li>g-item-mobile_3: This item will occupied 3 columns in the grid.</li>
            <li>g-item-mobile_2: This item will occupied 2 columns in the grid.</li>
            <li>g-item-mobile_1: This item will occupied 1 columns in the grid.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
