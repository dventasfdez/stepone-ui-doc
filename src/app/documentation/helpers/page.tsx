export default function Helpers() {
  return (
    <>
      <div className="markdown prose w-full break-words dark:prose-invert light">
        <h2>CSS Helpers</h2>
        <p>
          StepOne offers a comprehensive set of CSS helper classes that can greatly simplify your web development workflow and help you achieve consistent and visually appealing designs. These helper
          classes allow you to easily modify display properties, control margins and paddings, manage responsive visibility, set text and background colors, and more. Let&apos;s explore the CSS
          helpers provided by StepOne.
        </p>
        <h3>Display Utilities</h3>
        <p>
          StepOne provides a range of display utility classes that enable you to control the visibility and positioning of elements on your web page. These classes can be used to show or hide elements
          on specific screen sizes or toggle their display behavior.
        </p>
        <ul>
          <li>
            <code>.d-none</code> - Hides an element on all screen sizes.
          </li>
          <li>
            <code>.d-block</code> - Displays an element as a block-level element.
          </li>
          <li>
            <code>.d-inline</code> - Displays an element as an inline-level element.
          </li>
          <li>
            <code>.d-inline-block</code> - Displays an element as an inline-block element.
          </li>
          <li>
            <code>.d-sm-none</code>, <code>.d-md-none</code>, <code>.d-lg-none</code>, <code>.d-xl-none</code> - Hides an element on specific screen sizes.
          </li>
          <li>
            <code>.d-sm-block</code>, <code>.d-md-block</code>, <code>.d-lg-block</code>, <code>.d-xl-block</code> - Displays an element as a block-level element on specific screen sizes.
          </li>
        </ul>
        <h3>Margins and Paddings</h3>
        <p>
          StepOne includes classes for managing margins and paddings on elements. These classes provide predefined values for consistent spacing and help create visual separation between elements.
        </p>
        <ul>
          <li>
            <code>.m-1</code>, <code>.m-2</code>, <code>.m-3</code>, ... - Adds margin to an element with various predefined values.
          </li>
          <li>
            <code>.p-1</code>, <code>.p-2</code>, <code>.p-3</code>, ... - Adds padding to an element with various predefined values.
          </li>
          <li>
            <code>.mx-auto</code> - Centers an element horizontally by setting the left and right margins to auto.
          </li>
          <li>
            <code>.my-auto</code> - Centers an element vertically by setting the top and bottom margins to auto.
          </li>
        </ul>
        <h3>Responsive Visibility</h3>
        <p>
          StepOne offers classes to control the visibility of elements based on different screen sizes. These classes allow you to show or hide elements selectively, depending on the viewport width.
        </p>
        <ul>
          <li>
            <code>.visible-sm</code>, <code>.visible-md</code>, <code>.visible-lg</code>, <code>.visible-xl</code> - Makes an element visible on specific screen sizes.
          </li>
          <li>
            <code>.hidden-sm</code>, <code>.hidden-md</code>, <code>.hidden-lg</code>, <code>.hidden-xl</code> - Hides an element on specific screen sizes.
          </li>
        </ul>
        <h3>Text Colors</h3>
        <p>StepOne provides classes for setting text colors. These classes can be used to quickly apply predefined text colors to elements.</p>
        <ul>
          <li>
            <code>.text-primary</code> - Sets the text color to the primary color defined by StepOne.
          </li>
          <li>
            <code>.text-secondary</code> - Sets the text color to the secondary color defined by StepOne.
          </li>
          <li>
            <code>.text-success</code>, <code>.text-info</code>, <code>.text-warning</code>, <code>.text-danger</code> - Sets the text color to specific predefined colors.
          </li>
        </ul>
        <h3>Background Colors</h3>
        <p>StepOne also includes classes for setting background colors. These classes allow you to easily apply predefined background colors to elements.</p>
        <ul>
          <li>
            <code>.bg-primary</code> - Sets the background color to the primary color defined by StepOne.
          </li>
          <li>
            <code>.bg-secondary</code> - Sets the background color to the secondary color defined by StepOne.
          </li>
          <li>
            <code>.bg-success</code>, <code>.bg-info</code>, <code>.bg-warning</code>, <code>.bg-danger</code> - Sets the background color to specific predefined colors.
          </li>
        </ul>
        <p>
          These CSS helper classes provided by StepOne can significantly streamline your development process and help you achieve consistent and visually appealing designs. By utilizing these classes,
          you can easily control the display behavior, manage spacing, adjust responsive visibility, and apply text and background colors to elements on your web pages.
        </p>
      </div>
    </>
  );
}
