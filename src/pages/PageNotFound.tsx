import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PageNotFound.css";

const PageNotFound:React.FC= () => {
    const navigate = useNavigate();
    const handleClick=():void=>{
        navigate('/');
    }
    return (
    <div className='container'>
        <div className='error'>
            <h1>Error!</h1>
            <p>Page not found!</p>
            <button onClick={handleClick}>Homepage</button>
        </div>
    </div>
    )
}

export default PageNotFound;