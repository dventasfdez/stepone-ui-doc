import React, { ReactElement } from "react";

interface PropsDefinition {
  name: string;
  use: boolean;
  type: string;
  options?: any;
  definition: string;
  link?: boolean;
}

interface ComponentPropsTableProps {
  propsDefinition: PropsDefinition[];
  title?: string;
  options?: boolean;
  definition?: string;
}

const ComponentPropsTable: React.FC<ComponentPropsTableProps> = (props): ReactElement => {
  const { propsDefinition, title, options, definition } = props;

  return (
    <>
      {title && <h4 className="mb3">{title}</h4>}
      {definition && <h5 className="mb3">{definition}</h5>}
      <table className="mb3">
        <thead>
          <tr>
            <td>Name</td>
            <td>Use</td>
            <td>Type</td>
            {options && <td>Options</td>}
            <td>Definition</td>
          </tr>
        </thead>
        <tbody>
          {propsDefinition?.map((prop) => (
            <tr key={prop?.name}>
              <td>{prop?.name}</td>
              <td>
                <div className={prop?.use ? "status-tag_alert" : "status-tag_info"}>{prop?.use ? "required" : "optional"}</div>
              </td>
              <td>{prop?.type}</td>
              {options && <td>{prop?.options || "-"}</td>}
              <td>{prop?.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ComponentPropsTable;
