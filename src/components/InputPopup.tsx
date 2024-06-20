import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';

const InputPopup = ({ triggerUpdate }: { triggerUpdate: () => void }) => {
  const [open, setOpen] = useState(false);
  const [directory, setDirectory] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/directory', { directory });
      console.log('Response from server:', response.data);
      setOpen(false);
      triggerUpdate(); // Trigger useEffect in FolderCard after closing dialog

    } catch (error) {
      console.error('Error sending directory:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Left side with folder cards */}
      <div style={{ width: '70%' }}>
        {/* Folder cards content goes here */}
      </div>
      
      {/* Right side with Add Directory button */}
      <div style={{ width: '30%', padding: '20px', textAlign: 'center' }}>
        <Button onClick={handleOpen} color="primary" variant="contained" sx={{ borderRadius: '20px' }}>
          Add Directory
        </Button>
      </div>

      {/* Dialog for adding directory */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Directory</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Directory"
            type="text"
            fullWidth
            variant="standard"
            value={directory}
            onChange={(e) => setDirectory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InputPopup;
