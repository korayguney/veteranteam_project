var __ = erste.locale.__;

class AboutView extends erste.View {
    constructor() {
        super();

        this.className = 'about-view';
    }

    onActivation() {
        if (cfg.PLATFORM == 'device')
            StatusBar.styleDefault();
    }

    template_content() {
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

module.exports = AboutView;
