System.register(["angular2/core", "rxjs/Observable", 'rxjs/add/operator/share'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var ScoreTracker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            ScoreTracker = (function () {
                function ScoreTracker() {
                    var _this = this;
                    this.score = 0;
                    this.totalNotesPlayed = 0;
                    // Control total number of notes per test round.
                    this.notesLimit = 20;
                    this.result = [];
                    this.todos$ = new Observable_1.Observable(function (observer) { return _this._todosObserver = observer; }).share();
                    this._dataStore = { todos: [] };
                }
                ScoreTracker.prototype.updateTotalNotesPlayed = function () {
                    this.totalNotesPlayed++;
                };
                ScoreTracker.prototype.updateScore = function (result) {
                    this.result.push(result);
                    this._dataStore.todos.push(result);
                    this._todosObserver.next(this._dataStore.todos);
                };
                ScoreTracker = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ScoreTracker);
                return ScoreTracker;
            }());
            exports_1("ScoreTracker", ScoreTracker);
        }
    }
});
//# sourceMappingURL=ScoreTracker.js.map