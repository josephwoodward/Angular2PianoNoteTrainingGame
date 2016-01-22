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
                        styles: ["\n\n        .score-wrapper {\n            width: 280px;\n            height: 430px;\n            background-color: #fff;\n            position: absolute;\n            top: 0;\n            right: 0;\n            padding-top: 70px;\n            -webkit-box-shadow: -1px 0px 5px -2px rgba(0,0,0,0.75);\n            -moz-box-shadow: -1px 0px 5px -2px rgba(0,0,0,0.75);\n            box-shadow: -1px 0px 5px -2px rgba(0,0,0,0.75);\n            z-index: 10;\n        }\n\n        .score-wrapper__content {\n            padding: 20px;\n        }\n\n        .score-wrapper__content p {\n            margin: 0 0 20px;\n        }\n\n        .successfully-saved.hide-opacity {\n            opacity: 0;\n        }\n\n        .successfully-saved {\n            color: #FFFFFF;\n            text-align: center;\n\n            -webkit-transition: opacity 3s ease-in-out;\n            -moz-transition: opacity 3s ease-in-out;\n            -ms-transition: opacity 3s ease-in-out;\n            -o-transition: opacity 3s ease-in-out;\n             opacity: 1;\n        }\n    "],
                        template: "\n    <div class=\"score-wrapper\">\n        <div class=\"score-wrapper__content\">\n        <p style=\"color: red; font-weight: bold;\" [style.display]=\"!userIsCorrect ? 'block' : 'none'\">Wrong!</p>\n        <p style=\"color: green; font-weight: bold;\" [style.display]=\"userIsCorrect ? 'block' : 'none'\">Correct!</p>\n        <p style=\"color: #999;\" *ngIf=\"generatedNote\">{{ generatedNote?.key }}</p>\n        </div>\n    </div>\n    ",
                        inputs: ['generatedNote', 'userIsCorrect']
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