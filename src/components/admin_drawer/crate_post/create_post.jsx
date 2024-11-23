import { Button, TextareaAutosize, TextField } from "@mui/material"
import './create_post.css'

function AddPost() {
    const handleSubmitClick = () => {

    }

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <TextField label="Title" variant="standard" className="input_post_field"/>
            <TextField label='Text' variant="standard" maxRows={Infinity} multiline/>
            <Button id="submit_button" onClick={handleSubmitClick}>Submit</Button>
        </div>
    )
}

export default AddPost