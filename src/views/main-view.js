
import SigninView from './signin/signin-view';
import { Component } from 'erste';

export default class MainView extends Component {
    constructor(vm) {
        super();
        this.signinView = new SigninView();
        this.signinView.vm = vm;


    }
}