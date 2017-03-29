import {ViewManager} from 'erste';

import Sidebar from './views/sidebar/sidebar';
import SigninView from './views/signin/signin-view';
import locale from './lib/locale';

export default class Application {
    constructor() {
        locale('tr');

        const vm = new ViewManager();

        const sidebar = new Sidebar();
        sidebar.vm = vm;
        sidebar.on('switchView', e => mainView.activateItemByName(e.view));
        sidebar.render(document.body);
        var signinView = new SigninView();
        signinView.vm = vm;

        vm.setCurrentView(signinView);
    }
}
