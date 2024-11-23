import React, {useNavigate} from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Button } from '@mui/material';
import './admin_button.css'

function AdminButton () {
    const navigate = useNavigate()

    const handleAdminClick = () => {
        navigate('/admin', {replace: true})
    }

    return (
        <Button id="admin_button" onClick={handleAdminClick} startIcon={<AdminPanelSettingsIcon id="admin_button_icon"/>}></Button>
    )
}

export default AdminButton