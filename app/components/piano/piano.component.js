System.register(["angular2/core"], function(exports_1) {
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
    var core_1, core_2, core_3;
    var PianoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            PianoComponent = (function () {
                function PianoComponent() {
                    this.keyPressed = new core_2.EventEmitter();
                    this.pianoKeys = [
                        { whiteKeyId: 16, blackKeyId: 17 },
                        { whiteKeyId: 18, blackKeyId: 19 },
                        { whiteKeyId: 20, blackKeyId: 0 },
                        { whiteKeyId: 21, blackKeyId: 22 },
                        { whiteKeyId: 23, blackKeyId: 24 },
                        { whiteKeyId: 25, blackKeyId: 26 },
                        { whiteKeyId: 27, blackKeyId: 0 },
                        { whiteKeyId: 28, blackKeyId: 29 },
                        { whiteKeyId: 30, blackKeyId: 31 },
                        { whiteKeyId: 32, blackKeyId: 0 },
                        { whiteKeyId: 33, blackKeyId: 34 },
                        { whiteKeyId: 35, blackKeyId: 36 },
                        { whiteKeyId: 37, blackKeyId: 38 },
                        { whiteKeyId: 39, blackKeyId: 0 },
                        { whiteKeyId: 40, blackKeyId: 41 },
                        { whiteKeyId: 42, blackKeyId: 43 },
                        { whiteKeyId: 44, blackKeyId: 0 },
                        { whiteKeyId: 45, blackKeyId: 46 },
                        { whiteKeyId: 47, blackKeyId: 48 },
                        { whiteKeyId: 49, blackKeyId: 50 },
                        { whiteKeyId: 51, blackKeyId: 0 },
                        { whiteKeyId: 52, blackKeyId: 53 },
                        { whiteKeyId: 54, blackKeyId: 55 },
                        { whiteKeyId: 56, blackKeyId: 0 },
                        { whiteKeyId: 57, blackKeyId: 58 },
                        { whiteKeyId: 59, blackKeyId: 60 },
                        { whiteKeyId: 61, blackKeyId: 62 },
                        { whiteKeyId: 63, blackKeyId: 0 },
                        { whiteKeyId: 64, blackKeyId: 0 } //c
                    ];
                }
                PianoComponent.prototype.keyPress = function (keyNumber) {
                    this.keyPressed.emit({ key: keyNumber });
                    var audio = new Audio('app/components/piano/sounds/' + keyNumber + '.wav');
                    audio.play();
                };
                __decorate([
                    core_3.Output("key-pressed"), 
                    __metadata('design:type', Object)
                ], PianoComponent.prototype, "keyPressed", void 0);
                PianoComponent = __decorate([
                    core_1.Component({
                        selector: 'piano',
                        styleUrls: ['app/components/piano/piano.component.css'],
                        templateUrl: 'app/components/piano/piano.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], PianoComponent);
                return PianoComponent;
            }());
            exports_1("PianoComponent", PianoComponent);
        }
    }
});
//# sourceMappingURL=piano.component.js.map