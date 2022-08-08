import ICar from './ICar';
import IWinner from './IWinner';

class Controller {
    cars: ICar[];
    winners: IWinner[];
    baseURL: string;
    constructor() {
        this.baseURL = 'http://localhost:3000';
        this.cars = [];
        this.winners = [];
    }

    getCars(callback: (data: ICar[]) => void) {
        fetch(`${this.baseURL}/garage`)
            .then((response) => response.json())
            .then((data) => {
                this.cars = [];
                for (const car of data) {
                    this.cars.push(<ICar>car);
                }
                callback(this.cars);
            })
            .catch((err) => console.error(err));
    }

    getWinners(callback: (data: IWinner[]) => void) {
        this.winners = [];
        fetch(`${this.baseURL}/winners`)
            .then((response) => response.json())
            .then((data) => {
                const promises = [];
                const temp = new Map();
                for (const winner of data) {
                    const id = (<IWinner>winner).id;
                    promises.push(fetch(`${this.baseURL}/garage/${id}`).then((response) => response.json()));
                    temp.set(id, winner);
                }
                Promise.all(promises)
                    .then((response) => {
                        for (const car of response) {
                            this.winners.push(<IWinner>{ ...car, ...temp.get((<ICar>car).id) });
                        }
                        callback(this.winners);
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    }

    addCar(item: ICar) {
        return fetch(`${this.baseURL}/garage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        });
    }

    updateCar(item: ICar) {
        return fetch(`${this.baseURL}/garage/${item.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        });
    }

    deleteCar(id: number) {
        return fetch(`${this.baseURL}/garage/${id}`, {
            method: 'DELETE',
        });
    }

    getCar(id: number) {
        fetch(`${this.baseURL}/garage/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                return <ICar>data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default Controller;
