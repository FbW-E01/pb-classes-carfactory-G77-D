class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
const car1 = new Car("Mini", "xr", "1977");



const car2 = new Car("Vw", "R","1977");
const car3 = new Car("BmW", "M1", "1978");
const car4 = new Car("Honda", "Ri", "1971");
const car5 = new Car("F1", "Xr","1958");
const car6 = new Car("Mclaren", "P1", "2001");
const car7 = new Car("Lamborghini", "Roadster","1977");
const car8 = new Car("Pagani", "Bc","1985");
const car9 = new Car("Aston Martin", "xjr","1989");
const car10 = new Car("Etype", "T1" ,"1961");

const garage = [car1, car2, car3,car4,car5,car5,car6,car7,car8,car9,car10];
console.log(garage);

