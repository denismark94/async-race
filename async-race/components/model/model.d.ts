import View from '../view/view';
import Controller from '../controller/controller';
declare class Model {
    view: View;
    controller: Controller;
    constructor();
    start(): void;
    addListeners(): void;
    assignCarListeners(carElement: HTMLDivElement): void;
}
export default Model;
