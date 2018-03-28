/**
 * Created by ashleighhenry on 11/10/2017.
 */

//import {Car} from './classes/car.js';
//import {Drone} from './classes/drone.js';
import $ from 'jquery';
//import {DataTable} from './ui/data-table.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './pages/home-page.js';
import {CarsPage} from './pages/cars-page.js';
import {MapPage} from './pages/map-page.js';


export class App extends ApplicationBase{
    constructor(){
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage());
        this.addRoute('Drones', null);
        this.addRoute('Map', new MapPage());

    }
}

export let application = new App();
application.show($('body'));



//let car = dataService.getCarByLicense('AT9900');
//console.log(car);

//let cars = dataService.getCarsSortedByLicense();
//for (let car of cars)
//    console.log(car.license);

//for (let car of dataService.cars)
//console.log(car.license);
/**
for (let e of dataService.errors)
console.log(e.message);

let cars = dataService.filterCarsByMake('e');

for (let car of cars)
    console.log(car.make);

let tb = new TitleBar('app');
tb.addLink('Home','');
tb.appendToElement($('body'));



let i = new Image('../images/one.jpg','description');
i.appendToElement($('body'));

let b = new Button('Click me');
b.appendToElement($('body'));


let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, dataService.cars);
map.appendToElement($('body'));
**/