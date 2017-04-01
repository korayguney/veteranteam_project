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

        this.mapview = new MapView;

    }

    onActivation() {
        this.navBar.vm = this.vm;
    }
    template() {

        return `
<view>  
        ${this.navBar}
    
    <h3 class="mapheader">Select your target<h3>        
    <div class="map">
        ${this.mapview}
    </div>   
</view>


`;
    }
}

module.exports = FinderView;