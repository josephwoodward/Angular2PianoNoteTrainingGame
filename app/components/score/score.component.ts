import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";
import {INotePosition} from "../../contracts/INotePosition";
import {ViewChild} from "angular2/core";
import {IKeyPressed} from "../../contracts/IKeyPressed";
import {NoteFactory} from "../../services/NoteFactory";
import {OnChanges} from "angular2/core";

@Component({
    selector: 'score',
    styles:[ `

        .score-wrapper {
            width: 280px;
            height: 500px;
            background-color: #fff;
            position: absolute;
            top: 0;
            right: 0;
            -webkit-box-shadow: -1px 0px 5px -2px rgba(0,0,0,0.75);
            -moz-box-shadow: -1px 0px 5px -2px rgba(0,0,0,0.75);
            box-shadow: -1px 0px 5px -2px rgba(0,0,0,0.75);
            z-index: 999;
        }

        .score-wrapper__content {
            padding: 20px;
        }

        .successfully-saved.hide-opacity {
            opacity: 0;
        }

        .successfully-saved {
            color: #FFFFFF;
            text-align: center;

            -webkit-transition: opacity 3s ease-in-out;
            -moz-transition: opacity 3s ease-in-out;
            -ms-transition: opacity 3s ease-in-out;
            -o-transition: opacity 3s ease-in-out;
             opacity: 1;
        }
    `],
    template: `
    <div class="score-wrapper">
        <div class="score-wrapper__content">
        <p style="color: #fff;" *ngIf="generatedNote">{{ generatedNote?.key }}</p>
        <p style="color: red; font-weight: bold;" [style.display]="!userIsCorrect ? 'block' : 'none'">Wrong!</p>
        <p style="color: green; font-weight: bold;" [style.display]="userIsCorrect ? 'block' : 'none'">Correct!</p>
        </div>
    </div>
    `,
    inputs: ['generatedNote', 'userIsCorrect']
})
export class ScoreComponent implements OnChanges {

    constructor(){

    }

    ngOnChanges(changes:{}):any {
        /*console.log(changes);*/
    }

}