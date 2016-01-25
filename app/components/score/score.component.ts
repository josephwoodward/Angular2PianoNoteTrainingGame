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
import {IUserResultItem} from "../../contracts/IUserResultItem";

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
        <p>Correct: {{ correctTotal }}</p>
        <p>Incorrect: {{ incorrectTotal }}</p>
        </div>
    </div>
    `,
    inputs: ['generatedNote', 'userIsCorrect', 'gameIsStarted']
})
export class ScoreComponent implements OnChanges {

    public correctMessage: string;
    public tester: boolean;
    public correctTotal: number;
    public incorrectTotal: number;
    public result: IUserResultItem[] = [];

    constructor(){
        this.correctTotal = 0;
        this.incorrectTotal = 0;
    }

    ngOnChanges(changes:any) {
        debugger;
        if (changes.userIsCorrect === undefined) return;

        if (changes.userIsCorrect.currentValue != null) {
            if (changes.userIsCorrect.currentValue === true){
                this.result.push({ expected: "1", actual: "2" });
                this.correctTotal++;
            } else {
                this.result.push({ expected: "1", actual: "2" });
                this.incorrectTotal++;
            }
        }
    }

}