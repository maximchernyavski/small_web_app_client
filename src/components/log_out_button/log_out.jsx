import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import './log_out.css'

function LogOut() {
    const navigate = useNavigate()

    const handleLogOutClick = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("isAdmin")
        navigate("/", {replace: true})
    }

    return (
        <Button startIcon={<LogoutIcon id="log_out_icon"/>} onClick={handleLogOutClick} id='log_out'></Button>
    )
}

export default LogOut