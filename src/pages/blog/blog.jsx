import React, {useEffect, useState} from 'react';
import RefreshButton from "../../components/refresh_button/refresh_button"
import './blog.css';
import Profile from '../../components/profile/profile';
import AdminButton from '../../components/admin_button/admin_button';
import LogOut from '../../components/log_out_button/log_out';

function Blog () {
    const [isShowAdminButton, setIsShowAdminButton] = useState(localStorage.getItem("isAdmin") === 'true');

    useEffect(() => {
        const getIsAdmin = () => {
            const isAdmin = localStorage.getItem("isAdmin") === 'true';
            setIsShowAdminButton(isAdmin);
        };

        getIsAdmin();
        window.addEventListener('storage', getIsAdmin, false);

        return () => {
            window.removeEventListener('storage', getIsAdmin);
        };
    }, []);

    return (
        <div id="main">
            <div id="head">
                <RefreshButton />
                <div style={{display: "flex",flexDirection: "row-reverse",}}>
                    <Profile />
                    {isShowAdminButton && (<AdminButton />)}
                    {/* <AdminButton /> */}
                    <LogOut />
                </div>
            </div>
            <div id="blogs"></div>
        </div>
    );
}

export default Blog