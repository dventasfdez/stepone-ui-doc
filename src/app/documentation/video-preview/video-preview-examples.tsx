import React, { ReactElement } from "react";
import VideoPreview, { VideoPreviewImage, VideoPreviewTag, VideoPreviewTitle, VideoPreviewTimer, VideoPreviewSubtitle } from "stepone-ui/videoPreview";

export const video_preview_props = [
  {
    name: "children",
    use: true,
    type: "React.ReactElement<typeof VideoPreviewImage | typeof ...>",
    definition: "Components to be rendered inside the video preview component.",
  },
  { name: "large", use: false, type: "boolean", definition: "Sets the video preview size as large." },
  { name: "small", use: false, type: "boolean", definition: "Sets the video preview size as small." },
  { name: "className", use: false, type: "string", definition: "Additional or alternative styling." },
  { name: "onClick", use: false, type: "() => void", definition: "Function which will be triggered when user clicks on the play button." },
];

export const video_preview_image_props = [
  {
    name: "className",
    use: false,
    type: "string",
    definition: "Add class to video preview image",
  },
];

const data_mock: any = {
  imgSrc: "https://img.freepik.com/fotos-premium/edificios-modernos-torre-o-rascacielos-distrito-financiero-nubes-dia-soleado-chicago-ee-uu_43552-32.jpg",
  tag: "Tag",
  title: "This is the title of the video",
  subtitle: "This is the subtitle of the video",
  timer: "5:50",
};

export const data_mock_file = `
export const data_mock: any = {
  imgSrc: "https://img.freepik.com/fotos-premium/edificios-modernos-torre-o-rascacielos-distrito-financiero-nubes-dia-soleado-chicago-ee-uu_43552-32.jpg",
  tag: "Tag",
  title: "This is the title of the video",
  subtitle: "This is the subtitle of the video",
  timer: "5:50",
  };
`;

// VIDEO PREVIEW MEDIUM
export const VideoPreviewMediumComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
    </VideoPreview>
  );
};

export const video_preview_medium = `
import React, { ReactElement } from "react";
import VideoPreview, { VideoPreviewImage } from "stepone-ui/videoPreview";

export const VideoPreviewMediumComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
    </VideoPreview>
  );
};

export default VideoPreviewMediumComponent
`;

// VIDEO PREVIEW LARGE
export const VideoPreviewLargeComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview large>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
    </VideoPreview>
  );
};

export const video_preview_large = `
import React, { ReactElement } from "react";
import VideoPreview, { VideoPreviewImage } from "stepone-ui/videoPreview";

export const VideoPreviewLargeComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview large>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
    </VideoPreview>
  );
};

export default VideoPreviewLargeComponent
`;

// VIDEO PREVIEW SMALL
export const VideoPreviewSmallComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview small>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
    </VideoPreview>
  );
};

export const video_preview_small = `
import React, { ReactElement } from "react";
import VideoPreview, { VideoPreviewImage } from "stepone-ui/videoPreview";

export const VideoPreviewSmallComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview small>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
    </VideoPreview>
  );
};

export default VideoPreviewSmallComponent
`;

// VIDEO PREVIEW MEDIUM WITH TAG
export const VideoPreviewMediumWithTagComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
      <VideoPreviewTag>{data_mock.tag}</VideoPreviewTag>
    </VideoPreview>
  );
};

export const video_preview_medium_with_tag = `
import React, { ReactElement } from "react";
import VideoPreview, { VideoPreviewImage, VideoPreviewTag } from "stepone-ui/videoPreview";

export const VideoPreviewMediumWithTagComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
      <VideoPreviewTag>{data_mock.tag}</VideoPreviewTag>
    </VideoPreview>
  );
};

export default VideoPreviewMediumWithTagComponent
`;

// VIDEO PREVIEW MEDIUM WITH TITLE
export const VideoPreviewMediumWithTitleComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
      <VideoPreviewTag>{data_mock.tag}</VideoPreviewTag>
      <VideoPreviewTitle>{data_mock.title}</VideoPreviewTitle>
    </VideoPreview>
  );
};

export const video_preview_medium_with_title = `
import React, { ReactElement } from "react";
import VideoPreview, { VideoPreviewImage, VideoPreviewTag, VideoPreviewTitle } from "stepone-ui/videoPreview";

export const VideoPreviewMediumWithTitleComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
      <VideoPreviewTag>{data_mock.tag}</VideoPreviewTag>
      <VideoPreviewTitle>{data_mock.title}</VideoPreviewTitle>
    </VideoPreview>
  );
};

export default VideoPreviewMediumWithTitleComponent
`;

// VIDEO PREVIEW MEDIUM WITH TIMER
export const VideoPreviewMediumWithTimerComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
      <VideoPreviewTag>{data_mock.tag}</VideoPreviewTag>
      <VideoPreviewTitle>{data_mock.title}</VideoPreviewTitle>
      <VideoPreviewTimer>{data_mock.timer}</VideoPreviewTimer>
    </VideoPreview>
  );
};

export const video_preview_medium_with_timer = `
import React, { ReactElement } from "react";
import VideoPreview, { VideoPreviewImage, VideoPreviewTag, VideoPreviewTitle, VideoPreviewTimer } from "stepone-ui/videoPreview";

export const VideoPreviewMediumWithTimerComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
      <VideoPreviewTag>{data_mock.tag}</VideoPreviewTag>
      <VideoPreviewTitle>{data_mock.title}</VideoPreviewTitle>
      <VideoPreviewTimer>{data_mock.timer}</VideoPreviewTimer>
    </VideoPreview>
  );
};

export default VideoPreviewMediumWithTimerComponent
`;

// VIDEO PREVIEW MEDIUM WITH SUBTITLE
export const VideoPreviewMediumWithSubtitleComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview large>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
      <VideoPreviewTag>{data_mock.tag}</VideoPreviewTag>
      <VideoPreviewTitle>{data_mock.title}</VideoPreviewTitle>
      <VideoPreviewSubtitle>{data_mock.subtitle}</VideoPreviewSubtitle>
      <VideoPreviewTimer>{data_mock.timer}</VideoPreviewTimer>
    </VideoPreview>
  );
};

export const video_preview_medium_with_subtitle = `
import React, { ReactElement } from "react";
import VideoPreview, { VideoPreviewImage, VideoPreviewTag, VideoPreviewTitle, VideoPreviewTimer, VideoPreviewSubtitle } from "stepone-ui/videoPreview";

export const VideoPreviewMediumWithSubtitleComponent: React.FC<any> = (): ReactElement => {
  return (
    <VideoPreview large>
      <VideoPreviewImage>
        <img src={data_mock.imgSrc} alt="preview video" />
      </VideoPreviewImage>
      <VideoPreviewTag>{data_mock.tag}</VideoPreviewTag>
      <VideoPreviewTitle>{data_mock.title}</VideoPreviewTitle>
      <VideoPreviewSubtitle>{data_mock.subtitle}</VideoPreviewSubtitle>
      <VideoPreviewTimer>{data_mock.timer}</VideoPreviewTimer>
    </VideoPreview>
  );
};

export default VideoPreviewMediumWithSubtitleComponent
`;
