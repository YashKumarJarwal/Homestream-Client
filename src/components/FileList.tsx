import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FileList = () => {
  const { folderName } = useParams();
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/folders/${folderName}/files`);
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, [folderName]);

  const handleFileClick = (fileName: string) => {
    navigate(`/folders/${folderName}/files/${fileName}`);
  };

  return (
    <div>
      <h3 style={{ fontFamily: 'Arial, sans-serif' }} >Files in {folderName}</h3>
      <ul>
        {files.map((file, index) => (
          <li key={index} onClick={() => handleFileClick(file)} style={{ fontFamily: 'Arial, sans-serif', cursor: 'pointer' }}>
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
