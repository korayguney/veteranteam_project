import { View, __ } from 'erste';

class Forgetpassw extends View {
	constructor() {
		super();

		this.className = 'forgetpassw-view';
	}

	onActivation() {
		if (cfg.PLATFORM == 'device')
			StatusBar.styleDefault();
	}

	template() {
		return `
        <div><br />
			<img src="static/img/logo.png" class="logo"><br/>
		</div>
		<div align="center">
			<br /><br />
			<div>
				<input type="text" id="username" name="username" placeholder="veteran username" />
			</div><br>
			<div>
				<input type="email" id="mail" name="mail" placeholder="veteran email" />
			</div><br>
             <button type="submit">send my password</button>
		</div>
		<br/><br/><br/><br/>
		<div align="center">
			<a href="#">back</a>
		</div>
`;
	}
}

module.exports = ForgetpasswView;
