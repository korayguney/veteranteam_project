import { View, __, Sidebar, ViewManager, NavBar } from 'erste';
import MainView from '../main-view';
import FinderView from '../finderview/finder-view';

class LoggedInView extends View {
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

    finderButtonTap(e) {
        var finderView = new FinderView();
        finderView.vm = this.vm;
        this.vm.pull(finderView, true);
    };

    hiderButtonTap(e) {
        var hinderView = new HinderView();
        hinderView.vm = this.vm;
        this.vm.pull(hinderView, true);
    };

    get events() {
        return {
            'tap': {
                '.finder': this.finderButtonTap,
                '.hider': this.hiderButtonTap,

            }
        }
    }

    template() {
        return `
<view>
    ${this.navBar}
    <div class="logedin">
        <div class="imgcontainer">
            <img src="static/img/logo.png" alt="Avatar" class="logo">
        </div>
        <div class="buttons">
            <button type="button" class="hider"> be a hider verteran</button>
            <button type="button" class="finder"> be a finder verteran</button>
        </div>

    </div>
</view>
`;
    }
}

module.exports = LoggedInView;
