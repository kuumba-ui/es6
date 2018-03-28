/**
 * Created by ashleighhenry on 12/10/2017.
 */
import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement{
    constructor(centerOfMap, data){
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
    }

    createElement() {
        super.createElement();

            setTimeout(() => {
                let map = new window.google.maps.Map(document.getElementById('map'), {
                    zoom: 13,
                    center: this.centerOfMap
                });

                for (let vehicle of this.data) {
                    let [lat, long] = vehicle.latLong.split(' ');

                    let myLatLng = new window.google.maps.LatLng(lat, long);

                    let marker = new window.google.maps.Marker({
                        position: myLatLng,
                        map: map
                    });
                    marker.setMap(map);
                }
            }, 0);

    }


    getElementString(){
        return `
            <div style="width:400px; height: 400px;" id="map"></div>
        `
    }
}