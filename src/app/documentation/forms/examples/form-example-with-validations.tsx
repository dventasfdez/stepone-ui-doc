import { addNotification } from "@/components/shared/notifications/notifications-service";
import React, { ReactElement } from "react";

import { Form, TextInput, CheckboxInput, SelectInput, TextArea, serializeForm } from "stepone-ui/forms";
const validationIsGood = undefined;

let formRef: any = undefined;
export const required = (value: string | string[] | undefined) => {
  if (typeof value === "number") {
    return validationIsGood;
  }
  if (typeof value === "object") {
    const value2: any = value;
    if (value2?.type === "FileSelector") {
      if (!value2?.state?.value) {
        return "Required";
      }
    } else if (!value?.length) {
      return "Required";
    }
  } else if (typeof value === "string") {
    if (value.replace(/\s/g, "").length > 0) {
      return validationIsGood;
    } else {
      return "Required";
    }
  } else if (value !== null && typeof value !== "undefined") {
    return validationIsGood;
  } else {
    return "Required";
  }
};
const handleSubmit = async (event: any) => {
  const isValid_react = await formRef.current.isValid();
  const values_react = formRef.current.serialize();
  if (isValid_react) {
    console.log(values_react);
    addNotification({ type: "success", content: "Check the console to see the values", timer: 3 });
  } else {
    addNotification({ type: "error", content: "Check your entries", timer: 3 });
    console.info("Form is invalid", values_react);
  }
};

const customValidationFunction = (value: any, _context: any, inputComponent: any) => {
  if (value !== "Good morning") {
    return "Value is wrong, needs to be 'Good morning'";
  }
};

const onChange = async (event: any) => {
  const _form = formRef.current as Form;
  const values_react = _form.serialize(); //you can exclude the empty values adding "true" as parameter
  console.info("Input changed", values_react);
};

export const FormExampleWithValidations: React.FC = (): ReactElement => {
  formRef = React.createRef();
  return (
    <Form ref={formRef} onSubmit={handleSubmit} onChange={onChange} values={{ textInput: "Good afternoon", color: ["blue"] }}>
      <TextInput validations={[required, customValidationFunction]} label="Text input" placeholder="enabled" name="textInput" type="text" validateOnChange={true} />
      <TextInput validations={[required]} label="Nested props example" placeholder="enabled" name="nestedObject[0].property" type="text" validateOnChange={true} />
      <TextArea validations={[required]} label="Textarea" placeholder="example" name="textarea" type="text" />
      <SelectInput label="Select" name="myselect" validations={[required]}>
        <option value="">Select</option>
        <option value="1">Select value 1</option>
      </SelectInput>
      <CheckboxInput validations={[required]} name="color" label="Color red" value="red" />
      <CheckboxInput validations={[required]} name="color" label="Color blue" value="blue" />
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default FormExampleWithValidations;

export const form_validations_example = `
import React, { ReactElement } from "react";
import { required } from "../../../../components/shared/forms/utilities/validations";
import { Form, TextInput, CheckboxInput, SelectInput, TextArea } from "../../../../components/shared/forms";
import { addNotification } from "../../../shared/notifications/notifications-service";

let formRef: any = undefined;

const handleSubmit = async (event: any) => {
  const isValid_react = await formRef.current.isValid();
  const values_react = formRef.current.serialize();
  if (isValid_react) {
    console.log(values_react);
    addNotification({ type: "success", content: "Check the console to see the values", timer: 3 });
  } else {
    addNotification({ type: "error", content: "Check your entries", timer: 3 });
    console.info("Form is invalid", values_react);
  }
};

const customValidationFunction = (value: any, _context: any, inputComponent: any) => {
  if (value !== "Good morning") {
    return "Value is wrong, needs to be 'Good morning'";
  }
};

const onChange = async (event: any) => {
  const _form = formRef.current as Form;
  const values_react = _form.serialize(); //you can exclude the empty values adding "true" as parameter
  console.info("Input changed", values_react);
};

export const FormExampleWithValidations: React.FC = (): ReactElement => {
  formRef = React.createRef();
  return (
    <Form ref={formRef} onSubmit={handleSubmit} onChange={onChange} values={{ textInput: "Good afternoon", color: ["blue"] }}>
      <TextInput validations={[required, customValidationFunction]} label="Text input" placeholder="enabled" name="textInput" type="text" validateOnChange={true} />
      <TextInput validations={[required]} label="Nested props example" placeholder="enabled" name="nestedObject[0].property" type="text" validateOnChange={true} />
      <TextArea validations={[required]} label="Textarea" placeholder="example" name="textarea" type="text" />
      <SelectInput label="Select" name="myselect" validations={[required]}>
        <option value="">Select</option>
        <option value="1">Select value 1</option>
      </SelectInput>
      <CheckboxInput validations={[required]} name="color" label="Color red" value="red" />
      <CheckboxInput validations={[required]} name="color" label="Color blue" value="blue" />
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default FormExampleWithValidations;



`;
