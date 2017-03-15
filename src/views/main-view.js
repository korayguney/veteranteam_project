//import ShowsView from './shows/shows-view';
//import AboutView from './about/about-view';
//import CameraView from './camera/camera-view';
//import MapView from './map/map-view';
import SigninView from './signin/signin-view';
// import SignupView from './signup/signup-view';
// import ForgetpasswView from './forgetpassw/forgetpassw-view';

import { Component } from 'erste';
//import { TabView, __ } from 'erste';

export default class MainView extends Component {
    constructor(vm) {
        super();

        // this.showsView = new ShowsView();
        //this.aboutView = new AboutView();
        // this.cameraView = new CameraView();
        //this.mapView = new MapView();
        this.signinView = new SigninView();
        // this.signupView = new SignupView();
        // this.forgetpasswView = new ForgetpasswView();

    }
}