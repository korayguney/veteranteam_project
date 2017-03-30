import { View, __ } from 'erste';
import SignupView from '../signup/signup-view';
import ForgetpasswView from '../forgetpassw/forgetpassw-view';
import LoggedInView from '../loggedin/loggedin-view';

class SigninView extends View {
    constructor() {
        super();
        // this.className = 'signin-view';
    }

    onActivation() {
        if (cfg.PLATFORM == 'device')
            StatusBar.styleDefault();
    }

    singUpButtonTap(e) {
        var signupView = new SignupView();
        signupView.vm = this.vm;
        this.vm.pull(signupView, true);
    };

    forgetButtonTap(e) {
        var forgetpasswView = new ForgetpasswView();
        forgetpasswView.vm = this.vm;
        this.vm.pull(forgetpasswView, true);

       // this.vm.pull(new ForgetpasswView(), true);
    };

    logInButtonTap(e) {
        var loggedin = new LoggedInView();
        loggedin.vm = this.vm;
        this.vm.pull(loggedin, true);
    };
    get events() {
        return {
            'tap': {
                '.forget': this.forgetButtonTap,
                '.signupbtn': this.singUpButtonTap,
                '.login': this.logInButtonTap,
            }
        }
    }

    template() {
        return `
    <div class="signup-view">
        <form >
            <div class="imgcontainer">
                <img src="static/img/logo.png" alt="Avatar" class="logo">
            </div>

            <div class="container">
                <h4>Username </h4>
                <input type="text" placeholder="veteran username" name="uname" required>
                <br/> <br/>
                <h4>Password </h4>
                <input type="password" placeholder="veteran password" name="psw" required>
                <br/> <br/>
                <button class="login">Login</button>
                <input type="checkbox" checked="checked"/> <font face="verdana" color="green">save username?</font>

            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="signupbtn">Sign Up</button>
                <button class="forget">Forgot password?</button>
            </div>
            <div>
                <button class="facebook">
                login with Facebook
                </button>
            </div>
        </form>
     </div>
`;
    }
}

module.exports = SigninView;
