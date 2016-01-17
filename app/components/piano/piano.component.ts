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

    public pianoKeys: IPianoKey[];

    constructor(){
        this.pianoKeys = [
            { whiteKeyId: 16, blackKeyId: 17 }, //c
            { whiteKeyId: 18, blackKeyId: 19 },
            { whiteKeyId: 20, blackKeyId: 0 },
            { whiteKeyId: 21, blackKeyId: 22 },
            { whiteKeyId: 23, blackKeyId: 24 },
            { whiteKeyId: 25, blackKeyId: 26 },
            { whiteKeyId: 27, blackKeyId: 0 },
            { whiteKeyId: 28, blackKeyId: 29 }, //c
            { whiteKeyId: 30, blackKeyId: 31 },
            { whiteKeyId: 32, blackKeyId: 0 },
            { whiteKeyId: 33, blackKeyId: 34 },
            { whiteKeyId: 35, blackKeyId: 36 },
            { whiteKeyId: 37, blackKeyId: 38 },
            { whiteKeyId: 39, blackKeyId: 0 },
            { whiteKeyId: 40, blackKeyId: 41 }, // middle c
            { whiteKeyId: 42, blackKeyId: 43 },
            { whiteKeyId: 44, blackKeyId: 0 },
            { whiteKeyId: 45, blackKeyId: 46 },
            { whiteKeyId: 47, blackKeyId: 48 },
            { whiteKeyId: 49, blackKeyId: 50 },
            { whiteKeyId: 51, blackKeyId: 0 },
            { whiteKeyId: 52, blackKeyId: 53 }, //c
            { whiteKeyId: 54, blackKeyId: 55 },
            { whiteKeyId: 56, blackKeyId: 0 },
            { whiteKeyId: 57, blackKeyId: 58 },
            { whiteKeyId: 59, blackKeyId: 60 },
            { whiteKeyId: 61, blackKeyId: 62 },
            { whiteKeyId: 63, blackKeyId: 0 },
            { whiteKeyId: 64, blackKeyId: 0 } //c
        ];
    }

    keyPress(keyNumber: number, keyType: string) {
        alert(keyNumber + " " + keyType);
    }

}