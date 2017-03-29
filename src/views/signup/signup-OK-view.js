import { View, __ } from 'erste';
import SignupView from '../signup/signup-view';
import MainView from '../main-view';

class SignupOKView extends View {
    constructor(vm) {
        super();
        this.className = 'signup-OK-view';
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

    get events() {
        return {
            'tap': {
                '.button': this.backButtonTap,
            }
        }
    }

    template() {
        return `
     <div>
        <div align="center"><br/>
            <img src="static/img/logo-2.png" class="logo2" ><br />
        </div>
        <div align="center">
            <h2><b>Welcome Veteran!</b></h2>
            <h3><b>your rank : <mark>newbie </mark></b></h3><br />
        </div>
        <div align="center">
            <img src="static/img/logo-OK.png" class="logo" ><br />
            <br/>
            <button class="button">continue</button>
	    </div>	 
     </div>
`;
    }
}

module.exports = SignupOKView;
