import React from "react"
import AddClass from "../AddClass"
import ClassCard from "../ClassCard"
//
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
const Body = () => {

    const [open, setOpen] = React.useState(false);

    //Handle add new class function
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createClass = () => {

        handleClickOpen()
    }
    // Handle join class function
    const joinClass = () => {

    }
    //Menu information
    const actions = [
        { icon: <AddIcon />, name: 'Add Class', onClick: createClass },
        { icon: <MeetingRoomIcon />, name: 'Join Class', onClick: joinClass },
    ];




    return (

        <Box sx={{ position: 'fixed', bottom: 50, right: 50, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <div>
                <ClassCard />
                
            </div>

            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{}}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (

                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.onClick}
                    />


                ))}
            </SpeedDial>
            {open && <AddClass handleClose={handleClose} ></AddClass>}
        </Box>
    );
}

export default Body