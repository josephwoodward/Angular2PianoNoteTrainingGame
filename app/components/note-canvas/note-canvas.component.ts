import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";
import {NoteFactory} from "../../services/NoteFactory";
import {OnInit} from "angular2/core";
import {INotePosition} from "../../contracts/INotePosition";
import {Renderer} from "angular2/core";
import {Input} from "angular2/core";
import {IKeyPressed} from "../../contracts/IKeyPressed";

@Component({
    selector: 'note-canvas',
    styleUrls: ['app/components/note-canvas/note-canvas.component.css'],
    templateUrl: 'app/components/note-canvas/note-canvas.component.html',
    inputs: ['note']
})

export class NoteCanvasComponent {

    private canvasWidth: number;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    private CANVAS_HEIGHT = 500;
    private CANVAS_WIDTH = 900;

    @Input() keyPressed : any;
    @Input() note: INotePosition;

    constructor(private element: ElementRef) {
        this.canvas = this.element.nativeElement.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvasWidth = 900;

    }

    private drawImage(url: string, x: number = 0, y: number = 0) {
        const image = new Image();
        image.src = url;
        image.onload = () => {
            this.context.drawImage(image, x, y);
        };
    }

    private drawNote(note: INotePosition ){
        this.context.globalCompositeOperation = 'destination-over';
        this.context.clearRect(0, 0, 900, 500);
        if (note) {
            this.drawImage('app/components/note-canvas/' + note.imageName, 450, note.yPos);
        }
    }

    public updateCanvas(note: INotePosition){
        this.drawNote(note);
    }
}