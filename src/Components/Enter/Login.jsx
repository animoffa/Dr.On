import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {required} from "../../utilities/Validators";
import {connect} from "react-redux";
import {login} from "../../Redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
    </div>
};
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <span>Login</span>
                <Field placeholder="email" name={"email"} component={Input} validate={required}/>
            </div>
            <div>
                <span>Password</span>
                <Field type="password" name={"password"} placeholder="password" validate={required} component={Input}/>
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error} </div>}
            <div className={s.remember}>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> Remember me
            </div>
            {props.captchaURL && <img src={props.captchaURL} width="100px"/>}
            {props.captchaURL && <div>
                <Field type="text" name={"captcha"} component={Input} validate={required}/> Captcha text
            </div>}
            <button className={s.loginButton}>Log-in</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    captchaURL: state.Auth.captchaURL,
});
export default connect(mapStateToProps, {login})(Login);