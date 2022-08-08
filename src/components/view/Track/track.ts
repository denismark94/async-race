import './track.css';
import ICar from '../../controller/ICar';

class Track {
    amountOfCars: number;
    selectedID: number;
    constructor() {
        const app = <HTMLDivElement>document.getElementById('app');
        const trackWrapper = document.createElement('div');
        trackWrapper.className = 'track_wrapper';
        const h2 = document.createElement('h2');
        h2.textContent = 'Garage (num)';
        const h3 = document.createElement('h3');
        h3.textContent = 'Page #num';
        trackWrapper.append(h2);
        trackWrapper.append(h3);
        app.append(trackWrapper);
        this.amountOfCars = 0;
        this.selectedID = -1;
    }

    drawCars(data: ICar[], callback: () => void) {
        const trackWrapper = <HTMLDivElement>document.querySelector('.track_wrapper');
        data.forEach((car) => {
            trackWrapper.append(this.generateCar(car));
        });
        callback();
        this.amount = data.length;
    }

    generateCar(carData: ICar) {
        const carWrapper = document.createElement('div');
        carWrapper.id = carData.id.toString();
        carWrapper.className = 'car_wrapper';
        const lineControlsWrapper = document.createElement('div');
        lineControlsWrapper.className = 'line-controls';
        const selectButton = document.createElement('button');
        selectButton.textContent = 'SELECT';
        selectButton.className = 'select_btn';
        const removeButton = document.createElement('button');
        removeButton.textContent = 'REMOVE';
        removeButton.className = 'remove_btn';
        const carName = document.createElement('span');
        carName.textContent = carData.name;
        lineControlsWrapper.append(selectButton);
        lineControlsWrapper.append(removeButton);
        lineControlsWrapper.append(carName);
        const engineControlWrapper = document.createElement('div');
        engineControlWrapper.className = 'engine_control_wrapper';
        const startButton = document.createElement('button');
        startButton.textContent = 'START';
        startButton.className = 'start_btn';
        const resetButton = document.createElement('button');
        resetButton.textContent = 'RESET';
        engineControlWrapper.append(startButton);
        engineControlWrapper.append(resetButton);
        const lineWrapper = document.createElement('div');
        lineWrapper.className = 'line_wrapper';
        const carTemplate: HTMLTemplateElement = <HTMLTemplateElement>document.getElementById('car_svg');
        const carSVG = <SVGElement>carTemplate.content.cloneNode(true);
        this.paint(carSVG, carData.color);
        const finishtemplate: HTMLTemplateElement = <HTMLTemplateElement>document.getElementById('finish');
        const finishLine = <SVGElement>finishtemplate.content.cloneNode(true);
        lineWrapper.append(carSVG);
        lineWrapper.append(finishLine);
        carWrapper.append(lineControlsWrapper);
        carWrapper.append(lineWrapper);
        carWrapper.append(engineControlWrapper);
        return carWrapper;
    }

    drawCar(car: ICar, assignListeners: (carElement: HTMLDivElement) => void) {
        const trackWrapper = <HTMLDivElement>document.querySelector('.track_wrapper');
        const carElement = this.generateCar(car);
        assignListeners(carElement);
        trackWrapper.appendChild(carElement);
        this.amount += 1;
    }

    removeCar(id: number) {
        const trackWrapper = <HTMLDivElement>document.querySelector('.track_wrapper');
        trackWrapper.removeChild(<HTMLDivElement>document.getElementById(`${id}`));
        this.amount -= 1;
    }

    updateCar(car: ICar, assignListeners: (carElement: HTMLDivElement) => void) {
        const carElement = this.generateCar(car);
        assignListeners(carElement);
        document.getElementById(`${car.id}`)?.replaceWith(carElement);
    }

    paint(svg: SVGElement, color: string) {
        const elements = svg.querySelectorAll('.paintable');
        elements.forEach((el) => el.setAttribute('fill', color));
    }

    set amount(amount: number) {
        this.amountOfCars = amount;
        const h2 = <HTMLHRElement>document.querySelector('h2');
        h2.textContent = `Garage (${amount})`;
    }

    get amount() {
        return this.amountOfCars;
    }

    // updateAmountOfcars(amount: number) {
    //     this.amount = amount;
    //     const h2 = <HTMLHRElement>document.querySelector('h2');
    //     h2.textContent = `Garage (${amount})`;
    // }
}

export default Track;
