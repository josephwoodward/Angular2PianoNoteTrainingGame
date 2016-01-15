import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";

@Component({
    selector: 'note-canvas',
    styleUrls: ['app/components/note-canvas/note-canvas.component.css'],
    templateUrl: 'app/components/note-canvas/note-canvas.component.html',
})

export class NoteCanvasComponent {

    private canvasWidth: number;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(private element: ElementRef) {
        this.canvas = this.element.nativeElement.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvasWidth = 900;

        // this.setupCanvas();
        /*this.drawImage('app/components/note-canvas/stave_bg.png');*/
        this.drawImage('app/components/note-canvas/crotchet_up.png');
    }

    private drawImage(url: string, x: number = 0, y: number = 0) {
        const image = new Image();
        image.src = url;
        image.onload = () => {
            this.context.drawImage(image, x, y, 100, 150);
        };
    }

    private setupCanvas(){
        this.context.beginPath();
        this.context.moveTo(this.canvasWidth, 50);
        this.context.lineTo(0, 50);
        this.context.stroke();
    }

}