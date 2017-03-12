import ShowsView from './shows/shows-view';
import AboutView from './about/about-view';
import CameraView from './camera/camera-view';
import MapView from './map/map-view';
import SingupView from './signup/signup-view';
import SigninView from './signin/signin-view';
import ForgetPasswView from './forgetpassw/forgetpassw-view';
import SingupOKView from './signup/signup-OK-view';
import SideBar from './sidebar/sidebar';

import { TabView, __ } from 'erste';

export default class MainView extends TabView {
    constructor(vm) {
        super();

        this.showsView = new ShowsView();
        this.signinView = new SigninView();
        this.cameraView = new CameraView();
        this.mapView = new MapView();
       

        this.views = [this.signinView, this.showsView, this.cameraView, this.mapView];

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
<tab-item class="active" data-view="about">${__('About')}</tab-item><tab-item data-view="shows">${__('Shows')}</tab-item><tab-item data-view="camera">${__('Camera')}</tab-item><tab-item data-view="map">${__('Map')}</tab-item>
`;
    };

	 activateItem(index) {
        super.activateItem(index);

        var activeView = this.views[this.activeItemIndex];
        this.hasSidebar = activeView != this.mapView;
    }
	
}

