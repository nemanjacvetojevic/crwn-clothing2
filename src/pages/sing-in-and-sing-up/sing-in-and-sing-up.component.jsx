import React from 'react';

import './sing-in-and-sing-up.styles.scss'
import SingIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInAndSignUpPage = () => (
    <div className='sing-in-and-sing-up'>
        SIGN IN
        <SingIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage