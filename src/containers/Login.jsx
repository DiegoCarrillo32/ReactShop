import React, { useRef } from 'react'
import '@styles/Login.css'

export const Login = () => {

    const Form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(Form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        }
        console.log(data);
    }
    return (

        <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                    

                    <h1 className="title">Create a new password</h1>
                    <p className="subtitle">Enter a new password for your account</p>

                    <form action="/" className="form" ref={Form} onSubmit={handleSubmit} >

                        <label  className="label">Email</label>
                        <input type="text" name="email" className="input"/>

                        <label className="label">Password</label>
                        <input type="password" name="password" placeholder="*********" className="input input-password"/>

                        {/* <label  className="label">Password</label>
                        <input type="password" name="new-password" placeholder="*********" className="input input-password"/> */}

                        <input type="submit" value="Confirm" className="primary-button login-button"/>
                    
                    </form>

            </div>
        </div>
                            )
}
