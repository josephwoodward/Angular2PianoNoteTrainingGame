import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";
import {INotePosition} from "../../contracts/INotePosition";
import {ViewChild} from "angular2/core";
import {IKeyPressed} from "../../contracts/IKeyPressed";
import {NoteFactory} from "../../services/NoteFactory";
import {OnChanges} from "angular2/core";
import {getTypeNameForDebugging} from "angular2/src/facade/lang";
import {NgClass} from "angular2/common";

@Component({
    selector: 'score',
    styleUrls: ['app/components/score/score.component.css'],
    directives: [NgClass],
    template: `
    <div *ngIf="gameIsStarted && userIsCorrect != null" class="score-notice">
        <p class="score-wrapper__label score-wrapper__label--wrong" [style.display]="!userIsCorrect ? 'block' : 'none'">Incorrect, try again...</p>
        <p class="score-wrapper__label score-wrapper__label--success" [style.display]="userIsCorrect ? 'block' : 'none'">Correct!</p>
        <!--<p style="color: #999;" *ngIf="generatedNote">{{ generatedNote?.key }}</p>-->
        <!--<p class="score-wrapper__label" [ngClass]="{'score-wrapper__label&#45;&#45;success': userIsCorrect, 'score-wrapper__label&#45;&#45;wrong': !userIsCorrect }">{{ correctMessage }}</p>-->
    </div>
    <div class="score-wrapper">
        <div class="score-wrapper__content">
        </div>
    </div>
    `,
    inputs: ['generatedNote', 'userIsCorrect', 'gameIsStarted']
})
export class ScoreComponent implements OnChanges {

    public correctMessage: string;
    public tester: boolean;

    constructor(){

    }

    ngOnChanges(changes:any) {
        console.log(changes);
        if (!changes.userIsCorrect) return;
        this.correctMessage = (changes.userIsCorrect.currentValue) ? "Correct!2" : "Incorrect, try again...";
    }

}