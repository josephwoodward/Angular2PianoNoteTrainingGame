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
import {ScoreTracker} from "../../services/ScoreTracker";
import {NgFor} from "angular2/common";
import {OnInit} from 'angular2/core';

@Component({
    selector: 'score',
    styleUrls: ['app/components/score/score.component.css'],
    directives: [NgClass, NgFor],
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

        <ul>
        <li *ngFor="#note of notes">{{ note.correct }} {{ note.expectedKeyNumber }} = {{ note.actualKeyNumber }}</li>
        </ul>

        </div>
    </div>
    `,
    inputs: ['generatedNote', 'userIsCorrect', 'gameIsStarted'],
    /*providers: [ScoreTracker]*/
})
export class ScoreComponent implements OnChanges, OnInit {


    public correctTotal: number;
    public incorrectTotal: number;
    public scoreTracker: ScoreTracker;
    public notes = [];

    constructor(private tracker: ScoreTracker){
        this.correctTotal = 0;
        this.incorrectTotal = 0;
        this.scoreTracker = tracker;
    }

    ngOnInit() {
        this.scoreTracker.todos$.subscribe(note => {
            this.notes.push(note[note.length - 1]);
        });
    }

    ngOnChanges(changes:any) {
        if (changes.userIsCorrect === undefined) return;

        if (changes.userIsCorrect.currentValue != null) {
            if (changes.userIsCorrect.currentValue === true){
                this.correctTotal++;
            } else {
                this.incorrectTotal++;
            }
        }
    }
}