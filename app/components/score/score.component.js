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
    var core_1;
    var ScoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ScoreComponent = (function () {
                function ScoreComponent() {
                }
                ScoreComponent.prototype.ngOnChanges = function (changes) {
                    /*console.log(changes);*/
                };
                ScoreComponent = __decorate([
                    core_1.Component({
                        selector: 'score',
                        styleUrls: ['app/components/score/score.component.css'],
                        template: "\n    <div class=\"score-wrapper\">\n        <div class=\"score-wrapper__content\">\n        <div *ngIf=\"gameIsStarted && userIsCorrect != null\">\n            <p class=\"score-wrapper__label score-wrapper__label--wrong\" [style.display]=\"!userIsCorrect ? 'block' : 'none'\">Incorrect, try again...</p>\n            <p class=\"score-wrapper__label score-wrapper__label--success\" [style.display]=\"userIsCorrect ? 'block' : 'none'\">Correct!</p>\n            <!--<p style=\"color: #999;\" *ngIf=\"generatedNote\">{{ generatedNote?.key }}</p>-->\n        </div>\n        </div>\n    </div>\n    ",
                        inputs: ['generatedNote', 'userIsCorrect', 'gameIsStarted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ScoreComponent);
                return ScoreComponent;
            })();
            exports_1("ScoreComponent", ScoreComponent);
        }
    }
});
//# sourceMappingURL=score.component.js.map