import React from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const AddClass = ({handleClose}) => {
    const [open, setOpen] = React.useState(true);

    const closeButton = () => {
        handleClose()
        setOpen(false)
    }
    const confirmButton = () => {
        console.log("Sub")
        closeButton()
    }
  return (
    <div>
      <Dialog open={open} onClose={closeButton}>
        <DialogTitle>Add Class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create a new class
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Class name"
            type= "text"
            fullWidth
            variant="standard"
            
          />
           
        </DialogContent>
        
        <DialogActions>
          <Button onClick={closeButton}>Cancel</Button>
          <Button onClick={confirmButton}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddClass