import React from 'react';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

const Home = () => {
    return (
        <>
            <div className='flex justify-evenly items-center h-screen'>
                <LoginButton />
                <SignupButton />
            </div>
        </>
    )
}

export default Home;
