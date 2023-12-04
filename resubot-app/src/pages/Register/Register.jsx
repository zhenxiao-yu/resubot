import React from "react";
import axios from "../../common/axiosConfig.js";
import './Register.scss';
import {useForm} from "react-hook-form"; //plugin that help with validate form inputs
import {toast} from "react-toastify";
import {Link} from "react-router-dom"; //notification plugin
const Register = ({props}) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data) => {
    };

    //JSX
    return (
        <div className="register-wrapper">
            <form className="box register-box" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title is-1 has-text-centered">Create account</h1>
                <div className="field">
                    {/* username */}
                    <label className="label">Username</label>
                    <div className="control">
                        <input className={`input`} type="text" placeholder="Email" name="email"/>
                    </div>
                </div>
                <div className="field">
                    {/* email */}
                    <label className="label">Email</label>
                    <div className="control">
                        <input className={`input`} type="text" placeholder="Email" name="email"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className={`input`} type="password" placeholder="Password" name="password"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                        <input className={`input`} type="password" placeholder="Password" name="password"/>
                    </div>
                </div>
                {/*Login Button*/}
                <div className="control">
                    <a className="button is-fullwidth is-info register-button" href="/login">Register</a>
                </div>

                <label className="login-link has-text-right">Already have an account? <Link to="/login"> Log in </Link> now</label>
            </form>
        </div>
    );
}

export default Register;