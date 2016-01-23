import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";
import {INotePosition} from "../../contracts/INotePosition";
import {ViewChild} from "angular2/core";
import {IKeyPressed} from "../../contracts/IKeyPressed";
import {NoteFactory} from "../../services/NoteFactory";
import {ScoreComponent} from "../score/score.component";

/*https://angular.io/docs/ts/latest/api/core/OnChanges-interface.html*/

@Component({
    selector: 'piano-app',
    styleUrls: ['app/components/app/app.component.css'],
    template: `
        <div id="gameWrapper">
            <div id="canvasPanel">
                <note-canvas [keyPressed]="pressed"></note-canvas>
                <button (click)="begin()" id="beginButton">{{ buttonLabel }}</button>
                <score [generatedNote]="generatedNote" [userIsCorrect]="userIsCorrect" [gameIsStarted]="gameIsStarted"></score>
            </div>
            <piano (key-pressed)="keyPressed($event)"></piano>
        </div>
    `,
    directives: [PianoComponent, NoteCanvasComponent, ScoreComponent],
    providers: [NoteFactory]
})
export class AppComponent {

    private noteFactory: NoteFactory;
    public generatedNote: INotePosition;
    public userIsCorrect: any;
    public gameIsStarted: boolean;
    public buttonLabel: string;

    @ViewChild(NoteCanvasComponent) noteCanvas: NoteCanvasComponent;

    constructor(private noteGenerator: NoteFactory){
        this.noteFactory = noteGenerator;
        this.userIsCorrect = null;
        this.buttonLabel = "Click to begin";
    }

    keyPressed(noteData : IKeyPressed) {
        // Logic to work out if user input is correct
        console.log("User Input:")
        console.log(noteData);
        console.log("..........");
        var note = <INotePosition>this.noteFactory.keyToNoteConverter(noteData);
        this.userIsCorrect = note.keyNumber == this.generatedNote.keyNumber;
        if (this.userIsCorrect) this.generateNote();
    }

    private generateNote(){
        this.generatedNote = <INotePosition>this.noteFactory.getRandomNote();
        this.noteCanvas.updateCanvas(this.generatedNote);
        console.log("Note Drawn, awaiting input:")
        console.log(this.generatedNote)
    }

    begin(){
        this.gameIsStarted = true;
        this.buttonLabel = "Click to stop";
        this.generateNote();
    }
}