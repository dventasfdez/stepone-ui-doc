import React, { ReactElement, createRef } from "react";
// import { addNotification } from "../../../shared/notifications/notifications-service";
// import { toLiteral } from "../../../../helper/locale-utils";
import { CheckboxInput, Form, SelectInput, TextArea, TextInput, serializeForm } from "stepone-ui/forms";

export const forms_props = [
  { name: "defaultColumns", use: true, type: "Columns", link: true, definition: "The list of all the possible colums" },
  { name: "columns", use: true, type: "Columns", link: true, definition: "The list of collumns that the user has selected to show" },
  { name: "fetchResults", use: true, type: "Function", definition: "The function that retrieves the data that will be displayed in the results. Needs to be async." },
  {
    name: "filterOnChange",
    use: false,
    type: "boolean",
    definition: "If you want the results to refresh when any input inside it changes or only when submit is triggered",
  },
];

// SIMPLE FORM EXAMPLE
export const SimpleForm: React.FC<any> = (): ReactElement => {
  const handleSubmit = async (event: any) => {
    const isValid_HTML = event.target.isValid;
    //const values_HTML = serializeForm(event.target);
    // if (isValid_HTML) {
    //   try {
    //     console.log(values_HTML);
    //     addNotification({ type: "success", content: "Check the console to see the values", timer: 3 });
    //   } catch (err: any) {
    //     addNotification({ type: "error", content: err?.message, timer: 3 });
    //   }
    // } else addNotification({ type: "error", content: toLiteral({ id: "Check your entries" }) });
  };

  let formRef: any = createRef();

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <TextInput label="Text Input" name="textinput" type="text" />
      <TextArea label="Text Area" name="textarea" type="text" />
      <SelectInput label="Select" name="myselect">
        <option value="">Select value 0</option>
        <option value="1">Select value 1</option>
      </SelectInput>
      <fieldset>
        <CheckboxInput name="checkboxName" label="checkbox 1" value="value2" />
        <CheckboxInput name="checkboxName" label="checkbox 2" value="value2" />
      </fieldset>
      <button type="submit">Submit</button>
    </Form>
  );
};

export const simple_result = `
import React, { ReactElement, createRef } from "react";
import { CheckboxInput, Form, SelectInput, TextArea, TextInput, serializeForm } from "../../shared/forms";
import { addNotification } from "../../shared/notifications/notifications-service";
import { toLiteral } from "../../../helper/locale-utils";

export const SimpleForm: React.FC<any> = (): ReactElement => {
    const handleSubmit = async (event: any) => {
      const isValid_HTML = event.target.isValid;
      const values_HTML = serializeForm(event.target);
      if (isValid_HTML) {
        try {
          console.log(values_HTML);
          addNotification({ type: "success", content: "Check the console to see the values", timer: 3 });
        } catch (err: any) {
          addNotification({ type: "error", content: err?.message, timer: 3 });
        }
      } else addNotification({ type: "error", content: toLiteral({ id: "Check your entries" }) });
    };
  
    let formRef: any = createRef();
  
    return (
      <Form ref={formRef} onSubmit={handleSubmit}>
        <TextInput label="Text Input" name="textinput" type="text" />
        <TextArea label="Text Area" name="textarea" type="text" />
        <SelectInput label="Select" name="myselect">
          <option value="">Select value 0</option>
          <option value="1">Select value 1</option>
        </SelectInput>
        <fieldset>
          <CheckboxInput name="checkboxName" label="checkbox 1" value="value2" />
          <CheckboxInput name="checkboxName" label="checkbox 2" value="value2" />
        </fieldset>
        <button type="submit">Submit</button>
      </Form>
    );
  };

export default SimpleForm
`;
