import { View, __ } from 'erste';
import SigninView from '../signin/signin-view';
import ForgetPasswOkView from '../forgetpassw/forgetpassw-OK-view';
import MainView from '../main-view';

class ForgetpasswView extends View {
	constructor() {
		super();
		this.className = 'forgetpassw-view';
	}

	onActivation() {
		if (cfg.PLATFORM == 'device')
			StatusBar.styleDefault();
	}

	backButtonTap(e) {
		var mainView = new MainView();
		mainView.vm = this.vm;
		this.vm.pull(mainView, true);
	};

	sendPasswTap(e) {
		var forgetpasswView = new ForgetPasswOkView();
		forgetpasswView.vm = this.vm;
		this.vm.pull(forgetpasswView, true);
	};

	get events() {
		return {
			'tap': {
				'.sendPassw': this.sendPasswTap,
				'.back': this.backButtonTap,
			}
		}
	}



	template() {
		return `
	<div>
        <div><br />
			<img src="static/img/logo.png" class="logo"><br/>
		</div>
		<div align="center">
			<br /><br />
			<div>
				<input type="text" id="text" name="username" placeholder="veteran username" />
			</div><br>
			<div>
				<input type="email" id="text" name="mail" placeholder="veteran email" />
			</div><br>
             <button type="submit" class="sendPassw">send my password</button>
		</div>
		<br/><br/>
		<div align="center">
                <br/>
                <button class="back">back</button>
            </div>
	</div>
`;
	}
}

module.exports = ForgetpasswView;
