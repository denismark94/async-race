import View from '../view/view';
import Controller from '../controller/controller';
import ICar from '../controller/ICar';
import IWinner from '../controller/IWinner';

class Model {
    view: View;
    controller: Controller;
    constructor() {
        this.view = new View();
        this.controller = new Controller();
    }

    start() {
        this.controller.getWinners((data: IWinner[]) => this.view.winners.fillTable(data));
        this.controller.getCars((data: ICar[]) =>
            this.view.track.drawCars(data, (car: HTMLDivElement) => this.assignCarListeners(car))
        );
        this.addListeners();
    }

    addListeners() {
        const garageButton = <HTMLButtonElement>document.querySelector('.garage');
        garageButton.addEventListener('click', () => {
            this.view.state = 'garage';
        });

        const winnersButton = <HTMLButtonElement>document.querySelector('.winners');
        winnersButton.addEventListener('click', () => {
            this.view.state = 'winners';
        });

        const createButton = <HTMLButtonElement>document.querySelector('.create_button');
        createButton.addEventListener('click', () => {
            const name = (<HTMLInputElement>document.querySelector('.create_name_input')).value;
            const color = (<HTMLInputElement>document.querySelector('.create_color_input')).value;
            const car = { name: name, color: color, id: this.view.track.amount + 1 };
            this.controller
                .addCar(car)
                .then(() => {
                    this.controller.getCars((data: ICar[]) =>
                        this.view.track.drawCars(data, (car: HTMLDivElement) => this.assignCarListeners(car))
                    );
                    this.view.controlPanel.clearFields('create');
                })
                .catch((err) => console.error(err));
        });

        const updateButton = <HTMLButtonElement>document.querySelector('.update_button');
        updateButton.addEventListener('click', () => {
            const name = (<HTMLInputElement>document.querySelector('.update_name_input')).value;
            const color = (<HTMLInputElement>document.querySelector('.update_color_input')).value;
            const car = { name: name, color: color, id: this.view.track.selectedID };
            this.controller
                .updateCar(car)
                .then(() => {
                    this.controller.getCars((data: ICar[]) =>
                        this.view.track.drawCars(data, (car: HTMLDivElement) => this.assignCarListeners(car))
                    );
                    this.view.controlPanel.clearFields('update');
                    this.view.controlPanel.disableUpdateFields();
                })
                .catch((err) => console.error(err));
        });

        const generateButton = <HTMLButtonElement>document.querySelector('.generate_button');
        generateButton.addEventListener('click', () => {
            const brands = ['BMW', 'Audi', 'Mersedes', 'Lada', 'VolksWagen', 'Jeep', 'Toyota', 'Ford'];
            const models = ['X6', 'X7', 'SLK', 'Wrangler', '2106', 'Vantage', 'Q7', 'Mark II', 'F150'];
            let amount = this.view.track.amount + 1;
            const promises = [];
            for (let i = 0; i < 2; i += 1) {
                const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                const brand = brands[Math.floor(Math.random() * brands.length)];
                const model = models[Math.floor(Math.random() * models.length)];
                const car = { name: `${brand} ${model}`, color: color, id: (amount += 1) };
                promises.push(this.controller.addCar(car));
            }
            Promise.all(promises)
                .then(() => {
                    this.controller.getCars((data: ICar[]) =>
                        this.view.track.drawCars(data, (car: HTMLDivElement) => this.assignCarListeners(car))
                    );
                })
                .catch((err) => console.error(err));
        });

        const cars = document.querySelectorAll('.car_wrapper');
        cars.forEach((car) => {
            this.assignCarListeners(<HTMLDivElement>car);
        });

        const nextButton = <HTMLButtonElement>document.querySelector('.next_btn');
        nextButton.addEventListener('click', () => {
            this.view.track.page += 1;
        });

        const prevButton = <HTMLButtonElement>document.querySelector('.prev_btn');
        prevButton.addEventListener('click', () => {
            this.view.track.page -= 1;
        });
    }

    assignCarListeners(carElement: HTMLDivElement) {
        const removeButton = <HTMLButtonElement>carElement.querySelector('.remove_btn');
        removeButton.addEventListener('click', () => {
            this.controller
                .deleteCar(Number(carElement.id))
                .then(() => {
                    this.controller.getCars((data: ICar[]) =>
                        this.view.track.drawCars(data, (car: HTMLDivElement) => this.assignCarListeners(car))
                    );
                })
                .catch((err) => console.error(err));
        });

        const selectButton = <HTMLButtonElement>carElement.querySelector('.select_btn');
        selectButton.addEventListener('click', () => {
            const name = <string>(<HTMLSpanElement>carElement.querySelector('span')).textContent;
            const color = <string>(<SVGElement>carElement.querySelector('.paintable')).getAttribute('fill');
            this.view.track.selectedID = Number(carElement.id);
            this.view.controlPanel.enableUpdateFields();
            (<HTMLInputElement>document.querySelector('.update_color_input')).value = color;
            (<HTMLInputElement>document.querySelector('.update_name_input')).value = name;
        });
        // const carSVG = <SVGElement>car.querySelector('.car');
        // startButton?.addEventListener('click', () => carSVG.classList.add('moving'));
    }
}

export default Model;
