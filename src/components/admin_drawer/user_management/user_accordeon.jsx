import { Button, Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import './user_accordeon.css'

// const accordionStyle = {
//     backgroundColor:'red',
//     borderRadius: '0px',
// }

function ManageUser() {
    const handleDeleteClick = () => {

    }

    const handleEditClick = () => {

    }

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Accordion className="accordion">
            <AccordionSummary
                expandIcon={<ArrowDownward />}
                aria-controls="panel1-content"
                >
                <Typography>User ID: 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Login : testuser1mailcom</Typography>
                <Typography>Password : test</Typography>
                <Typography>Admin Rights : true</Typography>
                </AccordionDetails>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <Button className="form_button" onClick={handleDeleteClick}>Delete</Button>
                <Button className="form_button" onClick={handleEditClick}>Edit</Button>
            </div>
            </Accordion>

            <Accordion className="accordion">
            <AccordionSummary
                expandIcon={<ArrowDownward />}
                aria-controls="panel1-content"
                >
                <Typography>User ID: 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Login : testuser232</Typography>
                <Typography>Password : tesert</Typography>
                <Typography>Admin Rights : false</Typography>
                </AccordionDetails>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <Button className="form_button">Delete</Button>
                <Button className="form_button">Edit</Button>
            </div>
            </Accordion>
        </div>
        
    )
}

export default ManageUser