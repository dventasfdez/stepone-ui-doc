import React, { ReactElement, useState } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

export const file_uploader_props = [
  { name: "fullWidth", use: false, type: "boolean", link: true, definition: "Define full width in the parent for component" },
  { name: "small", use: false, type: "boolean", link: true, definition: "Define the size for button" },
  { name: "secondary", use: false, type: "boolean", definition: "Define if button is secondary" },
  { name: "multiple", use: false, type: "boolean", definition: "Define if is possible to upload one or more files" },
  { name: "dragAndDrop", use: false, type: "boolean", definition: "Define if is drag and drop variable" },
  { name: "disabled", use: false, type: "boolean", definition: "Define if is disabled" },
  { name: "id", use: false, type: "string", definition: "Set id for input" },
  { name: "label", use: false, type: "string", definition: "Set label for component" },
  { name: "formats", use: true, type: "string", definition: "Set accept formats for file or files" },
  { name: "max", use: true, type: "number", definition: "Set max size of file in MB, only for show in the info message" },
  { name: "value", use: false, type: "boolean", definition: "Define the value of file or files in component" },
  { name: "onChange", use: true, type: "any", definition: "Function to call when files is changed" },
  { name: "className", use: false, type: "any", definition: "Set different classes for file uploader component" },
];

const useFileUploader = () => {
  const [file, setFile] = useState<any>(null);
  const handleUploadSingle = (_files?: File[]) => {
    if (_files) {
      setFile({ file: _files[0], loading: true, error: "" } as IFile);
      setTimeout(() => setFile({ file: _files[0], loading: false, error: "" } as IFile), 3000);
    }
  };
  return { file, handleUploadSingle };
};

// const getInitialFiles = () => {
//   const str = JSON.stringify({ name: "test" });
//   const blob = new Blob([str]);
//   const file1 = new File([blob], "values1.json", {
//     type: "application/JSON",
//   });
//   const file2 = new File([blob], "values2.json", {
//     type: "application/JSON",
//   });
//   return [
//     { loading: false, error: "Error message", file: file1 },
//     { loading: false, error: "", file: file2 },
//   ];
// };

const createNewFiles = (files: File[]): IFile[] => {
  const newFiles: IFile[] = [];
  files.forEach((_file: File) => {
    newFiles.push({ file: _file, loading: false, error: "" } as IFile);
  });
  return newFiles;
};

// SIMPLE FILEUPLOADER COMPONENT EXAMPLE
export const SimpleFileUploader: React.FC<any> = (): ReactElement => {
  const { file, handleUploadSingle } = useFileUploader();
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} />;
};
export const simple_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

const SimpleFileUploader: React.FC<any> = (): ReactElement => { 
  const [file, setFile] = useState<any>(null);
  const handleUploadSingle = (_files?: File[]) => {
    if (_files) {
    setFile({ file: _files[0], loading: true, error: "" } as IFile);
    setTimeout(() => setFile({ file: _files[0], loading: false, error: "" } as IFile), 3000);
    }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} />;
};

export default SimpleFileUploader
`;

// SMALL FILEUPLOADER COMPONENT EXAMPLE
export const SmallFileUploader: React.FC<any> = (): ReactElement => {
  const { file, handleUploadSingle } = useFileUploader();
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} small />;
};
export const small_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

const SmallFileUploader: React.FC<any> = (): ReactElement => { 
  const [file, setFile] = useState<any>(null);
  const handleUploadSingle = (_files?: File[]) => {
    if (_files) {
    setFile({ file: _files[0], loading: true, error: "" } as IFile);
    setTimeout(() => setFile({ file: _files[0], loading: false, error: "" } as IFile), 3000);
    }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} small/>;
};

export default SmallFileUploader
`;

// DRAG AND DROP FILEUPLOADER COMPONENT EXAMPLE
export const DragAndDropFileUploader: React.FC<any> = (): ReactElement => {
  const { file, handleUploadSingle } = useFileUploader();
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} dragAndDrop />;
};
export const drag_and_drop_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

const DragAndDropFileUploader: React.FC<any> = (): ReactElement => { 
  const [file, setFile] = useState<any>(null);
  const handleUploadSingle = (_files?: File[]) => {
    if (_files) {
    setFile({ file: _files[0], loading: true, error: "" } as IFile);
    setTimeout(() => setFile({ file: _files[0], loading: false, error: "" } as IFile), 3000);
    }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} dragAndDrop/>;
};

export default DragAndDropFileUploader
`;

// FULL WIDTH FILEUPLOADER COMPONENT EXAMPLE
export const FullWidthFileUploader: React.FC<any> = (): ReactElement => {
  const { file, handleUploadSingle } = useFileUploader();
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} fullWidth />;
};
export const full_width_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

const FullWidthFileUploader: React.FC<any> = (): ReactElement => { 
  const [file, setFile] = useState<any>(null);
  const handleUploadSingle = (_files?: File[]) => {
  if (_files) {
  setFile({ file: _files[0], loading: true, error: "" } as IFile);
  setTimeout(() => setFile({ file: _files[0], loading: false, error: "" } as IFile), 3000);
  }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} fullWidth/>;
};

export default FullWidthFileUploader
`;

