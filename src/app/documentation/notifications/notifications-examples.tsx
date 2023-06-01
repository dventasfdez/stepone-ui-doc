import Link from "next/link";
import React, { ReactElement, useState } from "react";
import Notification, { NotificationBody, NotificationFooter, NotificationHeader } from "stepone-ui/notification";

export const notifications_props = [
  { name: "icon", use: false, type: "string", definition: "Tell whether you want the close icon or not." },
  { name: "success", use: false, type: "boolean", definition: "Change status to Success." },
  { name: "error", use: false, type: "boolean", definition: "Change status to Error." },
  { name: "info", use: false, type: "boolean", definition: "Change status to Info." },
  { name: "warning", use: false, type: "boolean", definition: "Change status to Read." },
  { name: "className", use: false, type: "string", definition: "Additional styling if needed." },
  { name: "show", use: true, type: "boolean", definition: "State for showing the notification." },
  { name: "setShow", use: false, type: "(show: boolean) => void", definition: "Indicates whether to validate the input field on change or not." },
  { name: "onClose", use: false, type: "() => void", definition: "Handler function for the close button." },
  { name: "renderAsPortal", use: false, type: "boolean", definition: "Handler to show or not as a portal." },
  { name: "others", use: false, type: "any", definition: "Any additional props that can be passed to the component." },
];

const MyNotification = ({ showNotification, setShowNotification }: any) => {
  return (
    <Notification
      renderAsPortal={true}
      data-testid="notification"
      show={showNotification && showNotification.length > 0 ? true : false}
      setShow={(show) => {
        if (!show) setShowNotification("");
      }}
      info={showNotification === "info"}
      error={showNotification === "error"}
      success={showNotification === "success"}
      warning={showNotification === "warning"}
    >
      <NotificationHeader>This is a Notification</NotificationHeader>
      <NotificationBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias sapiente quis deserunt. Possimus eaque dolor excepturi nisi, consequuntur</NotificationBody>
      <NotificationFooter>
        <Link href={"#"}>Link 1</Link>
        <Link href={"#"}>Link 2</Link>
      </NotificationFooter>
    </Notification>
  );
};

export default MyNotification;

// READ NOTIFICATION EXAMPLE
export const ReadNotification: React.FC<any> = (): ReactElement => {
  const [showNotification, setShowNotification] = useState("");
  return (
    <div>
      <button className="m2" onClick={() => setShowNotification("read")}>
        Read notification
      </button>
      <MyNotification showNotification={showNotification} setShowNotification={setShowNotification} />
    </div>
  );
};

export const read_notificaton = `
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationFooter, NotificationHeader } from "stepone-ui/notification";

const ReadNotification: React.FC<any> = (): ReactElement => {
  const [showNotification, setShowNotification] = useState("");
  return (
    <div>
      <button className="m2" onClick={() => setShowNotification("read")}>
        Read notification
      </button>
      <Notification
        renderAsPortal={true}
        data-testid="notification"
        show={showNotification && showNotification.length > 0 ? true : false}
        setShow={(show) => {
          if (!show) setShowNotification("");
        }}
        read={showNotification === "read"}
      >
        <NotificationHeader>This is a Notification</NotificationHeader>
        <NotificationBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias sapiente quis deserunt. Possimus eaque dolor excepturi nisi, consequuntur</NotificationBody>
        <NotificationFooter>
          <Link to={""}>
            Link 1
          </Link>
          <Link to={""}>
            Link 2
          </Link>
        </NotificationFooter>
      </Notification>
    </div>
  />
  ) 
};

export default ReadNotification
`;

// INFO NOTIFICATION EXAMPLE
export const InfoNotification: React.FC<any> = (): ReactElement => {
  const [showNotification, setShowNotification] = useState("");
  return (
    <div>
      <button className="m2" onClick={() => setShowNotification("info")}>
        Info notification
      </button>
      <MyNotification showNotification={showNotification} setShowNotification={setShowNotification} />
    </div>
  );
};

export const info_notificaton = `
  import React, { ReactElement } from "react";
  import Notification, { NotificationBody, NotificationFooter, NotificationHeader } from "stepone-ui/notification";
  
  const InfoNotification: React.FC<any> = (): ReactElement => {
    const [showNotification, setShowNotification] = useState("");
    return (
      <div>
        <button className="m2" onClick={() => setShowNotification("info")}>
          Info notification
        </button>
        <Notification
          renderAsPortal={true}
          data-testid="notification"
          show={showNotification && showNotification.length > 0 ? true : false}
          setShow={(show) => {
            if (!show) setShowNotification("");
          }}
          info={showNotification === "info"}
        >
          <NotificationHeader>This is a Notification</NotificationHeader>
          <NotificationBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias sapiente quis deserunt. Possimus eaque dolor excepturi nisi, consequuntur</NotificationBody>
          <NotificationFooter>
            <Link to={""}>
              Link 1
            </Link>
            <Link to={""}>
              Link 2
            </Link>
          </NotificationFooter>
        </Notification>
      </div>
    />
    ) 
  };
  
  export default InfoNotification
  `;

