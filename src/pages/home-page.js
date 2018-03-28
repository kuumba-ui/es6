/**
 * Created by ashleighhenry on 13/10/2017.
 */
import {Page} from '../framework/page.js'
import {Button} from '../ui/button.js';
import {Image} from '../ui/image.js';
import {application} from '../app.js';


export class HomePage extends Page {
    constructor(){
        super('Home');
    }

    createElement() {
        super.createElement();

        let i = new Image('../../images/one.jpg');
        i.appendToElement(this.element);

        let styleString = '';
        let b = new Button('Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Cars'));

        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Drones'));


    }

    getElementString(){
        return '<div style="text-align:center;"></div>'
    }
}