// MULTIPLE FILEUPLOADER COMPONENT EXAMPLE
export const MultipleFileUploader: React.FC<any> = (): ReactElement => {
  const [files, setFiles] = useState<any>([]);
  const handleUploadMultiple = (uploadedFiles?: File[]) => {
    if (uploadedFiles) {
      const newFiles = createNewFiles(uploadedFiles);
      setFiles(newFiles);
    }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadMultiple} value={files} multiple />;
};
export const multiple_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

export const MultipleFileUploader: React.FC<any> = (): ReactElement => {
const str = JSON.stringify({ name: "test" });
const blob = new Blob([str]);
const file1 = new File([blob], "values1.json", {
  type: "application/JSON",
});
const file2 = new File([blob], "values2.json", {
  type: "application/JSON",
});
const fileVals: IFile[] = [
  { loading: false, error: "Error message", file: file1 },
  { loading: false, error: "", file: file2 },
];

const [files, setFiles] = useState<any>(fileVals);
const handleUploadMultiple = (_files?: File[]) => {
  if (_files) {
    const _newFiles: IFile[] = [];
    _files.forEach((_file: File) => {
      _newFiles.push({ file: _file, loading: false, error: "" } as IFile);
    });

    setFiles(_newFiles);
  }
};
return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadMultiple} value={files} multiple />;

export default MultipleFileUploader
`;

// MULTIPLE DRAG AND DROP FILEUPLOADER COMPONENT EXAMPLE
export const MultipleDragFileUploader: React.FC<any> = (): ReactElement => {
  const [files, setFiles] = useState<any>([]);
  const handleUpload = (dragedFiles?: File[]) => {
    if (dragedFiles) {
      const newDragedFiles = createNewFiles(dragedFiles);
      setFiles(newDragedFiles);
    }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUpload} value={files} multiple dragAndDrop />;
};
export const multiple_drag_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

export const MultipleDragFileUploader: React.FC<any> = (): ReactElement => {
  const str = JSON.stringify({ name: "test" });
  const blob = new Blob([str]);
  const file1 = new File([blob], "values1.json", {
    type: "application/JSON",
  });
  const file2 = new File([blob], "values2.json", {
    type: "application/JSON",
  });
  const fileVals: IFile[] = [
    { loading: false, error: "Error message", file: file1 },
    { loading: false, error: "", file: file2 },
  ];

  const [files, setFiles] = useState<any>(fileVals);
  const handleUploadMultiple = (_files?: File[]) => {
    if (_files) {
      const _newFiles: IFile[] = [];
      _files.forEach((_file: File) => {
        _newFiles.push({ file: _file, loading: false, error: "" } as IFile);
      });

      setFiles(_newFiles);
    }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadMultiple} value={files} multiple dragAndDrop/>;

export default MultipleDragFileUploader
`;

// SECONDARY FILEUPLOADER COMPONENT EXAMPLE
export const SecondaryFileUploader: React.FC<any> = (): ReactElement => {
  const { file, handleUploadSingle } = useFileUploader();
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} secondary />;
};
export const secondary_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

const SecondaryFileUploader: React.FC<any> = (): ReactElement => { 
  const [file, setFile] = useState<any>(null);
  const handleUploadSingle = (_files?: File[]) => {
  if (_files) {
  setFile({ file: _files[0], loading: true, error: "" } as IFile);
  setTimeout(() => setFile({ file: _files[0], loading: false, error: "" } as IFile), 3000);
  }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} fullWidth/>;
};

export default SecondaryFileUploader
`;

// DISABLED FILEUPLOADER COMPONENT EXAMPLE
export const DisabledFileUploader: React.FC<any> = (): ReactElement => {
  const { file, handleUploadSingle } = useFileUploader();
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} disabled />;
};
export const disabled_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

const DisabledFileUploader: React.FC<any> = (): ReactElement => { 
  const [file, setFile] = useState<any>(null);
  const handleUploadSingle = (_files?: File[]) => {
  if (_files)  {
  setFile({ file: _files[0], loading: true, error: "" } as IFile);
  setTimeout(() => setFile({ file: _files[0], loading: false, error: "" } as IFile), 3000);
  }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} disabled/>;
};

export default DisabledFileUploader
`;

// DISABLED MULTIPLE DRAG AND DROP FILEUPLOADER COMPONENT EXAMPLE
export const DisabledDragFileUploader: React.FC<any> = (): ReactElement => {
  const { file, handleUploadSingle } = useFileUploader();
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} dragAndDrop disabled />;
};
export const disabled_drag_file_uploader = `
import React, { ReactElement } from "react";
import FileUploader, { IFile } from "stepone-ui/fileUploader";

export const DisabledDragFileUploader: React.FC<any> = (): ReactElement => {
  const [file, setFile] = useState<any>(null);
  const handleUploadSingle = (_files?: File[]) => {
    if (_files) {
    setFile({ file: _files[0], loading: true, error: "" } as IFile);
    setTimeout(() => setFile({ file: _files[0], loading: false, error: "" } as IFile), 3000);
    }
  };
  return <FileUploader formats="application/vnd.ms-excel, application/pdf" label="Upload files" max={1} onChange={handleUploadSingle} value={file} dragAndDrop disabled/>;

export default DisabledDragFileUploader
`;
