import Checkbox from "material-ui/Checkbox";
import Paper from "material-ui/Paper";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import { Redirect } from "react-router-dom";
import TextField from "material-ui/TextField";
import VerifiedUser from "material-ui/svg-icons/action/verified-user";
import Visibility from "material-ui/svg-icons/action/visibility";
import VisibilityOff from "material-ui/svg-icons/action/visibility-off";

const style = {
    paper: {
        margin: "auto",
    },
    inputs: {
        width: "100%"
    },
    button: {
        backgroundColor: "#2392a5",
        width: 240,
        height: 57,
        boxShadow: "none"
    }
};

export default class Login extends PureComponent {

    static defaultProps = {
        "username": "",
        "password": "",
        "userIsLoggedIn": false
    };

    static propTypes = {
        "doLogin": PropTypes.func,
        "changeUsername": PropTypes.func,
        "changePassword": PropTypes.func,
        "showHide": PropTypes.func,
        "username": PropTypes.string,
        "password": PropTypes.string,
        "showPassword": PropTypes.bool,
        "userIsLoggedIn": PropTypes.bool
    };

    constructor( props ) {
        super(props);
        this.handleShowHide = ::this.handleShowHide;
        this.handleUsernameChanged = ::this.handleUsernameChanged;
        this.handlePasswordChanged = ::this.handlePasswordChanged;
        this.handleCheckForKeyEventLogin = ::this.handleCheckForKeyEventLogin;
    }

    handleShowHide() {
        let { showPassword, showHide } = this.props;
        showHide(showPassword);
    }

    handleUsernameChanged( event ) {
        let { changeUsername } = this.props;
        changeUsername(event.target.value);
    }

    handlePasswordChanged( event ) {
        let { changePassword } = this.props;
        changePassword(event.target.value);
    }

    handleCheckForKeyEventLogin( event ) {
        const { doLogin } = this.props;
        if ( event.key && event.key.toUpperCase() === "ENTER" ) {
            doLogin();
        }
    }

    render() {
        const { showPassword, username, password, doLogin, userIsLoggedIn } = this.props;
        return (
            !userIsLoggedIn ? (
                <div>
                    <div className="login--background__wrapper"/>
                    <div className="login--header">
                        <Paper
                            style={style.paper}
                            zDepth={2}
                            rounded
                            className="pisa-login"
                        >
                            <div className="login--head"/>
                            <div className="login--field">
                                <TextField
                                    type="text"
                                    floatingLabelText="Username"
                                    style={style.inputs}
                                    value={username}
                                    onChange={this.handleUsernameChanged}
                                    onKeyPress={this.handleCheckForKeyEventLogin}
                                />
                                <div className="pisa-password--wrapper">
                                    <TextField
                                        type={showPassword ? "text" : "password"}
                                        floatingLabelText="Password"
                                        style={style.inputs}
                                        value={password}
                                        onChange={this.handlePasswordChanged}
                                        onKeyPress={this.handleCheckForKeyEventLogin}
                                    />
                                    <Checkbox
                                        className="pisa-show--password"
                                        onCheck={this.handleShowHide}
                                        checkedIcon={<Visibility />}
                                        uncheckedIcon={<VisibilityOff />}
                                    />
                                </div>
                            </div>

                            <RaisedButton
                                buttonStyle={style.button}
                                onClick={doLogin}
                                className="btn-success"
                                label="Login"
                                labelColor="#fff"
                                icon={<VerifiedUser />}
                            />
                        </Paper>
                    </div>
                </div> ) :
                <Redirect
                    to="/surveys"
                />
        );
    }
}
