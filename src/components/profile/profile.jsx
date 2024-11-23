import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import './profile.css'

function Profile () {
    return (<Button id="profile" startIcon={<PersonIcon id="profile_icon"/>}></Button>)
}

export default Profile