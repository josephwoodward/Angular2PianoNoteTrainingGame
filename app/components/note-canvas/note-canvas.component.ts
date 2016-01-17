import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";
import {NoteFactory} from "../../services/NoteFactory";
import {OnInit} from "angular2/core";
import {INotePosition} from "../../contracts/INotePosition";
import {Renderer} from "angular2/core";

@Component({
    selector: 'note-canvas',
    styleUrls: ['app/components/note-canvas/note-canvas.component.css'],
    templateUrl: 'app/components/note-canvas/note-canvas.component.html',
    providers: [NoteFactory],
    inputs: ['selectedNote']
})

export class NoteCanvasComponent implements OnInit {

    private canvasWidth: number;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private noteFactory: NoteFactory;

    private CANVAS_HEIGHT = 500;
    private CANVAS_WIDTH = 900;

    constructor(private element: ElementRef, private noteGenerator: NoteFactory) {
        this.canvas = this.element.nativeElement.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvasWidth = 900;
        this.noteFactory = noteGenerator;
    }

    private drawImage(url: string, x: number = 0, y: number = 0) {
        const image = new Image();
        image.src = url;
        image.onload = () => {
            this.context.drawImage(image, x, y);
        };
    }

    private drawNote(note: INotePosition ){
        this.drawImage('app/components/note-canvas/' + note.imageName, 450, note.yPos);
    }

    public ngOnInit() {
        var note = this.noteFactory.generate('e5');
        if (note) {
            this.drawNote(note);
        } else {
            alert('invalid note');
        }
    }
}