import Nav from './Nav/nav';
import ControlPanel from './Garage/ControlPanel/controlPanel';
import Track from './Garage/Track/track';
import Winners from './Winners/winners';
declare class View {
    currentState: string;
    controlPanel: ControlPanel;
    nav: Nav;
    track: Track;
    winners: Winners;
    constructor();
    set state(state: string);
}
export default View;
