import IWinner from '../../controller/IWinner';
import './winners.css';
declare class Winners {
    constructor();
    createTable(): HTMLTableElement;
    fillTable(data: IWinner[]): void;
    adjustCar(svg: SVGElement, color: string): void;
}
export default Winners;
