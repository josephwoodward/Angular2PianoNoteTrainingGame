System.register(["angular2/core", "events"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, events_1;
    var PianoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }],
        execute: function() {
            /*
             Walkthrough https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
             */
            PianoComponent = (function () {
                function PianoComponent() {
                    this.deleted = new events_1.EventEmitter();
                }
                PianoComponent.prototype.pressKey = function (keyNumber) {
                    this.deleted.emit("Boo" + keyNumber);
                };
                PianoComponent = __decorate([
                    core_1.Component({
                        selector: 'piano',
                        styleUrls: ['app/components/piano/piano.component.css'],
                        templateUrl: 'app/components/piano/piano.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], PianoComponent);
                return PianoComponent;
            })();
            exports_1("PianoComponent", PianoComponent);
        }
    }
});
//# sourceMappingURL=piano.component.js.map