import { View, __ } from 'erste';

class SigninView extends View {
    constructor() {
        super();

        this.className = 'signin-view';
    }

    onActivation() {
        if (cfg.PLATFORM == 'device')
            StatusBar.styleDefault();
    }

    singUpButtonTap(e) {
        this.vm.pull(new SignupView(), true);
    };

    forgetButtonTap(e) {
        this.vm.pull(new ForgetpasswView(), true);
    };

    get events() {
        return {
            'tap': {
                '.login': this.singUpButtonTap,
                '.forget': this.forgetButtonTap,

            }
        }
    }

    template() {
        return `
        <form >
            <div class="imgcontainer">
                <img src="static/img/logo.png" alt="Avatar" class="logo">
            </div>

            <div class="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="veteran username" name="uname" required>

                <label><b>Password</b></label>
                <input type="password" placeholder="veteran password" name="psw" required>

                <button class="login">Login</button>
                <input type="checkbox" checked="checked"> Remember me
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <button class="forget">Forgot password?</button>
            </div>
        </form>
`;
    }
}

module.exports = SigninView;
