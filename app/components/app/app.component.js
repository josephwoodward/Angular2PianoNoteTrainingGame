System.register(["angular2/core", "../piano/piano.component", "../note-canvas/note-canvas.component", "../../services/NoteFactory", "../score/score.component", "../../services/ScoreTracker"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, piano_component_1, note_canvas_component_1, core_2, NoteFactory_1, score_component_1, ScoreTracker_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (piano_component_1_1) {
                piano_component_1 = piano_component_1_1;
            },
            function (note_canvas_component_1_1) {
                note_canvas_component_1 = note_canvas_component_1_1;
            },
            function (NoteFactory_1_1) {
                NoteFactory_1 = NoteFactory_1_1;
            },
            function (score_component_1_1) {
                score_component_1 = score_component_1_1;
            },
            function (ScoreTracker_1_1) {
                ScoreTracker_1 = ScoreTracker_1_1;
            }],
        execute: function() {
            /*https://angular.io/docs/ts/latest/api/core/OnChanges-interface.html*/
            AppComponent = (function () {
                function AppComponent(noteGenerator, tracker) {
                    this.noteGenerator = noteGenerator;
                    this.tracker = tracker;
                    this.noteFactory = noteGenerator;
                    this.scoreTracker = tracker;
                    this.userIsCorrect = null;
                    this.buttonLabel = "Click to start test";
                }
                AppComponent.prototype.notePlayed = function (noteData) {
                    var note = this.noteFactory.keyToNoteConverter(noteData);
                    this.userIsCorrect = note.keyNumber === this.generatedNote.keyNumber;
                    this.scoreTracker.updateScore({ actualKeyNumber: note.keyNumber, expectedKeyNumber: this.generatedNote.keyNumber, correct: this.userIsCorrect });
                    if (this.userIsCorrect) {
                        this.scoreTracker.updateTotalNotesPlayed();
                        this.scoreTracker.totalNotesPlayed === this.scoreTracker.notesLimit ? this.endGame() : this.generateNote();
                    }
                };
                AppComponent.prototype.generateNote = function () {
                    this.generatedNote = this.noteFactory.getRandomNote();
                    this.noteCanvas.updateCanvas(this.generatedNote);
                    console.log("Note generated:");
                    console.log(this.generatedNote);
                };
                AppComponent.prototype.toggleGame = function () {
                    (this.gameIsStarted) ? this.endGame() : this.startGame();
                };
                AppComponent.prototype.startGame = function () {
                    this.gameIsStarted = true;
                    this.buttonLabel = "Click to end test";
                    this.generateNote();
                };
                AppComponent.prototype.endGame = function () {
                    this.gameIsStarted = false;
                    this.buttonLabel = "Click to start test";
                    this.noteCanvas.clearCanvas();
                };
                __decorate([
                    core_2.ViewChild(note_canvas_component_1.NoteCanvasComponent), 
                    __metadata('design:type', note_canvas_component_1.NoteCanvasComponent)
                ], AppComponent.prototype, "noteCanvas", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'piano-app',
                        styleUrls: ['app/components/app/app.component.css'],
                        template: "\n        <div id=\"gameWrapper\">\n            <div id=\"canvasPanel\">\n                <score [generatedNote]=\"generatedNote\" [userIsCorrect]=\"userIsCorrect\" [gameIsStarted]=\"gameIsStarted\"></score>\n                <note-canvas [keyPressed]=\"pressed\"></note-canvas>\n                <button (click)=\"toggleGame()\" id=\"beginButton\">{{ buttonLabel }}</button>\n            </div>\n            <piano (key-pressed)=\"notePlayed($event)\"></piano>\n        </div>\n    ",
                        directives: [piano_component_1.PianoComponent, note_canvas_component_1.NoteCanvasComponent, score_component_1.ScoreComponent],
                        providers: [NoteFactory_1.NoteFactory, ScoreTracker_1.ScoreTracker]
                    }), 
                    __metadata('design:paramtypes', [NoteFactory_1.NoteFactory, ScoreTracker_1.ScoreTracker])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map