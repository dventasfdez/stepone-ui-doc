"use client";
import React, { ReactElement } from "react";

import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";

import Accordion, { AccordionHeader, AccordionContent } from "stepone-ui/accordion";
import Card, { CardHeader, CardBody } from "stepone-ui/card";

import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

import { SimpleForm, simple_result } from "./examples/form-examples";
import ComponentExample from "../ComponentExample";
import { FormExampleWithValidations, form_validations_example } from "./examples/form-example-with-validations";

const FormGuideline: React.FC<any> = (): ReactElement => {
  return (
    <div>
      <h3 className="mb4">Forms</h3>
      <div className=" mb4">
        <Accordion filled>
          <AccordionHeader>List of contents</AccordionHeader>
          <AccordionContent>
            <ol>
              <li>
                <a href="#form-examples">Form examples</a>
                <br />
                <small>List of use cases of forms and their code</small>
                <ul>
                  <li>
                    <a href="#simple-form">Simple form</a>
                  </li>
                  <li>
                    <a href="#typical-form">Typical form with validations, initial values and input change events</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#validations">Validations</a>
                <ul>
                  <li>
                    <a href="#default-validations">Default validations</a>
                    <br />
                    <small>required, email, url, date, datefrom-date-to, max & min length, uuid, numeric, alphanumeric, alphabet, mymetype, file size</small>
                  </li>
                  <li>
                    <a href="#custom-validations">Custom validations</a>
                    <br />
                    <small>How to add your own validations to an input</small>
                  </li>
                  <li>
                    <a href="#async-validations">Asyncronous validations</a>
                    <br />
                    <small>Usage of async functions, like calls to an API to verify a value</small>
                  </li>
                  <li>
                    <a href="#multiple-field-dependencies">Multiple fields dependencies</a>
                    <br />
                    <small>How to validate when a field depends on another (or many others)</small>
                  </li>
                  <li>
                    <a href="#validate-on-field-props">Validate depending on field state or field props</a>
                    <br />
                    <small>How to validate when a field depends on its own property or state</small>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#serialization">Serialization</a>
                <ul>
                  <li>
                    <a href="#initial-values">Initial form values</a>
                    <br />
                    <small>How to pre-set values in a form</small>
                  </li>
                  <li>
                    <a href="#complex-objects">Complex object serialization</a>
                    <br />
                    <small>How to serialize a form when we need to build complex Javascript objects</small>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#events">Events</a>
                <ul>
                  <li>
                    <a href="#event-submit">onSubmit</a>
                  </li>
                  <li>
                    <a href="#event-input-change">onInputChange</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#external-methods">External methods</a>
                <ul>
                  <li>
                    <a href="#external-methods-validate">Valdiate inputs</a>
                  </li>
                  <li>
                    <a href="#external-methods-submit">Submit form</a>
                  </li>
                  <li>
                    <a href="#external-methods-reset">Reset values</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#known-limitations">Known limitations and ways around them</a>
                <ul>
                  <li>
                    <a href="#nesting-forms">Nesting forms and modals inside a form</a>
                  </li>
                  <li>
                    <a href="#button-types">Not adding "type"="button" to a button</a>
                  </li>
                </ul>
              </li>

              {/* this is not code Sonar :) <li>
                <a href="#simple-form">Inputs</a>
                <ul>
                  <li>
                    <a href="#simple-form">Basic Input types</a>
                    <ul>
                      <li>
                        <a href="#simple-form">Text</a>
                        <ul>
                          <li>
                            <a href="#simple-form">Text subtypes: Email, Date, Time, Url, Password...</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#simple-form">Textarea</a>
                      </li>
                      <li>
                        <a href="#simple-form">Number</a>
                      </li>
                      <li>
                        <a href="#simple-form">Hidden</a>
                      </li>
                      <li>
                        <a href="#simple-form">Select</a>
                      </li>
                      <li>
                        <a href="#simple-form">Checkbox</a>
                      </li>
                      <li>
                        <a href="#simple-form">Radio</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#simple-form">Input supersets</a>
                    <ul>
                      <li>
                        <a href="#simple-form">Wysiwyg</a>
                      </li>
                      <li>
                        <a href="#simple-form">Select filter</a>
                      </li>
                      <li>
                        <a href="#simple-form">Switch</a>
                      </li>
                      <li>
                        <a href="#simple-form">File uploader</a>
                      </li>
                      <li>
                        <a href="#simple-form">Date pickers</a>
                      </li>
                      <li>
                        <a href="#simple-form">Search input</a>
                      </li>
                      <li>
                        <a href="#simple-form">Range input</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> ignore this baby */}
            </ol>
          </AccordionContent>
        </Accordion>
      </div>

      <div className="mb6">
        <p>The Form component allows you to simply validate, serialize, automatically set values to the inputs inside it.</p>
        <p>
          The form component uses React context in order to work and for the form to "be aware" of the inputs inside it. Then it generates a contexts, then when the inputs detect that context and get
          listed at the form level, so the form will be able to change the state on them.{" "}
        </p>
        <p>This way the values passed to a form as a Javascript object can be applied to the fields automatically, but also run the validatios and set them to valid/invalid.</p>
      </div>

      <div id="form-examples">
        <h4>Form examples</h4>
        <hr className="mb4" />

        <div className="mb6" id="simple-form">
          <Card>
            <CardHeader>
              <h4>Simple form</h4>
              <span className="subtitle"></span>
            </CardHeader>
            <CardBody>
              <p>
                It's a form on it's simpliest sape, just a form with some inputs that when clicking the submit button serialices its values, check in the code the function "handleSubmit" to see how it
                deals with the form submit output
              </p>
              <Notification show info className="static-notification mb4">
                <NotificationHeader>Info</NotificationHeader>
                <NotificationBody>Check the "onSubmit" property and the handleSubmit function passed in the example</NotificationBody>
              </Notification>
              <ComponentExample codeExample={[{ name: "simple-form.tsx", code: simple_result }]} componentExample={<SimpleForm />} />
            </CardBody>
          </Card>
        </div>

        <div className="mb6" id="typical-form">
          <Card>
            <CardHeader>
              <h4>Form with validations, initial values and input change events</h4>
              <span className="subtitle"></span>
            </CardHeader>
            <CardBody>
              <p>This is a form that contains validations, including custom ones and asyncronous ones.</p>
              <Notification show info className="static-notification mb4">
                <NotificationBody>Note how to set a custon validation function in the code "customValidationFunction"</NotificationBody>
              </Notification>
              <p>It also sets the initial values passed to the Form component using the "values" property.</p>
              <Notification show info className="static-notification mb4">
                <NotificationBody>See also the nested javascript in the values pass to the form and in the output of the serialization (in the console)</NotificationBody>
              </Notification>
              <p>And binds any change in any input using the prop "onChange" of the form.</p>

              <ComponentExample codeExample={[{ name: "form-example-with-validations.tsx", code: form_validations_example }]} componentExample={<FormExampleWithValidations />} />
            </CardBody>
          </Card>
        </div>
      </div>

      <div id="validations">
        <h4>Validations</h4>
        <hr className="mb4" />
        <p>
          The validations are functions that using the value, the form context or the actual input component, apply some logic and return an error or "undefined" if the validation passes succesfully .
        </p>

        <div id="default-validations" className="mb4">
          <h5>
            <strong>Default validations</strong>
          </h5>
          <p>
            Along with the shared components for the forms there is a file that contains the most common types of validations: src\components\shared\forms\utilities\validations.tsx
            <br />
            Those validations can be used anywhere just by adding to any input the function as part of the validation array.
            <br />
            In the following example we can see an input with 2 validations: required and url.
          </p>
          <SyntaxHighlighter style={vs} language={"typecript"}>{`<TextInput validations={[required, url]} label="Text input" name="textInput" />`}</SyntaxHighlighter>
        </div>

        <div id="custom-validations" className="mb4">
          <h5>
            <strong>Custom validations</strong>
          </h5>
          <p>
            You can also create your own custom validation functions. As parameters of the validations by default you can receive: value of the input, context of the input and the input component it
            self.
          </p>
          <SyntaxHighlighter style={vs} language={"typecript"}>{`const customValidationFunction = (value: any, _context: any, inputComponent: any) => {
  if (value !== "Good morning") {
    return "Value is wrong, needs to be 'Good morning'";
  }
};
<TextInput validations={[customValidationFunction]} label="Text input" name="textInput" />
`}</SyntaxHighlighter>
        </div>

        <div id="async-validations" className="mb4">
          <h5>
            <strong>Asyncronous validations</strong>
          </h5>
          <p>You are allowed also to use async functions (for instance to call an endpoint to verify an email)</p>
          <Notification show info className="static-notification mb4">
            <NotificationBody>While the function is running the input will show a class "loading" that should display an spinnner (if it's set in the CSS)</NotificationBody>
          </Notification>
          <SyntaxHighlighter style={vs} language={"typecript"}>{`const validEmail = async (value: any, _context: any, inputComponent: any) => {
  const emailIsValid = await API.checkEmail(value);
  if(!emailIsValid) {
    return "Email is already in use";
  }
};
<TextInput validations={[validEmail]} label="Text input" name="textInput" />
`}</SyntaxHighlighter>
        </div>

        <div id="multiple-field-dependencies" className="mb4">
          <h5>
            <strong>Multiple fields dependencies</strong>
          </h5>
          <p>Using the context (parameter passed to all validation functions) you will be able to use multiple fields inside a form the logic of your custom validation function.</p>
          <p>For instance you can find another field by name like this: {`context?.inputs?.find((a: any) => a.props.name === nameToSearch);`}</p>

          <SyntaxHighlighter style={vs} language={"typecript"}>{`export const dateFrom = (value: any, context: any, inputComponent: any) => {
  try {
    let toDate = null;
    let nameToSearch = "";
    const nameField = inputComponent.props.name;
    if (inputComponent.props.name === "postStartDate") {
      nameToSearch = "postEndDate";
      toDate = context?.inputs?.find((a: any) => a.props.name === nameToSearch && a._isMounted);
    } else {
      nameToSearch = nameField.replace("start", "end");
      toDate = context?.inputs?.find((a: any) => a.props.name === nameToSearch && a._isMounted);
    }
    return moment(value, config.date_format, true) > moment(toDate.state.value, config.date_format, true) ? "End date is earlier than start date" : validationIsGood;
  } catch (error) {}
};`}</SyntaxHighlighter>
        </div>
        <div id="validate-on-field-props" className="mb4">
          <h5>
            <strong>Validate depending on field state or field props</strong>
          </h5>
          <p>Using the input component you will be able to validate the value depending on the field state or props.</p>
          <p>For instance you can check a prop of the field: {``}</p>
          <SyntaxHighlighter style={vs} language={"typecript"}>{`export const customValidation = (value: any, context: any, inputComponent: any) => {
            inputComponent?.props?.whatever === "whatever" ?? return "error, value is wrong"
          }`}</SyntaxHighlighter>
        </div>
      </div>

      <div id="serialization">
        <h4>Serialization</h4>
        <hr className="mb4" />

        <div id="initial-values" className="mb4">
          <h5>
            <strong>Set initial values</strong>
          </h5>
          <p>You can pass any javascript object to a form, it will automatically pre-set the values in those fields where the name property matches the property name.</p>

          <SyntaxHighlighter style={vs} language={"typecript"}>{`<Form  values={{ salutation: "Good afternoon", color: ["blue"] }}>
      <TextInput label="Salutation" name="salutation"  />
      <CheckboxInput  name="color" label="Color red" value="red" />
      <CheckboxInput  name="color" label="Color blue" value="blue" />
      <input type="submit" value="Submit" />
</Form>`}</SyntaxHighlighter>
        </div>

        <div id="complex-objects" className="mb4">
          <h5>
            <strong>Complex object serialization</strong>
          </h5>
          <p>You can use dots and array shape input names in order to achieve complex and nested object when serializing and adding default values</p>

          <SyntaxHighlighter style={vs} language={"typecript"}>{`  <TextInput  label="Example" name="nestedObject[0].property" />`}</SyntaxHighlighter>
          <p className="mt4"> In the following case, the output would be: </p>

          <SyntaxHighlighter style={vs} language={"json"}>{`{ "nestedObject": [ { "property": "Value example" } ] }`}</SyntaxHighlighter>
        </div>
      </div>

      <div id="events">
        <h4>Events</h4>

        <hr className="mb4" />

        <div className="mb4" id="event-submit">
          <h5>
            <strong>Form submit</strong>
          </h5>
          <p>You can trigger a function when the form submits, passing that function to the onSubmit property of the form. </p>
          <p>The parameter passed to that function will be the submit event. See the following example:</p>

          <SyntaxHighlighter style={vs} language={"typecript"}>{`const handleSubmit = async (event: any) => {
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
  <Form ref={formRef} onSubmit={handleSubmit}>
      <TextInput label="Text Input" name="textinput" type="text" />
      <button type="submit">Submit</button>
  </Form>`}</SyntaxHighlighter>
        </div>

        <div className="mb4" id="event-input-change">
          <h5>
            <strong>When an input changes</strong>
          </h5>
          <p>You can trigger a function when any of the form inputs change:</p>

          <SyntaxHighlighter style={vs} language={"typecript"}>{`const handleInputChange = async (event: any) => { 
        addNotification({ type: "success", content: "Something has changed!", timer: 3 });       
  };
  <Form ref={formRef} onChange={handleInputChange}>
      <TextInput label="Text Input" name="textinput" type="text" />
      <button type="submit">Submit</button>
  </Form>`}</SyntaxHighlighter>
        </div>
      </div>

      <div id="external-methods">
        <h4>External methods</h4>

        <hr className="mb4" />

        <p>Here we'll describe the methods that you can use from outside the form.</p>

        <div className="mb4" id="external-methods-validate">
          <h5>
            <strong>Valdiate inputs</strong>
          </h5>
          <p>You have 2 options to trigger the validation (without triggering the submit).</p>
          <p>This will update the state of each input (showing the error or success classes) depending on their value and validation rules.</p>
          <p>
            <strong>formRef.current.getValidation()</strong>: returns a verbose validation output, describing the errors and components of all inputs.
          </p>
          <SyntaxHighlighter className="mb4" style={vs} language={"typecript"}>{` const isValid = await formRef?.current?.isValid();`}</SyntaxHighlighter>
          <p>
            <strong>formRef.current.isValid()</strong>: returns true or false.
          </p>

          <SyntaxHighlighter className="mb4" style={vs} language={"typecript"}>{`const validationOutput = await formRef.current.getValidation();`}</SyntaxHighlighter>
        </div>

        <div className="mb4" id="external-methods-submit">
          <h5>
            <strong>Submit a form remotely</strong>
          </h5>
          <p>You can force a form to submit remotely using it's reference</p>
          <SyntaxHighlighter style={vs} language={"typecript"}>{` formRef.current.submit()`}</SyntaxHighlighter>
        </div>

        <div className="mb4" id="external-methods-reset">
          <h5>
            <strong>Reset form (empty the form)</strong>
          </h5>
          <p>You can force a form to clear all values.</p>
          <SyntaxHighlighter style={vs} language={"typecript"}>{` formRef.current.resetFields()`}</SyntaxHighlighter>
        </div>
      </div>

      <div id="known-limitations">
        <h4>Known limitations</h4>

        <hr className="mb4" />

        <div className="mb4" id="nesting-forms">
          <h5>
            <strong>Nesting forms</strong>
          </h5>
          <p>As the forms use the context API, you cannot add a form within another form (anyway this is not valid in HTML either - see W3C documentation)</p>

          <p>What you can do is add a modal that renders a form outside this form (usually in the root of the DOM), but for react it would be still inside the same context.</p>

          <p>
            The problem in reality would be that if the modal contains a submit button, even if outside the form, as for react virtualDom is inside the other, would trigger the submit in both forms,
            the parent and the modal
          </p>

          <p>You need to replace the submit button of the modal by a normal button that triggers the submit.</p>

          <SyntaxHighlighter style={vs} language={"typecript"}>{`<button type="button" onClick={() => handleSubmit()}>Save user</button>`}</SyntaxHighlighter>

          <p>Here is an example</p>

          <SyntaxHighlighter style={vs} language={"typecript"}>{`import _ from "lodash";
import React, { createRef, ReactElement } from "react";
import { toLiteral } from "../../../../helper/locale-utils";
import { Form, TextInput } from "../../../shared/forms";
import { addNotification } from "../../../shared/notifications/notifications-service";
import * as Api from "../../../../api";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "@adeccoux//modal";
import { email, phone, required } from "../../../shared/forms/utilities/validations";

const UserModal: React.FC<any> = (props): ReactElement => {
  const { userModal, closeModal, userFormData } = props;

  const handleSubmit = async () => {
    const _form = formRef?.current as Form;
    const isValid = await _form?.isValid();
    const user = _form?.serialize();
    if (isValid) {
      await Api.updateTenantUser(user);
      addNotification({ type: "success", content: toLiteral({ id: "User saved successfully" }), timer: 3 });
    }
  };
  let formRef: any = createRef();
  return (
    <Modal renderAsPortal open={userModal} onClose={() => closeModal()}>
      <Form ref={formRef} values={userFormData}>
        <ModalHeader>Add user</ModalHeader>
        <ModalBody>
          <TextInput name="name" label={"name"} type="text" validations={[required]} />
          <TextInput name="email" label={"email"} type="text" validations={[required, email]} />
          <TextInput name="phone" label={"phone"} type="text" validations={[phone]} />
        </ModalBody>
        <ModalFooter className="pt4">
          <button type="button" onClick={() => handleSubmit()}>
            Save user
          </button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default UserModal;`}</SyntaxHighlighter>
        </div>

        <div className="mb4" id="button-types">
          <h5>
            <strong>Buttons unintentionally trigger the form submission</strong>
          </h5>

          <p>Very often you'll see that a button that is intended to do something, also triggers the form submission.</p>
          <Notification show info className="static-notification mb4">
            <NotificationBody>As in normal HTML, if a button doesn't have a type="button" will behave like a button "submit", which if clicked will trigger the form submission.</NotificationBody>
          </Notification>
        </div>
      </div>
    </div>
  );
};

export default FormGuideline;
