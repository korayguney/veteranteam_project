var __ = erste.locale.__;

class SigninView extends erste.View {
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

    get events() {
        return {
            'tap': {
                '.login': this.singUpButtonTap
            }
        }
    }

    template_content() {
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

                <button type="submit" class="login">Login</button>
                <input type="checkbox" checked="checked"> Remember me
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
`;
    }
}

module.exports = SigninView;
