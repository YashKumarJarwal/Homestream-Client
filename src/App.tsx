import { useState } from 'react'
import Navb from './Navbar'
import Upload from './components/Upload';
import TriggerServer from './components/MyComponent/triggerServer';
import FolderSelector from './components/MyComponent/FolderSelector';
import Drop from './components/Dropzone';
import InputPopup from './components/InputPopup';
import VideoPlay from './components/VideoPlayer';
import { Button } from 'react-bootstrap';
import FolderCards from './components/FolderCard';
// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FolderCard from './components/FolderCard';
import FileList from './components/FileList';
// import InputPopup from './components/InputPopup';
// import './App.css'


function App() {

  const [updateTrigger, setUpdateTrigger] = useState(false); // State to trigger useEffect in FolderCard

  const triggerUpdate = () => {
    setUpdateTrigger(prev => !prev); // Toggle the state to trigger useEffect
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navb />
                <InputPopup triggerUpdate={triggerUpdate} />
                <FolderCard updateTrigger={updateTrigger} />
              </>
            }
          />
          <Route path="/folders/:folderName/files" element={<FileList />} />
          <Route path="/folders/:folderName/files/:fileName" element={<VideoPlay />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App