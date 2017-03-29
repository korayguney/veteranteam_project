import { View, __ } from 'erste';
import SigninView from '../signin/signin-view';
import SignupOKView from '../signup/signup-OK-view';
import MainView from '../main-view';

class SignupView extends View {
    constructor() {
        super();
    }

    onActivation() {
        if (cfg.PLATFORM == 'device')
            StatusBar.styleDefault();
    }

    backButtonTap(e) {
        var mainView = new MainView();
        mainView.vm = this.vm;
        this.vm.pull(mainView, true);

        // this.vm.pull(new SigninView(), true);
    };

    signUpButtonTap(e) {
        this.vm.pull(new SignupOKView(), true);
    };

    get events() {
        return {
            'tap': {
                '.signup': this.signUpButtonTap,
                '.back': this.backButtonTap,
            }
        }
    }


    template() {
        return `
       <div class="signup-view">
            <div><br />
                 <img src="static/img/logo.png" class="logo"><br />
            </div>
            <div align="center">

                <h4><b>One step to be a real Veteran! <br/> Please sign up below!</b></h4><br />
                    <input type="text" id="text" name="fullname" placeholder="full name" /><br /><br />
                    <input type="text" id="text" name="username" placeholder="username" /><br /><br />
                    <input type="email" id="text" name="mail" placeholder="email" /><br /><br />
                    <input type="password" id="text" name="password" placeholder="password" /><br /><br />
                    <input type="password" id="text" name="username" placeholder="password again" /><br /><br />
                    <div align="center" data-type="horizontal">
                    <button class="signup">sign up</button>
           
            <div align="center">
                <br/>
                <button class="back">back</button>
            </div>
        </div>
`;
    }
}

module.exports = SignupView;
