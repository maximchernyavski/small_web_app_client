import React, {useEffect} from 'react';
import './blog.css';
import checkToken from '../../utils/checkToken';

function Blog() {
    const token = localStorage.getItem("token")

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <div id="main">
            <div id="head">
            </div>
            <div id="blogs"></div>
        </div>
    );
}

export default Blog