import ControlPanel from './control_panel/controlPanel';
import Track from './Track/track';
import ICar from '../controller/ICar';

class View {
    currentState: string;
    controlPanel: ControlPanel;
    track: Track;
    constructor() {
        this.currentState = 'garage';
        this.controlPanel = new ControlPanel();
        this.track = new Track();
    }

    draw(data: ICar[], callback: () => void) {
        this.track.drawCars(data, callback);
    }
}

export default View;
