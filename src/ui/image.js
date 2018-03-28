/**
 * Created by ashleighhenry on 12/10/2017.
 */
import {BaseElement} from './base-element.js';

export class Image extends BaseElement{
    constructor(fileName, altText){
        super();
        this.fileName = fileName;
        this.altText = altText;
    }

    getElementString(){
        return `
            <img src="${this.fileName}" style="width:100%" alt="${this.altText}"/>
        `
    }
}