import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const { folderName, fileName } = useParams();
  const videoUrl = `http://localhost:3001/videos/${folderName}/${fileName}`;

  return (
    <div>
      <h3 style={{ fontFamily: 'Arial, sans-serif' }}>Playing: {fileName}</h3>
      <ReactPlayer 
        url={videoUrl} 
        controls
        width="50%"
        height="auto"
      />
    </div>
  );
};

export default VideoPlayer;
