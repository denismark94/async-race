import ICar from './ICar';

class Controller {
    cars: ICar[];
    winners: object[];
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
                for (const car of data) {
                    this.cars.push(<ICar>car);
                }
                callback(this.cars);
            })
            .catch((err) => console.log(err));
    }

    getWinners(baseURL: string) {
        fetch(`${baseURL}/winners`)
            .then((response) => response.json())
            .then((data) => {
                for (const winner of data) {
                    this.winners.push(<object>winner);
                }
            })
            .catch((err) => console.log(err));
    }

    addCar(item: ICar) {
        fetch(`${this.baseURL}/garage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    updateCar(item: ICar) {
        fetch(`${this.baseURL}/garage/${item.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    deleteCar(id: number) {
        fetch(`${this.baseURL}/garage/${id}`, {
            method: 'DELETE',
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
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
