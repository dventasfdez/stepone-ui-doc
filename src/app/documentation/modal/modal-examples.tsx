import Modal, { ModalBody, ModalFooter, ModalHeader } from "stepone-ui/modal";
import { ReactElement, useState } from "react";
import { Form, TextInput } from "stepone-ui/forms";

export const modal_props = [
  { name: "wrapperClassName", use: false, type: "string", definition: "Class name to wrap the whole modal." },
  { name: "onClose", use: false, type: "function", definition: "Function to handle after modal is closed." },
  { name: "open", use: false, type: "boolean", definition: "Prop linked to modal status (open/close)." },
  { name: "renderAsPortal", use: false, type: "boolean", definition: "Allows render the modal as portal or not." },
];

export const ModalExamplePortal: React.FC<any> = (): ReactElement => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <input type="button" value="Open Modal" onClick={() => setOpenModal(true)} />
      <Modal renderAsPortal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>
          <Form>
            <div>
              <TextInput className={"mb2"} label={"Text input"} name="weight" validateOnChange={true} tooltip={"Enter here something"} type="number" placeholder={"number"}></TextInput>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button className="m0" onClick={() => setOpenModal(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const modal_portal = `
const [openModal, setOpenModal] = useState(false);
return (
  <>
    <input type="button" value="Open Modal" onClick={() => setOpenModal(true)} />
    <Modal renderAsPortal open={openModal} onClose={() => setOpenModal(false)}>
      <ModalHeader>Modal</ModalHeader>
      <ModalBody>
        <Form>
          <div>
            <TextInput
              validations={[required]}
              className={"mb2"}
              label={toLiteral({ id: "template.common.weight" })}
              name="weight"
              validateOnChange={true}
              tooltip={toLiteral({
                id: "template.tooltip.weight",
              })}
              type="number"
              placeholder={"number"}
            ></TextInput>
          </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <button className="m0" onClick={() => setOpenModal(false)}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  </>
);`;

export const ModalExample: React.FC<any> = (): ReactElement => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>
          <Form>
            <div>
              <TextInput className={"mb2"} label={"Text input"} name="weight" validateOnChange={true} tooltip={"Enter here something"} type="number" placeholder={"number"}></TextInput>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button className="m0" onClick={() => setOpenModal(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const modal = `
const [openModal, setOpenModal] = useState(false);
return (
  <>
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <ModalHeader>Modal</ModalHeader>
      <ModalBody>
        <Form>
          <div>
            <TextInput
              validations={[required]}
              className={"mb2"}
              label={toLiteral({ id: "template.common.weight" })}
              name="weight"
              validateOnChange={true}
              tooltip={toLiteral({
                id: "template.tooltip.weight",
              })}
              type="number"
              placeholder={"number"}
            ></TextInput>
          </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <button className="m0" onClick={() => setOpenModal(false)}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  </>
);`;
