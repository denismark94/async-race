import './control_panel.css';

class ControlPanel {
    constructor() {
        const app = document.getElementById('app');
        const panelWrapper = document.createElement('div');
        panelWrapper.className = 'control_panel_wrapper';
        const createWrapper = document.createElement('div');
        createWrapper.className = 'create_wrapper';
        const crNameInput = document.createElement('input');
        crNameInput.className = 'create_name_input';
        const crColorinput = document.createElement('input');
        crColorinput.type = 'color';
        crColorinput.value = '#FFFFFF';
        crColorinput.className = 'create_color_input';
        const createButton = document.createElement('button');
        createButton.textContent = 'CREATE';
        createButton.className = 'create_button';
        createWrapper.append(crNameInput, crColorinput, createButton);
        panelWrapper.append(createWrapper);
        const updateWrapper = document.createElement('div');
        updateWrapper.className = 'update_wrapper';
        const updNameInput = document.createElement('input');
        updNameInput.className = 'update_name_input';
        const updColorinput = document.createElement('input');
        updColorinput.type = 'color';
        updColorinput.value = '#FFFFFF';
        updColorinput.className = 'update_color_input';
        const updateButton = document.createElement('button');
        updateButton.textContent = 'UPDATE';
        updateButton.className = 'update_button';
        updateWrapper.append(updNameInput, updColorinput, updateButton);
        panelWrapper.append(updateWrapper);

        const raceButton = document.createElement('button');
        const resetButton = document.createElement('button');
        const generateCarsButton = document.createElement('button');

        raceButton.textContent = 'RACE';
        raceButton.className = 'race';
        resetButton.textContent = 'RESET';
        resetButton.className = 'reset';
        generateCarsButton.textContent = 'GENERATE CARS';
        generateCarsButton.className = 'generate_button';

        panelWrapper.append(raceButton);
        panelWrapper.append(resetButton);
        panelWrapper.append(generateCarsButton);

        app?.append(panelWrapper);
        this.disableUpdateFields();
    }

    clearFields(type: string) {
        (<HTMLInputElement>document.querySelector(`.${type}_name_input`)).value = '';
        (<HTMLInputElement>document.querySelector(`.${type}_color_input`)).value = '#ffffff';
    }

    enableUpdateFields() {
        (<HTMLInputElement>document.querySelector('.update_name_input')).disabled = false;
        (<HTMLInputElement>document.querySelector('.update_color_input')).disabled = false;
        (<HTMLInputElement>document.querySelector('.update_button')).disabled = false;
    }

    disableUpdateFields() {
        (<HTMLInputElement>document.querySelector('.update_name_input')).disabled = true;
        (<HTMLInputElement>document.querySelector('.update_color_input')).disabled = true;
        (<HTMLInputElement>document.querySelector('.update_button')).disabled = true;
    }
}

export default ControlPanel;
