import React from 'react';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const SignupButton = () => {
    return (
        <div>
            <Link
                to="/signup"
                className="w-full flex justify-center">
                <button className="bg-white text-black py-1 px-4 rounded-[10px] sm:rounded-[15px] font-medium text-2xl hover:scale-110 flex flex-col justify-center items-center">
                    <PersonAddIcon style={{fontSize: 100}} />
                    SIGNUP
                </button>
            </Link>
        </div>
    )
}

export default SignupButton;
