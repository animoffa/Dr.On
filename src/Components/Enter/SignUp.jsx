import React from "react";
import * as axios from "axios";

class SignUp extends React.Component {
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
            <div>
                <span>pass</span>
                <input type="password"/>
            </div>
            <button>Sign-up</button>
        </div>
    }
}
export default SignUp;