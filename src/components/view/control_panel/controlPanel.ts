import './control_panel.css';

class ControlPanel {
    constructor() {
        const app = document.getElementById('app');
        const panelWrapper = document.createElement('div');
        panelWrapper.className = 'control_panel_wrapper';

        const toGarageButton = document.createElement('button');
        const toWinnersButton = document.createElement('button');
        toGarageButton.textContent = 'TO GARAGE';
        toGarageButton.className = 'garage';
        toWinnersButton.textContent = 'TO WINNERS';
        toWinnersButton.className = 'winners';
        panelWrapper.append(toGarageButton);
        panelWrapper.append(toWinnersButton);

        const createWrapper = document.createElement('div');
        createWrapper.className = 'create_wrapper';
        const crNameInput = document.createElement('input');
        const crColorinput = document.createElement('input');
        crColorinput.type = 'color';
        crColorinput.value = '#FFFFFF';
        const createButton = document.createElement('button');
        createButton.textContent = 'CREATE';
        createWrapper.append(crNameInput, crColorinput, createButton);
        panelWrapper.append(createWrapper);

        const updateWrapper = document.createElement('div');
        updateWrapper.className = 'upadate_wrapper';
        const updNameInput = document.createElement('input');
        const updColorinput = document.createElement('input');
        updColorinput.type = 'color';
        updColorinput.value = '#FFFFFF';
        const updateButton = document.createElement('button');
        updateButton.textContent = 'UPDATE';
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
        generateCarsButton.className = 'generate';

        panelWrapper.append(raceButton);
        panelWrapper.append(resetButton);
        panelWrapper.append(generateCarsButton);

        app?.append(panelWrapper);
    }
}

export default ControlPanel;
