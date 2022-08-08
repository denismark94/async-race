import View from '../view/view';
import Controller from '../controller/controller';
import ICar from '../controller/ICar';

class Model {
    view: View;
    controller: Controller;
    constructor() {
        this.view = new View();
        this.controller = new Controller();
    }

    start() {
        // const car = {
        //     id: 5,
        //     name: 'VW',
        //     color: '#505050',
        // };
        // this.controller.addCar(car);
        // this.controller.updateCar();
        // this.controller.deleteCar(5);
        this.controller.getCars((data: ICar[]) => this.view.draw(data, () => this.addListeners()));
    }

    addListeners() {
        const cars = document.querySelectorAll('.car_wrapper');
        cars.forEach((car) => {
            this.assignCarListeners(<HTMLDivElement>car);
        });
        const createButton = <HTMLButtonElement>document.querySelector('.create_button');
        createButton.addEventListener('click', () => {
            const name = (<HTMLInputElement>document.querySelector('.create_name_input')).value;
            const color = (<HTMLInputElement>document.querySelector('.create_color_input')).value;
            const car = { name: name, color: color, id: this.view.track.amount + 1 };
            this.controller.addCar(car);
            this.view.track.drawCar(car, (carElement) => this.assignCarListeners(carElement));
            this.view.controlPanel.clearFields('create');
        });

        const updateButton = <HTMLButtonElement>document.querySelector('.update_button');
        updateButton.addEventListener('click', () => {
            const name = (<HTMLInputElement>document.querySelector('.update_name_input')).value;
            const color = (<HTMLInputElement>document.querySelector('.update_color_input')).value;
            const car = { name: name, color: color, id: this.view.track.selectedID };
            this.controller.updateCar(car);
            this.view.track.updateCar(car, (carElement) => this.assignCarListeners(carElement));
            this.view.controlPanel.clearFields('update');
        });

        const generateButton = <HTMLButtonElement>document.querySelector('.generate_button');
        generateButton.addEventListener('click', () => {
            const brands = ['BMW', 'Audi', 'Mersedes', 'Lada', 'VolksWagen', 'Jeep', 'Toyota', 'Ford'];
            const models = ['X6', 'X7', 'SLK', 'Wrangler', '2106', 'Vantage', 'Q7', 'Mark II', 'F150'];
            let amount = this.view.track.amount;
            for (let i = 0; i < 2; i += 1) {
                const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                console.log(color);
                const brand = brands[Math.floor(Math.random() * brands.length)];
                const model = models[Math.floor(Math.random() * models.length)];
                const car = { name: `${brand} ${model}`, color: color, id: (amount += 1) };
                this.controller.addCar(car);
                this.view.track.drawCar(car, (carElement) => this.assignCarListeners(carElement));
            }
        });
    }

    assignCarListeners(carElement: HTMLDivElement) {
        // const startButton = carElement.querySelector('.start_btn');
        const removeButton = <HTMLButtonElement>carElement.querySelector('.remove_btn');
        removeButton.addEventListener('click', () => {
            this.controller.deleteCar(Number(carElement.id));
            this.view.track.removeCar(Number(carElement.id));
        });

        const selectButton = <HTMLButtonElement>carElement.querySelector('.select_btn');
        selectButton.addEventListener('click', () => {
            const name = <string>(<HTMLSpanElement>carElement.querySelector('span')).textContent;
            const color = <string>(<SVGElement>carElement.querySelector('.paintable')).getAttribute('fill');
            this.view.track.selectedID = Number(carElement.id);
            (<HTMLInputElement>document.querySelector('.update_color_input')).value = color;
            (<HTMLInputElement>document.querySelector('.update_name_input')).value = name;
        });
        // const carSVG = <SVGElement>car.querySelector('.car');
        // startButton?.addEventListener('click', () => carSVG.classList.add('moving'));
    }
}

export default Model;
