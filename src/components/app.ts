import Model from './model/model';
import View from './view/view';
import Controller from './controller/controller';
class App {
    model: Model;
    view: View;
    controller: Controller;
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.controller = new Controller();
    }

    draw() {
        this.view.draw();
    }
}

export default App;
