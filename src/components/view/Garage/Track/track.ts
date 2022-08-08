import './track.css';
import ICar from '../../../controller/ICar';

class Track {
    amountOfCars: number;
    selectedID: number;
    amountOfPages: number;
    currentPage: number;
    garage: ICar[];
    constructor() {
        const app = <HTMLDivElement>document.getElementById('app');
        const garageWrapper = document.createElement('div');
        garageWrapper.className = 'garage_wrapper';

        const h2 = document.createElement('h2');
        h2.textContent = 'Garage (num)';
        const h3 = document.createElement('h3');
        h3.textContent = 'Page #num';

        const trackWrapper = document.createElement('div');
        trackWrapper.className = 'track_wrapper';

        const pagbuttonsWrapper = document.createElement('div');
        pagbuttonsWrapper.className = 'pagination_buttons_wrapper';
        const prevButton = document.createElement('button');
        prevButton.className = 'prev_btn';
        prevButton.textContent = 'PREV';
        const nextButton = document.createElement('button');
        nextButton.className = 'next_btn';
        nextButton.textContent = 'NEXT';
        pagbuttonsWrapper.append(prevButton);
        pagbuttonsWrapper.append(nextButton);

        garageWrapper.append(h2);
        garageWrapper.append(h3);
        garageWrapper.append(trackWrapper);
        garageWrapper.append(pagbuttonsWrapper);
        app.append(garageWrapper);
        this.amountOfCars = 0;
        this.amountOfPages = 0;
        this.garage = [];
        this.currentPage = 0;
        this.selectedID = -1;
    }

    drawCars(data: ICar[], addListeners: (carElement: HTMLDivElement) => void) {
        this.garage = data;
        this.amount = data.length;
        const trackWrapper = <HTMLDivElement>document.querySelector('.track_wrapper');
        trackWrapper.innerHTML = '';
        data.forEach((car) => {
            const carElement = this.generateCar(car);
            addListeners(carElement);
            trackWrapper.append(carElement);
        });
        while (this.currentPage * 7 >= this.amount) {
            this.page -= 1;
        }
        this.showCurrentPage();
    }

    showCurrentPage() {
        const trackWrapper = <HTMLDivElement>document.querySelector('.track_wrapper');
        trackWrapper.querySelectorAll('.car_wrapper').forEach((wrapper) => wrapper.classList.add('disabled'));
        for (let i = this.currentPage * 7; i < Math.min(7 * (this.currentPage + 1), this.garage.length); i += 1) {
            (<HTMLDivElement>document.getElementById(`${this.garage[i].id}`)).classList.remove('disabled');
        }
        const h3 = <HTMLHRElement>document.querySelector('h3');
        h3.textContent = `Page #${this.currentPage + 1}`;
    }

    set page(page: number) {
        if (page * 7 >= this.amount || page < 0) return;
        this.currentPage = page;
        this.showCurrentPage();
    }

    get page() {
        return this.currentPage;
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
}

export default Track;
