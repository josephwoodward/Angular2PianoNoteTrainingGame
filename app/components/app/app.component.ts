import {Component} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";
import {INotePosition} from "../../contracts/INotePosition";
import {ViewChild} from "angular2/core";
import {IKeyPressed} from "../../contracts/IKeyPressed";
import {NoteFactory} from "../../services/NoteFactory";
import {ScoreComponent} from "../score/score.component";
import {ScoreTracker} from "../../services/ScoreTracker";

/*https://angular.io/docs/ts/latest/api/core/OnChanges-interface.html*/

@Component({
    selector: 'piano-app',
    styleUrls: ['app/components/app/app.component.css'],
    template: `
        <div id="gameWrapper">
            <div id="canvasPanel">
                <score [generatedNote]="generatedNote" [userIsCorrect]="userIsCorrect" [gameIsStarted]="gameIsStarted"></score>
                <note-canvas [keyPressed]="pressed"></note-canvas>
                <button (click)="toggleGame()" id="beginButton">{{ buttonLabel }}</button>
            </div>
            <piano (key-pressed)="notePlayed($event)"></piano>
            <p id="appCredit">Created using Angular 2 by <a href="http://josephwoodward.co.uk" target="_blank">Joseph Woodward</a> - Source <a href="https://github.com/JosephWoodward/PianoNoteTrainer" target="_blank">available on GitHub</a></p>
        </div>
    `,
    directives: [PianoComponent, NoteCanvasComponent, ScoreComponent],
    providers: [NoteFactory, ScoreTracker]
})
export class AppComponent {

    private noteFactory: NoteFactory;
    private scoreTracker: ScoreTracker;
    public generatedNote: INotePosition;
    public userIsCorrect: any;
    public gameIsStarted: boolean;
    public buttonLabel: string;

    @ViewChild(NoteCanvasComponent) noteCanvas: NoteCanvasComponent;
    @ViewChild(ScoreComponent) scoreComponent: ScoreComponent;

    constructor(private noteGenerator: NoteFactory, private tracker: ScoreTracker){
        this.noteFactory = noteGenerator;
        this.scoreTracker = tracker;
        this.userIsCorrect = null;
        this.buttonLabel = "Click to start test";
    }

    notePlayed(noteData : IKeyPressed) {
        if (!this.gameIsStarted) return;

        var note = <INotePosition>this.noteFactory.keyToNoteConverter(noteData);
        if (!note) return;

        this.userIsCorrect = note.keyNumber === this.generatedNote.keyNumber;

        this.scoreTracker.updateScore({ actualKeyNumber: note.keyNumber, expectedKeyNumber: this.generatedNote.keyNumber, correct: this.userIsCorrect });
        this.scoreTracker.updateTotalNotesPlayed();
        this.scoreTracker.notesLimitReached() ? this.endGame() : this.generateNote();
    }

    private generateNote(){
        this.generatedNote = <INotePosition>this.noteFactory.getRandomNote();
        this.noteCanvas.updateCanvas(this.generatedNote);
    }

    toggleGame(){
        (this.gameIsStarted) ? this.endGame() : this.startGame();
    }

    startGame(){
        this.gameIsStarted = true;
        this.userIsCorrect = null;
        this.buttonLabel = "Click to end test";
        this.generateNote();
        this.scoreTracker.resetScore();
        this.scoreComponent.resetScore();
    }

    endGame() {
        this.gameIsStarted = false;
        this.buttonLabel = "Click to start test";
        this.noteCanvas.clearCanvas();
    }
}