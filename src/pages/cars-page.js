/**
 * Created by ashleighhenry on 13/10/2017.
 */
import {Page} from'../framework/page.js';
import {DataTable} from '../ui/data-table.js'
import {Button} from '../ui/button.js';
import {Image} from '../ui/image.js';
import {application} from '../app.js';


export class CarsPage extends Page {
    constructor(){
        super('Cars');
    }

    createElement() {
        super.createElement();
        let headers = "License Make Model Miles".split(' ');
        let dt = new DataTable(headers, application.dataService.cars);
        dt.appendToElement(this.element);

    }

    getElementString(){
        return '<div style="text-align:center;"><h3>Cars</h3></div>'
    }
}
