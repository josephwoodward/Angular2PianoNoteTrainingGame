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
    var core_1;
    var NoteFactory;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NoteFactory = (function () {
                function NoteFactory() {
                    var crotchetUp = "crotchet_up";
                    var crotchetDown = "crotchet_down";
                    this.notePositions = [
                        /*{ key: 'g5', yPos: 86, keyNumber: 59, imageName: crotchetDown },
                        { key: 'f5', yPos: 100, keyNumber: 57, imageName: crotchetDown },
                        { key: 'e5', yPos: 112, keyNumber: 56, imageName: crotchetDown },
                        { key: 'd5', yPos: 126, keyNumber: 54, imageName: crotchetDown },
                        { key: 'c5', yPos: 138, keyNumber: 52, imageName: crotchetDown },
                        { key: 'b4', yPos: 70, keyNumber: 51, imageName: crotchetUp },
                        { key: 'a4', yPos: 83, keyNumber: 49, imageName: crotchetUp },*/
                        /*{ key: 'g4', yPos: 95, keyNumber: 47, imageName: crotchetUp, type: 'sharp' },
                        { key: 'g4', yPos: 95, keyNumber: 47, imageName: crotchetUp },
                        { key: 'g4', yPos: 95, keyNumber: 47, imageName: crotchetUp, type: 'flat' },*/
                        { key: 'f4', yPos: 109, keyNumber: 46, imageName: crotchetUp, type: 'sharp' },
                        { key: 'f4', yPos: 109, keyNumber: 45, imageName: crotchetUp },
                        { key: 'f4', yPos: 109, keyNumber: 44, imageName: crotchetUp, type: 'flat' },
                        { key: 'e4', yPos: 121, keyNumber: 45, imageName: crotchetUp, type: 'sharp' },
                        { key: 'e4', yPos: 121, keyNumber: 44, imageName: crotchetUp },
                        { key: 'e4', yPos: 121, keyNumber: 43, imageName: crotchetUp, type: 'flat' },
                        { key: 'd4', yPos: 135, keyNumber: 43, imageName: crotchetUp, type: 'sharp' },
                        { key: 'd4', yPos: 135, keyNumber: 42, imageName: crotchetUp },
                        { key: 'd4', yPos: 135, keyNumber: 41, imageName: crotchetUp, type: 'flat' },
                        { key: 'c4', yPos: 163, keyNumber: 41, imageName: crotchetUp, type: 'sharp' },
                        { key: 'c4', yPos: 163, keyNumber: 40, imageName: crotchetUp },
                        { key: 'c4', yPos: 163, keyNumber: 39, imageName: crotchetUp, type: 'flat' },
                        { key: 'b3', yPos: 271, keyNumber: 40, imageName: crotchetDown, type: 'sharp' },
                        { key: 'b3', yPos: 271, keyNumber: 39, imageName: crotchetDown },
                        { key: 'b3', yPos: 271, keyNumber: 38, imageName: crotchetDown, type: 'flat' },
                        { key: 'a3', yPos: 285, keyNumber: 38, imageName: crotchetDown, type: 'sharp' },
                        { key: 'a3', yPos: 285, keyNumber: 37, imageName: crotchetDown },
                        { key: 'a3', yPos: 285, keyNumber: 36, imageName: crotchetDown, type: 'flat' },
                        { key: 'g3', yPos: 297, keyNumber: 36, imageName: crotchetDown, type: 'sharp' },
                        { key: 'g3', yPos: 297, keyNumber: 35, imageName: crotchetDown },
                        { key: 'g3', yPos: 297, keyNumber: 34, imageName: crotchetDown, type: 'flat' },
                        { key: 'f3', yPos: 310, keyNumber: 34, imageName: crotchetDown, type: 'sharp' },
                        { key: 'f3', yPos: 310, keyNumber: 33, imageName: crotchetDown },
                        { key: 'f3', yPos: 310, keyNumber: 32, imageName: crotchetDown, type: 'flat' },
                        { key: 'e3', yPos: 323, keyNumber: 33, imageName: crotchetDown, type: 'sharp' },
                        { key: 'e3', yPos: 323, keyNumber: 32, imageName: crotchetDown },
                        { key: 'e3', yPos: 323, keyNumber: 31, imageName: crotchetDown, type: 'flat' }
                    ];
                }
                NoteFactory.prototype.randomIntFromInterval = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                };
                NoteFactory.prototype.getRandomNote = function () {
                    var randomNumber = this.randomIntFromInterval(0, this.notePositions.length - 1);
                    return this.notePositions[randomNumber];
                };
                NoteFactory.prototype.generate = function (keyPosition) {
                    var note;
                    for (var i = 0; i <= this.notePositions.length; i++) {
                        if (this.notePositions[i].key === keyPosition) {
                            return this.notePositions[i];
                        }
                    }
                    return {};
                };
                NoteFactory.prototype.keyToNoteConverter = function (data) {
                    //console.log("key:" + data.key + " - keyType: " + data.keyType);
                    for (var i = 0; i < this.notePositions.length; i++) {
                        if (this.notePositions[i].keyNumber === data.key) {
                            return this.notePositions[i];
                        }
                    }
                };
                NoteFactory = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], NoteFactory);
                return NoteFactory;
            }());
            exports_1("NoteFactory", NoteFactory);
        }
    }
});
//# sourceMappingURL=NoteFactory.js.map