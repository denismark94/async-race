import IWinner from '../../controller/IWinner';
import './winners.css';

class Winners {
    constructor() {
        const app = <HTMLDivElement>document.getElementById('app');
        const winnersWrapper = document.createElement('div');
        winnersWrapper.className = 'winners_wrapper';
        const h2 = document.createElement('h2');
        h2.textContent = 'Winners (0)';
        const h3 = document.createElement('h3');
        h3.textContent = 'Page #1';
        winnersWrapper.append(h2);
        winnersWrapper.append(h3);
        winnersWrapper.append(this.createTable());
        app.append(winnersWrapper);
    }

    createTable() {
        const columns = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];
        const table = document.createElement('table');
        const head = table.createTHead();
        columns.forEach((col) => {
            const cell = document.createElement('th');
            cell.textContent = col;
            head.appendChild(cell);
        });
        table.createTBody();
        table.className = 'winners_table';
        return table;
    }

    fillTable(data: IWinner[]) {
        const tableBody = (<HTMLTableElement>document.querySelector('.winners_table')).tBodies[0];
        const carTemplate: HTMLTemplateElement = <HTMLTemplateElement>document.getElementById('car_svg');
        data.forEach((winner) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = `${tableBody.rows.length}`;
            const carSVG = <SVGElement>carTemplate.content.cloneNode(true);
            this.adjustCar(carSVG, <string>winner.color);
            row.insertCell().appendChild(carSVG);
            row.insertCell().textContent = `${<string>winner.name}`;
            row.insertCell().textContent = `${winner.wins}`;
            row.insertCell().textContent = `${winner.time}`;
        });
        const h2 = <HTMLHRElement>document.querySelector('.winners_wrapper h2');
        h2.textContent = `Winners (${data.length})`;
    }

    adjustCar(svg: SVGElement, color: string) {
        const elements = svg.querySelectorAll('.paintable');
        elements.forEach((el) => el.setAttribute('fill', color));
    }
}

export default Winners;
