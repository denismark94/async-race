import './nav.css';

class Nav {
    constructor() {
        const app = document.getElementById('app');
        const nav = document.createElement('nav');
        nav.className = 'navigation';

        const toGarageButton = document.createElement('button');
        const toWinnersButton = document.createElement('button');
        toGarageButton.textContent = 'TO GARAGE';
        toGarageButton.className = 'garage';
        toWinnersButton.textContent = 'TO WINNERS';
        toWinnersButton.className = 'winners';
        nav.append(toGarageButton);
        nav.append(toWinnersButton);

        app?.append(nav);
    }
}

export default Nav;
