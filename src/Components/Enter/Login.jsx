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
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth){
return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
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
                <span>pass</span>
                <Field type="password" name={"password"} placeholder="password" validate={required} component={Input}/>
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error} </div>}
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
            </div>
            <button>Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps= (state) => ({
  isAuth : state.Auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);