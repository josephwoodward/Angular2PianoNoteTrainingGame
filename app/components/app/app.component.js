System.register(["angular2/core", "../piano/piano.component", "../note-canvas/note-canvas.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, piano_component_1, note_canvas_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (piano_component_1_1) {
                piano_component_1 = piano_component_1_1;
            },
            function (note_canvas_component_1_1) {
                note_canvas_component_1 = note_canvas_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                // This event is successfully called from PianoComponent
                AppComponent.prototype.keyPressed = function (noteData) {
                    console.log(noteData); // {key: 30, keyType: "white"}
                    this.pressed = noteData;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'piano-app',
                        styleUrls: ['app/components/app/app.component.css'],
                        template: "\n        <div id=\"gameWrapper\">\n            <note-canvas [keyPressed]=\"pressed\"></note-canvas>\n            <piano (key-pressed)=\"keyPressed($event)\"></piano>\n        </div>\n    ",
                        directives: [piano_component_1.PianoComponent, note_canvas_component_1.NoteCanvasComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map