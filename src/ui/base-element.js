/**
 * Created by ashleighhenry on 12/10/2017.
 */
import $ from'jquery';

export class BaseElement{
    constructor(){
        this.element = null; //Jquery object
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }

    createElement(){
        let s = this.getElementString();
        this.element = $(s);
    }
    getElementString(){
        throw'please override getElement strig() in base element'
    }
    enableJS(){
        componentHandler.upgradeElement(this.element[0]);
    }


}
