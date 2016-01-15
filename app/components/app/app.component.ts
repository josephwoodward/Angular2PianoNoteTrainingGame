import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";

/*
 Walkthrough https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
 */

@Component({
    selector: 'piano-app',
    encapsulation: ViewEncapsulation.Native,
    /*Style types: http://blog.thoughtram.io/angular/2015/06/25/styling-angular-2-components.html*/
    styleUrls: ['app/components/app/app.component.css'],
    templateUrl: 'app/components/app/app.component.html',
    directives: [PianoComponent, NoteCanvasComponent],
})

export class AppComponent {

}