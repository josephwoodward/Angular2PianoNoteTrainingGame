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
import 'rxjs/add/operator/filter';

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
        <p>Total Notes: {{ scoreTracker.totalNotesPlayed }} of {{ scoreTracker.notesLimit }}</p>
        <p class="tries tries--correct">Correct Notes: {{ correctTotal }} of {{ scoreTracker.notesLimit }}</p>
        <p class="tries tries--incorrect">Incorrect Notes: {{ incorrectTotal }} of {{ scoreTracker.notesLimit }}</p>
        <!--<ul>
            <li *ngFor="#note of notes">{{ note.correct }} {{ note.expectedKeyNumber }} = {{ note.actualKeyNumber }}</li>
        </ul>-->

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
        var note : IUserResultItem;
        this.scoreTracker.todos$.subscribe(notes => {
            note = <IUserResultItem>notes[notes.length - 1];
            this.notes.push(note);
            if (note.correct) {
                this.correctTotal++;
            } else {
                this.incorrectTotal++;
            }
        });
    }

    ngOnChanges(changes:any) {

/*
        debugger;
        var res = this.scoreTracker.todos$.filter(function(x){
            alert('here');
            return true;
        });

*/
    }
}