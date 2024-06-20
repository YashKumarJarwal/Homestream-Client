import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const FolderCard = ({ updateTrigger }: { updateTrigger: any }) => {
  const [videoNames, setVideoNames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideoNames = async () => {
      try {
        const response = await axios.get('http://localhost:3001/folders');
        setVideoNames(response.data);
      } catch (error) {
        console.error('Error fetching video names:', error);
      }
    };

    fetchVideoNames();
  }, [updateTrigger]);

  const handleCardClick = (folderName: string) => {
    navigate(`/folders/${folderName}/files`);
  };

  return (
    <div className="d-flex flex-wrap">
      {videoNames.map((videoName, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px', cursor: 'pointer' }} onClick={() => handleCardClick(videoName)}>
          <Card.Body>
            <Card.Title style={{ fontFamily: 'Arial, sans-serif' }}>{videoName}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FolderCard;
