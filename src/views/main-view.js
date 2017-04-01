
import SigninView from './signin/signin-view';
import { View } from 'erste';

export default class MainView extends View {
    constructor(vm) {
        super();
        this.signinView = new SigninView();
        this.signinView.vm = vm;

    }
}
