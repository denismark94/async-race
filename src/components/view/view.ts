import ControlPanel from './control_panel/controlPanel';

class View {
    currentState: string;
    constructor() {
        this.currentState = 'garage';
    }

    draw() {
        const controlPanel = new ControlPanel();
    }
}

export default View;
