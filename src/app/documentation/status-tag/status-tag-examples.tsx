import React, { ReactElement } from "react";

// SIMPLE STATUS TAG EXAMPLE
export const SimpleStatusTag: React.FC<any> = (): ReactElement => {
    return (
      <div className="flex">
        <div className="status-tag">Semantic</div>
        <div className="status-tag ml2">
          <span className="material-icons">face</span>
          Semantic
        </div>
      </div>
    );
  };
  export const simple_status_tag = `
  import React, { ReactElement } from "react";
  
  const SimpleStatusTag: React.FC<any> = (): ReactElement => {
    return (
        <div className="flex">
            <div className="status-tag">Semantic</div>
            <div className="status-tag ml2">
            <span className="material-icons">face</span>
            Semantic
            </div>
        </div>
    );
  };
  
  export default SimpleStatusTag
  `;

// INFO STATUS TAG EXAMPLE
export const InfoStatusTag: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div className="status-tag_info">Semantic</div>
      <div className="status-tag_info ml2">
        <span className="material-icons">face</span>
        Semantic
      </div>
    </div>
  );
};
export const info_status_tag = `
import React, { ReactElement } from "react";

const InfoStatusTag: React.FC<any> = (): ReactElement => {
    return (
        <div className="flex">
            <div className="status-tag info">Semantic</div>
            <div className="status-tag info ml2">
            <span className="material-icons">face</span>
            Semantic
            </div>
        </div>
    );
};

export default InfoStatusTag
`;

// ALERT STATUS TAG EXAMPLE
export const AlertStatusTag: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div className="status-tag alert">Semantic</div>
      <div className="status-tag alert ml2">
        <span className="material-icons">face</span>
        Semantic
      </div>
    </div>
  );
};
export const alert_status_tag = `
import React, { ReactElement } from "react";

const AlertStatusTag: React.FC<any> = (): ReactElement => {
    return (
        <div className="flex">
        <div className="status-tag alert">Semantic</div>
        <div className="status-tag alert ml2">
            <span className="material-icons">face</span>
            Semantic
        </div>
        </div>
    );
  };
  
  export default AlertStatusTag
  `;

// SUCCESS STATUS TAG EXAMPLE
export const SuccessStatusTag: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div className="status-tag success">Semantic</div>
      <div className="status-tag success ml2">
        <span className="material-icons">face</span>
        Semantic
      </div>
    </div>
  );
};
export const success_status_tag = `
  import React, { ReactElement } from "react";
  
  const SuccessStatusTag: React.FC<any> = (): ReactElement => {
    return (
        <div className="flex">
        <div className="status-tag success">Semantic</div>
        <div className="status-tag success ml2">
            <span className="material-icons">face</span>
            Semantic
        </div>
        </div>
    );
  };
  
  export default SuccessStatusTag
  `;

// ERROR STATUS TAG EXAMPLE
export const ErrorStatusTag: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div className="status-tag error">Semantic</div>
      <div className="status-tag error ml2">
        <span className="material-icons">face</span>
        Semantic
      </div>
    </div>
  );
};
export const error_status_tag = `
  import React, { ReactElement } from "react";
  
  const ErrorStatusTag: React.FC<any> = (): ReactElement => {
    return (
        <div className="flex">
        <div className="status-tag error">Semantic</div>
        <div className="status-tag error ml2">
            <span className="material-icons">face</span>
            Semantic
        </div>
        </div>
    );
  };
  
  export default ErrorStatusTag
  `;
