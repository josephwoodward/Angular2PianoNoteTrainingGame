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
            { keyId: 28, hasSemitone: false, semiToneKeyId: 0 },
            { keyId: 30, hasSemitone: true, semiToneKeyId: 31 },
            { keyId: 32, hasSemitone: true, semiToneKeyId: 0 },
            { keyId: 33, hasSemitone: false, semiToneKeyId: 34 },
            { keyId: 35, hasSemitone: true, semiToneKeyId: 36 },
            { keyId: 37, hasSemitone: true, semiToneKeyId: 38 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 34, hasSemitone: false, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: false, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 34, hasSemitone: false, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: false, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 34, hasSemitone: false, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: false, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: true, semiToneKeyId: 12 },
            { keyId: 33, hasSemitone: false, semiToneKeyId: 12 },
        ];
    }

    pressKey(keyNumber: IPianoKey) {
        alert(keyNumber.keyId);
    }

    /*pressKey(keyNumber: number){
        alert(keyNumber);
    }*/

}