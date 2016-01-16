System.register(["angular2/core", "../../services/NoteFactory"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, NoteFactory_1;
    var NoteCanvasComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (NoteFactory_1_1) {
                NoteFactory_1 = NoteFactory_1_1;
            }],
        execute: function() {
            NoteCanvasComponent = (function () {
                function NoteCanvasComponent(element, noteGenerator) {
                    this.element = element;
                    this.noteGenerator = noteGenerator;
                    this.CANVAS_HEIGHT = 500;
                    this.CANVAS_WIDTH = 900;
                    this.canvas = this.element.nativeElement.querySelector('canvas');
                    this.context = this.canvas.getContext('2d');
                    this.canvasWidth = 900;
                    this.noteFactory = noteGenerator;
                }
                NoteCanvasComponent.prototype.drawImage = function (url, x, y) {
                    var _this = this;
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    var image = new Image();
                    image.src = url;
                    image.onload = function () {
                        _this.context.drawImage(image, x, y);
                    };
                };
                NoteCanvasComponent.prototype.ngOnInit = function () {
                    var note = this.noteFactory.generate('g4');
                    this.drawImage('app/components/note-canvas/' + note.imageName, 450, note.yPos);
                };
                NoteCanvasComponent = __decorate([
                    core_1.Component({
                        selector: 'note-canvas',
                        styleUrls: ['app/components/note-canvas/note-canvas.component.css'],
                        templateUrl: 'app/components/note-canvas/note-canvas.component.html',
                        providers: [NoteFactory_1.NoteFactory],
                        inputs: ['selectedNote']
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, NoteFactory_1.NoteFactory])
                ], NoteCanvasComponent);
                return NoteCanvasComponent;
            })();
            exports_1("NoteCanvasComponent", NoteCanvasComponent);
        }
    }
});
//# sourceMappingURL=note-canvas.component.js.map