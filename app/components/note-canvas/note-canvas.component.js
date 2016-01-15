System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var NoteCanvasComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            NoteCanvasComponent = (function () {
                function NoteCanvasComponent(element) {
                    this.element = element;
                    this.canvas = this.element.nativeElement.querySelector('canvas');
                    this.context = this.canvas.getContext('2d');
                    this.canvasWidth = 900;
                    // this.setupCanvas();
                    /*this.drawImage('app/components/note-canvas/stave_bg.png');*/
                    this.drawImage('app/components/note-canvas/crotchet_up.png');
                }
                NoteCanvasComponent.prototype.drawImage = function (url, x, y) {
                    var _this = this;
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    var image = new Image();
                    image.src = url;
                    image.onload = function () {
                        _this.context.drawImage(image, x, y, 100, 150);
                    };
                };
                NoteCanvasComponent.prototype.setupCanvas = function () {
                    this.context.beginPath();
                    this.context.moveTo(this.canvasWidth, 50);
                    this.context.lineTo(0, 50);
                    this.context.stroke();
                };
                NoteCanvasComponent = __decorate([
                    core_1.Component({
                        selector: 'note-canvas',
                        styleUrls: ['app/components/note-canvas/note-canvas.component.css'],
                        templateUrl: 'app/components/note-canvas/note-canvas.component.html',
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], NoteCanvasComponent);
                return NoteCanvasComponent;
            })();
            exports_1("NoteCanvasComponent", NoteCanvasComponent);
        }
    }
});
//# sourceMappingURL=note-canvas.component.js.map