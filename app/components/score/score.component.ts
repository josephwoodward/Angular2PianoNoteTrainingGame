import {Component} from "angular2/core";
import {OnChanges} from "angular2/core";
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
    </div>
    <div class="score-wrapper">
        <div class="score-wrapper__content">
        <p>Total Notes: {{ scoreTracker.totalNotesPlayed }} of {{ scoreTracker.notesLimit }}</p>
        <p class="tries tries--correct">Correct Notes: {{ scoreTracker.totalCorrect }} of {{ scoreTracker.notesLimit }}</p>
        <p class="tries tries--incorrect">Incorrect Notes: {{ scoreTracker.totalIncorrect }} of {{ scoreTracker.notesLimit }}</p>
        <ul>
            <li *ngFor="#note of notes">{{ note.correct }} {{ note.expectedKeyNumber }} = {{ note.actualKeyNumber }}</li>
        </ul>
        </div>
    </div>
    `,
    inputs: ['generatedNote', 'userIsCorrect', 'gameIsStarted']
})
export class ScoreComponent implements OnChanges, OnInit {

    public scoreTracker: ScoreTracker;
    public notes = [];

    constructor(private tracker: ScoreTracker){
        this.scoreTracker = tracker;
    }

    ngOnInit() {
        var note : IUserResultItem;
        this.scoreTracker.todos$.subscribe(notes => {
            note = <IUserResultItem>notes[notes.length - 1];
            this.notes.push(note);
        });
    }

    resetScore() {
        this.scoreTracker.resetScore();
    }

    ngOnChanges(changes:any) {
        console.log(changes);
    }
}