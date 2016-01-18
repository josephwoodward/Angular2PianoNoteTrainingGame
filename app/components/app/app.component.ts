import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";
import {INotePosition} from "../../contracts/INotePosition";
import {ViewChild} from "angular2/core";
import {IKeyPressed} from "../../contracts/IKeyPressed";

@Component({
    selector: 'piano-app',
    styleUrls: ['app/components/app/app.component.css'],
    template: `
        <div id="gameWrapper">
            <note-canvas [keyPressed]="pressed"></note-canvas>
            <piano (key-pressed)="keyPressed($event)"></piano>
        </div>
    `,
    directives: [PianoComponent, NoteCanvasComponent],
})
export class AppComponent {

    @ViewChild(NoteCanvasComponent) noteCanvas: NoteCanvasComponent;

    keyPressed(noteData : IKeyPressed) {
        this.noteCanvas.updateCanvas(noteData);
    }
}