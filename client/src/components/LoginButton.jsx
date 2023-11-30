import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () => {
    return (
        <div>
            <Link
                to="/login"
                className="w-full flex justify-center">
                <button className="bg-white text-black py-1 px-4 rounded-[10px] sm:rounded-[15px] font-medium text-2xl hover:scale-110 flex flex-col justify-center items-center">
                    <LoginIcon style={{ fontSize: 100 }}/>
                    LOGIN
                </button>
            </Link>
        </div>
    )
}

export default LoginButton;
