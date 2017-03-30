import { View, __, Sidebar, ViewManager, NavBar } from 'erste';
import MainView from '../main-view';
import LoggedInView from "../loggedin/loggedin-view";
import MapView from "../map/map-view";


class FinderView extends View {
    constructor() {
        super();
        this.navBar = new NavBar({
            title: __('Welcome to beveteran'),
            hasMenuButton: true,
            hasBackButton: true
        });
        this.hasSidebar = true;
        this.supportsBackGesture = true;
    }

    onActivation() {
        this.navBar.vm = this.vm;
    }

    template() {
        return `
<view>
    ${this.navBar}
    <div class="map">
        <div class="imgcontainer">
            <img src="static/img/logo.png" alt="Avatar" class="logo">
        </div>
<!-- map view will be here -->
    </div>
</view>
`;
    }
}

module.exports = FinderView;
