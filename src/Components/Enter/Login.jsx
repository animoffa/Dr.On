import React from "react";
import * as axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div>
            <span>Login</span>
<input type="text"/>
            </div>
            <div>
            <span>pass</span>
<input type="password"/>
            </div>
        <button>Enter</button>
        </div>

    }
}

export default Login;