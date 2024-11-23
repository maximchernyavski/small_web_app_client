import { Button, TextField } from "@mui/material"
import './register_user.css'

function RegisterUser() {
    const handleSubmitClick = () => {

    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
            <TextField label="Login" variant="standard" className="input_user_field"/>
            <TextField label="Password" variant="standard" className="input_user_field"/>
            <Button id="submit_button" onClick={handleSubmitClick}>Submit</Button>
        </div>
    )
}

export default RegisterUser