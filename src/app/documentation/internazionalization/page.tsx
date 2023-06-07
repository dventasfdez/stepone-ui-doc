"use client";
import React, { ReactElement } from "react";

import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";

const ModalGuideline: React.FC<any> = (): ReactElement => {
  return (
    <div>
      <h3>Internationalization (i18n) with StepOne</h3>
      <p>
        StepOne offers built-in support for internationalization (i18n), allowing you to create multilingual websites with ease. This feature enables you to display content in different languages
        based on user preferences or location. In this guide, we will explore how to use the internationalization capabilities provided by StepOne.
      </p>
      <h4>Adding Language JSON Files</h4>
      <p>
        To begin, you&apos;ll need to create JSON files that contain the literals for each language you want to support. These files will serve as language packs and store the translations for your
        website&apos;s content.
      </p>
      <ol>
        <li>
          <p>
            Create a JSON file for each language you want to support. For example, <code>en.json</code> for English, <code>fr.json</code> for French, and so on.
          </p>
        </li>
        <li>
          <p>
            In each JSON file, define key-value pairs where the keys represent the original strings in your default language, and the values hold the translated versions in the corresponding language.
            For example:
          </p>
          <pre>
            <code className="!whitespace-pre hljs language-json">
              <span className="hljs-comment">{`// en.json (English)`}</span>
              {"\n"}
              <span className="hljs-punctuation">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="hljs-attr">&quot;home&quot;</span>
              <span className="hljs-punctuation">:</span> <span className="hljs-string">&quot;Home&quot;</span>
              <span className="hljs-punctuation">,</span>
              {"\n"}
              {"  "}
              <span className="hljs-attr">&quot;about&quot;</span>
              <span className="hljs-punctuation">:</span> <span className="hljs-string">&quot;About&quot;</span>
              <span className="hljs-punctuation">,</span>
              {"\n"}
              {"  "}
              <span className="hljs-attr">&quot;contact&quot;</span>
              <span className="hljs-punctuation">:</span> <span className="hljs-string">&quot;Contact&quot;</span>
              {"\n"}
              <span className="hljs-punctuation">{"}"}</span>
              {"\n"}
              {"\n"}
              <span className="hljs-comment">{`// fr.json (French)`}</span>
              {"\n"}
              <span className="hljs-punctuation">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="hljs-attr">&quot;home&quot;</span>
              <span className="hljs-punctuation">:</span> <span className="hljs-string">&quot;Accueil&quot;</span>
              <span className="hljs-punctuation">,</span>
              {"\n"}
              {"  "}
              <span className="hljs-attr">&quot;about&quot;</span>
              <span className="hljs-punctuation">:</span> <span className="hljs-string">&quot;À propos&quot;</span>
              <span className="hljs-punctuation">,</span>
              {"\n"}
              {"  "}
              <span className="hljs-attr">&quot;contact&quot;</span>
              <span className="hljs-punctuation">:</span> <span className="hljs-string">&quot;Contact&quot;</span>
              {"\n"}
              <span className="hljs-punctuation">{"}"}</span>
              {"\n"}
            </code>
          </pre>
        </li>
        <li>
          <p>Ensure that your JSON files are stored in a location accessible to your web application.</p>
        </li>
      </ol>
      <h4>Implementing i18n in StepOne</h4>
      <p>Once you have your language JSON files prepared, you can integrate i18n functionality into your StepOne-powered website.</p>
      <p>In your HTML markup, you can use StepOne&apos;s i18n functionality by replacing the text literals by the &quot;_t&quot; function. For example:</p>
      <code>
        <pre>{` <p>home</p>`}</pre>
      </code>
      <p>Becomes</p>
      <code>
        <pre>{` <p>{_t("home")}</p>`}</pre>
      </code>
      <h4>Other optional parameters</h4>
      <p>You can also using this function force a particular language and have literals with variables.</p>
      <ul>
        <li>
          <em>First attribute</em>: The literal, that can include variables between double brackets.
        </li>
        <li>
          <em>Second attribute</em>: Forced language, if you want to skip the whole application selected language.
        </li>
        <li>
          <em>Third attribute</em>: The variables object, that if matching the ones in the literal will replace them.
        </li>
      </ul>
      <code>
        <pre>{` <p>{ _t("Hi! {{name}}, welcome back!", "en-UK", {name: person.name})}</p>`}</pre>
      </code>
      <p>
        By following these steps, you can effectively implement internationalization in your StepOne-powered website. Users will be able to switch between different languages, and the content will be
        dynamically updated based on their selection
      </p>
    </div>
  );
};

export default ModalGuideline;
