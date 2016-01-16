import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {EventEmitter} from "events";
import {IPianoKey} from "../../contracts/IPianoKey";

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

    public pianoKeys: IPianoKey[];

    constructor(){
        /*this.deleted = new EventEmitter();*/
        this.pianoKeys = [
            { whiteKeyId: 28, blackKeyId: 0 },
            { whiteKeyId: 30, blackKeyId: 31 },
            { whiteKeyId: 32, blackKeyId: 0 },
            { whiteKeyId: 33, blackKeyId: 34 },
            { whiteKeyId: 35, blackKeyId: 36 },
            { whiteKeyId: 37, blackKeyId: 38 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 34, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 34, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 34, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
            { whiteKeyId: 33, blackKeyId: 12 },
        ];
    }

    keyPress(keyNumber: IPianoKey, keyType: string) {
        alert(keyNumber.whiteKeyId + keyType);
    }

    /*pressKey(keyNumber: number){
        alert(keyNumber);
    }*/

}