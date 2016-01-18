import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";

@Component({
    selector: 'piano-app',
    styleUrls: ['app/components/app/app.component.css'],
    templateUrl: 'app/components/app/app.component.html',
    directives: [PianoComponent, NoteCanvasComponent],
})
export class AppComponent {

    keyPressed(eventData) {
        console.log(eventData);
    }

}