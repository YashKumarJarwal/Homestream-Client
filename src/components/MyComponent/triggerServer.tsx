import React from 'react';

const TriggerServer = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('/run-npm-start');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Optionally handle response data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Optionally handle errors
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Run npm start Command</button>
    </div>
  );
};

export default TriggerServer;
