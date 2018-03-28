/**
 * Created by ashleighhenry on 11/10/2017.
 */
import {Vehicle} from './vehicle.js';

export class Car extends Vehicle {
    constructor(license, model, latLong){
        super(license, model, latLong);
        this.miles = null;
        this.make = null;
    }
}