import Card, { CardFooter, CardBody } from "stepone-ui/card";
import ContentSwitcher, { ContentSwitcherItem } from "stepone-ui/contentSwitcher";
import Tabs, { TabItem } from "stepone-ui/tabs";
import React, { ReactElement, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { addNotification } from "@/components/shared/notifications/notifications-service";

interface CodeExample {
  name: string;
  code: string;
  language?: string;
}

interface ComponentExampleProps {
  componentExample: any;
  codeExample: CodeExample[];
}

const ComponentExample: React.FC<ComponentExampleProps> = (props): ReactElement => {
  const { componentExample, codeExample } = props;
  const [selectedTab, setSelectedTab] = useState("0");
  async function onCopyClicked() {
    await navigator.clipboard.writeText(codeExample?.[parseInt(selectedTab)]?.code?.trim() || "");
    addNotification({ type: "success", content: "Code copied", timer: 3 });
  }
  return (
    <ContentSwitcher className="mb5 component-example" defaultActiveItem="example">
      <ContentSwitcherItem id="example" title="Example">
        {componentExample}
      </ContentSwitcherItem>
      <ContentSwitcherItem id="code" title="Code">
        <Card>
          <CardBody>
            {codeExample?.length > 1 ? (
              <Tabs defaultActiveTab="0" onChangeTab={(tab) => setSelectedTab(tab)}>
                {codeExample?.map((ce, index) => (
                  <TabItem id={index?.toString()} key={ce?.name} title={ce?.name}>
                    <SyntaxHighlighter language={ce?.language || "typecript"} style={vs}>
                      {ce?.code?.trim()}
                    </SyntaxHighlighter>
                  </TabItem>
                ))}
              </Tabs>
            ) : (
              <SyntaxHighlighter language={codeExample?.[parseInt(selectedTab)]?.language || "typecript"} style={vs}>
                {codeExample?.[parseInt(selectedTab)]?.code?.trim()}
              </SyntaxHighlighter>
            )}
          </CardBody>
          <CardFooter>
            <div className="link" onClick={() => onCopyClicked()}>
              <span className="material-icons mr1">content_copy</span>Copy
            </div>
          </CardFooter>
        </Card>
      </ContentSwitcherItem>
    </ContentSwitcher>
  );
};

export default ComponentExample;