// ERROR NOTIFICATION EXAMPLE
export const ErrorNotification: React.FC<any> = (): ReactElement => {
  const [showNotification, setShowNotification] = useState("");
  return (
    <div>
      <button className="m2" onClick={() => setShowNotification("error")}>
        Error notification
      </button>
      <MyNotification showNotification={showNotification} setShowNotification={setShowNotification} />
    </div>
  );
};

export const error_notificaton = `
  import React, { ReactElement } from "react";
  import Notification, { NotificationBody, NotificationFooter, NotificationHeader } from "stepone-ui/notification";
  
  const ErrorNotification: React.FC<any> = (): ReactElement => {
    const [showNotification, setShowNotification] = useState("");
    return (
      <div>
        <button className="m2" onClick={() => setShowNotification("error")}>
          Error notification
        </button>
        <Notification
          renderAsPortal={true}
          data-testid="notification"
          show={showNotification && showNotification.length > 0 ? true : false}
          setShow={(show) => {
            if (!show) setShowNotification("");
          }}
          error={showNotification === "error"}
        >
          <NotificationHeader>This is a Notification</NotificationHeader>
          <NotificationBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias sapiente quis deserunt. Possimus eaque dolor excepturi nisi, consequuntur</NotificationBody>
          <NotificationFooter>
            <Link to={""}>
              Link 1
            </Link>
            <Link to={""}>
              Link 2
            </Link>
          </NotificationFooter>
        </Notification>
      </div>
    />
    ) 
  };
  
  export default ErrorNotification
  `;

// SUCCESS NOTIFICATION EXAMPLE
export const SuccessNotification: React.FC<any> = (): ReactElement => {
  const [showNotification, setShowNotification] = useState("");
  return (
    <div>
      <button className="m2" onClick={() => setShowNotification("success")}>
        Success notification
      </button>
      <MyNotification showNotification={showNotification} setShowNotification={setShowNotification} />
    </div>
  );
};

export const success_notificaton = `
    import React, { ReactElement } from "react";
    import Notification, { NotificationBody, NotificationFooter, NotificationHeader } from "stepone-ui/notification";
    
    const ErrorNotification: React.FC<any> = (): ReactElement => {
      const [showNotification, setShowNotification] = useState("");
      return (
        <div>
          <button className="m2" onClick={() => setShowNotification("success")}>
            Success notification
          </button>
          <Notification
            renderAsPortal={true}
            data-testid="notification"
            show={showNotification && showNotification.length > 0 ? true : false}
            setShow={(show) => {
              if (!show) setShowNotification("");
            }}
            success={showNotification === "success"}
          >
            <NotificationHeader>This is a Notification</NotificationHeader>
            <NotificationBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias sapiente quis deserunt. Possimus eaque dolor excepturi nisi, consequuntur</NotificationBody>
            <NotificationFooter>
              <Link to={""}>
                Link 1
              </Link>
              <Link to={""}>
                Link 2
              </Link>
            </NotificationFooter>
          </Notification>
        </div>
      />
      ) 
    };
    
    export default ErrorNotification
    `;

// WARNING NOTIFICATION EXAMPLE
export const WarningNotification: React.FC<any> = (): ReactElement => {
  const [showNotification, setShowNotification] = useState("");
  return (
    <div>
      <button className="m2" onClick={() => setShowNotification("warning")}>
        Warning notification
      </button>
      <MyNotification showNotification={showNotification} setShowNotification={setShowNotification} />
    </div>
  );
};

export const warning_notificaton = `
    import React, { ReactElement } from "react";
    import Notification, { NotificationBody, NotificationFooter, NotificationHeader } from "stepone-ui/notification";
    
    const WarningNotification: React.FC<any> = (): ReactElement => {
      const [showNotification, setShowNotification] = useState("");
      return (
        <div>
          <button className="m2" onClick={() => setShowNotification("warning")}>
            Warning notification
          </button>
          <Notification
            renderAsPortal={true}
            data-testid="notification"
            show={showNotification && showNotification.length > 0 ? true : false}
            setShow={(show) => {
              if (!show) setShowNotification("");
            }}
            warning={showNotification === "warning"}
          >
            <NotificationHeader>This is a Notification</NotificationHeader>
            <NotificationBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias sapiente quis deserunt. Possimus eaque dolor excepturi nisi, consequuntur</NotificationBody>
            <NotificationFooter>
              <Link to={""}>
                Link 1
              </Link>
              <Link to={""}>
                Link 2
               </Link>
            </NotificationFooter>
          </Notification>
        </div>
      />
      ) 
    };
    
    export default WarningNotification
    `;
