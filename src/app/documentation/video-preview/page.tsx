"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  VideoPreviewLargeComponent,
  VideoPreviewMediumComponent,
  VideoPreviewSmallComponent,
  VideoPreviewMediumWithTagComponent,
  VideoPreviewMediumWithTitleComponent,
  VideoPreviewMediumWithTimerComponent,
  VideoPreviewMediumWithSubtitleComponent,
  video_preview_props,
  video_preview_image_props,
  video_preview_large,
  video_preview_medium,
  video_preview_small,
  video_preview_medium_with_tag,
  video_preview_medium_with_title,
  video_preview_medium_with_timer,
  video_preview_medium_with_subtitle,
  data_mock_file,
} from "./video-preview-examples";

const VideoPreviewGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Video Preview</h3>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Definition</NotificationHeader>
        <NotificationBody>
          <p>VideoPreview displays a graphic interface as a video preview.</p>
          <p>
            This component is build using the composition between the following parts:
            <ul>
              <li>VideoPreviewImage which displays the video image preview</li>
              <li>VideoPreviewTitle displays the title</li>
              <li>VideoPreviewSubtitle displays the subtitle</li>
              <li>VideoPreviewTag displays the tag</li>
              <li>VideoPreviewTimer displays the video timer</li>
            </ul>
          </p>
        </NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={video_preview_props} title="Video Preview Props" />
      <h3>VideoPreviewImage</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Used to show default image.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={video_preview_image_props} title="VideoPreviewImage Props" />
      <hr className="mb3" />
      <hr className="mb3" />
      <h3>Sizes</h3>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>VideoPreview component can be build with the following sizes and variants</NotificationHeader>
      </Notification>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Medium (default)</NotificationHeader>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "video_preview_medium.tsx", code: video_preview_medium },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<VideoPreviewMediumComponent />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Large</NotificationHeader>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "video_preview_large.tsx", code: video_preview_large },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<VideoPreviewLargeComponent />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Small</NotificationHeader>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "video_preview_small.tsx", code: video_preview_small },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<VideoPreviewSmallComponent />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>With Tag</NotificationHeader>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "video_preview_medium_with_tag.tsx", code: video_preview_medium_with_tag },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<VideoPreviewMediumWithTagComponent />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>With Title</NotificationHeader>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "video_preview_medium_with_title.tsx", code: video_preview_medium_with_title },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<VideoPreviewMediumWithTitleComponent />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>With Timer</NotificationHeader>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "video_preview_medium_with_timer.tsx", code: video_preview_medium_with_timer },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<VideoPreviewMediumWithTimerComponent />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>With Subtitle</NotificationHeader>
        <NotificationBody>Available on large variant.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "video_preview_medium_with_subtitle.tsx", code: video_preview_medium_with_subtitle },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<VideoPreviewMediumWithSubtitleComponent />}
      />
    </>
  );
};

export default VideoPreviewGuideline;
