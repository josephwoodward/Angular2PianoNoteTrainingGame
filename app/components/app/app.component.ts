import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";
import {INotePosition} from "../../contracts/INotePosition";
import {ViewChild} from "angular2/core";
import {IKeyPressed} from "../../contracts/IKeyPressed";
import {NoteFactory} from "../../services/NoteFactory";

@Component({
    selector: 'piano-app',
    styleUrls: ['app/components/app/app.component.css'],
    template: `
        <div id="gameWrapper">
            <note-canvas [keyPressed]="pressed"></note-canvas>
            <piano (key-pressed)="keyPressed($event)"></piano>
        </div>
        <button (click)="begin()">Begin</button>
        <p style="color: #fff;" *ngIf="generatedNote">{{ generatedNote.key }}</p>
        <p style="color: green; font-weight: bold;" [style.display]="userIsCorrect ? 'block' : 'none'" class="status"  [ngClass] = "{show: userIsCorrect}">Correct!</p>
    `,
    directives: [PianoComponent, NoteCanvasComponent],
    providers: [NoteFactory]
})
export class AppComponent {

    private noteFactory: NoteFactory;
    public generatedNote: INotePosition;
    public userIsCorrect: boolean;

    @ViewChild(NoteCanvasComponent) noteCanvas: NoteCanvasComponent;

    constructor(private noteGenerator: NoteFactory){
        this.noteFactory = noteGenerator;
    }

    keyPressed(noteData : IKeyPressed) {
        // Logic to work out if user input is correct
        console.log("User Input:")
        console.log(noteData);
        console.log("..........");
        var note = <INotePosition>this.noteFactory.keyToNoteConverter(noteData);
        this.userIsCorrect = note.keyNumber == this.generatedNote.keyNumber;
        this.generateNote();
    }

    private generateNote(){
        this.generatedNote = <INotePosition>this.noteFactory.getRandomNote();
        this.noteCanvas.updateCanvas(this.generatedNote);
        console.log("Note Drawn, awaiting input:")
        console.log(this.generatedNote)
    }

    begin(){
        this.generateNote();
    }
}