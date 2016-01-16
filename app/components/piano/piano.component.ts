import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {EventEmitter} from "events";

/*
 Walkthrough https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
 */

@Component({
    selector: 'piano',
    styleUrls: ['app/components/piano/piano.component.css'],
    templateUrl: 'app/components/piano/piano.component.html',
})

export class PianoComponent {

    public deleted;

    constructor(){
        this.deleted = new EventEmitter();
    }

    pressKey(keyNumber: number) {
        this.deleted.emit("Boo" + keyNumber);
    }

    /*pressKey(keyNumber: number){
        alert(keyNumber);
    }*/

}