import React from 'react';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingEmailPassword,
        handleEmail,
        handlePassword } = useAuth();
    return (
        <div style={{ margin: "45px" }}>
            <h2>Please Login</h2>
            <div>
                <form onSubmit={signInUsingEmailPassword}>
                    <input onBlur={handleEmail} type="email" name="" placeholder="Your Email" id="" /><br />
                    <input style={{ marginBottom: "50px" }} onBlur={handlePassword} type="password" name="" placeholder="Password" id="" /> <br />

                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>



            </div>
            <div style={{ fontSize: '20px', marginTop: "50px" }}>---------------Or---------------</div>
            <div style={{ margin: '10px' }}>

                <button style={{ marginBottom: "150px" }} onClick={signInUsingGoogle} className="btn btn-secondary"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="svg-inline--fa fa-google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> useGoogle</button>
            </div>
        </div>
    );
};

export default Login;