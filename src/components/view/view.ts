import Nav from './Nav/nav';
import ControlPanel from './Garage/ControlPanel/controlPanel';
import Track from './Garage/Track/track';
import Winners from './Winners/winners';

class View {
    currentState = 'garage';
    controlPanel: ControlPanel;
    nav: Nav;
    track: Track;
    winners: Winners;
    constructor() {
        this.nav = new Nav();
        this.controlPanel = new ControlPanel();
        this.track = new Track();
        this.winners = new Winners();
        this.state = 'garage';
    }

    set state(state: string) {
        this.currentState = state;
        switch (this.currentState) {
            case 'garage':
                (<HTMLDivElement>document.querySelector('.control_panel_wrapper')).classList.remove('disabled');
                (<HTMLDivElement>document.querySelector('.garage_wrapper')).classList.remove('disabled');
                (<HTMLDivElement>document.querySelector('.winners_wrapper')).classList.add('disabled');
                (<HTMLButtonElement>document.querySelector('.garage')).disabled = true;
                (<HTMLButtonElement>document.querySelector('.winners')).disabled = false;
                break;
            case 'winners':
                (<HTMLDivElement>document.querySelector('.control_panel_wrapper')).classList.add('disabled');
                (<HTMLDivElement>document.querySelector('.garage_wrapper')).classList.add('disabled');
                (<HTMLDivElement>document.querySelector('.winners_wrapper')).classList.remove('disabled');
                (<HTMLButtonElement>document.querySelector('.garage')).disabled = false;
                (<HTMLButtonElement>document.querySelector('.winners')).disabled = true;
        }
    }
}

export default View;
