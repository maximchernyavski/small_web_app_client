import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import './refresh_button.css'

function RefreshButton() {
    return(
        <Button id="refresh" startIcon={<RefreshIcon id="refresh_icon"/>}></Button>
    )
}

export default RefreshButton