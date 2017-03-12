var __ = erste.locale.__;

var ShowsView = require('./shows/shows-view');
var AboutView = require('./about/about-view');
var Sidebar = require('./sidebar/sidebar');
var SingupView = require('./signup/signup-view');
var SigninView = require('./signin/signin-view');
var ForgetPasswView = require('./forgetpassw/forgetpassw-view');
var SingupOKView = require('./signup/signup-OK-view');


class MainView extends erste.TabBar {
    constructor(vm) {
        super();

        this.showsView = new ShowsView();
        this.signinView = new SigninView();

        this.views = [this.signinView, this.showsView];

        this.showsView.navBar.menuButtonHandler = () => vm.toggleSidebar();

        this.hasSidebar = true;

        this.sidebar = new Sidebar();
        this.sidebar.vm = vm;

        this.sidebar.on('switchView', e => this.activateItemByName(e.view));

        this.sidebar.render(document.body);
    }

    onAfterRender() {
        super.onAfterRender();

        this.activateItemByName('about');
    };

    template_items() {
        return `
<tab-item class="active" data-view="about">${__('About')}</tab-item><tab-item data-view="shows">${__('Shows')}</tab-item>
`;
    };

}


module.exports = MainView;
