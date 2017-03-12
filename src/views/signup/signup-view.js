var __ = erste.locale.__;

class SignupView extends erste.View {
    constructor() {
        super();

        this.className = 'signup-view';
    }

    onActivation() {
        if (cfg.PLATFORM == 'device')
            StatusBar.styleDefault();
    }

    template_content() {
        return `
            <div><br />
                 <img src="static/img/logo.png" class="logo"><br />
            </div>
            <div align="center">

                <h4><b>One step to be a real Veteran! <br/> Please sign up below!</b></h4><br />

                    <input type="text" id="fullname" name="fullname" placeholder="full name" /><br /><br />
                    <input type="text" id="username" name="username" placeholder="username" /><br /><br />
                    <input type="email" id="mail" name="mail" placeholder="email" /><br /><br />
                    <input type="password" id="password" name="password" placeholder="password" /><br /><br />
                    <input type="password" id="username" name="username" placeholder="password again" /><br /><br />
                    <div align="center" data-type="horizontal">
                    <button class="signup">sign up</button>
            </div>
                <h5><b>Or</b></h5>

                <div align="center">

                    <div>
                        <button class="facebook">Sign in with Facebook</button>
                    </div>
                </div>
            </div>
            <div align="center" class="ui-content">
                <br/>
                <a href="#">back</a>
            </div>
`;
    }
}

module.exports = SignupView;
