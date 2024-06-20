import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () => {
  const [filePath, setFilePath] = useState(null);

  const onDrop = useCallback((acceptedFiles: any[]) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setFilePath(data.filePath);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      {filePath && (
        <div>
          <p>File uploaded to: <a href={`http://localhost:3001/uploads/${filePath}`} target="_blank" rel="noopener noreferrer">{filePath}</a></p>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
