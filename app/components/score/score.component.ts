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
    styleUrls: ['app/components/score/score.component.css'],
    template: `
    <div class="score-wrapper">
        <div class="score-wrapper__content">
        <div *ngIf="gameIsStarted && userIsCorrect != null">
            <p class="score-wrapper__label score-wrapper__label--wrong" [style.display]="!userIsCorrect ? 'block' : 'none'">Incorrect, try again...</p>
            <p class="score-wrapper__label score-wrapper__label--success" [style.display]="userIsCorrect ? 'block' : 'none'">Correct!</p>
            <!--<p style="color: #999;" *ngIf="generatedNote">{{ generatedNote?.key }}</p>-->
        </div>
        </div>
    </div>
    `,
    inputs: ['generatedNote', 'userIsCorrect', 'gameIsStarted']
})
export class ScoreComponent implements OnChanges {

    constructor(){

    }

    ngOnChanges(changes:{}):any {
        /*console.log(changes);*/
    }

}