import {Injectable} from "angular2/core";
import {INotePosition} from "../contracts/INotePosition";
import {INoteTransformer} from "../contracts/INoteTransformer";
import {IKeyPressed} from "../contracts/IKeyPressed";

@Injectable()
export class NoteFactory implements INoteTransformer {

    private notePositions: INotePosition[];

    constructor(){
        var crotchetUp = "crotchet_up";
        var crotchetDown = "crotchet_down";

        this.notePositions = [
            { key: 'g5', yPos: 86, keyNumber: 60, imageName: crotchetDown, type: 'sharp' },
            { key: 'g5', yPos: 86, keyNumber: 59, imageName: crotchetDown },
            { key: 'g5', yPos: 86, keyNumber: 58, imageName: crotchetDown, type: 'flat' },
            { key: 'f5', yPos: 100, keyNumber: 58, imageName: crotchetDown, type: 'sharp' },
            { key: 'f5', yPos: 100, keyNumber: 57, imageName: crotchetDown },
            { key: 'f5', yPos: 100, keyNumber: 56, imageName: crotchetDown, type: 'flat' },
            { key: 'e5', yPos: 112, keyNumber: 57, imageName: crotchetDown, type: 'sharp' },
            { key: 'e5', yPos: 112, keyNumber: 56, imageName: crotchetDown },
            { key: 'e5', yPos: 112, keyNumber: 55, imageName: crotchetDown, type: 'flat' },
            { key: 'd5', yPos: 126, keyNumber: 55, imageName: crotchetDown, type: 'sharp' },
            { key: 'd5', yPos: 126, keyNumber: 54, imageName: crotchetDown },
            { key: 'd5', yPos: 126, keyNumber: 53, imageName: crotchetDown, type: 'flat' },
            { key: 'c5', yPos: 138, keyNumber: 53, imageName: crotchetDown, type: 'sharp' },
            { key: 'c5', yPos: 138, keyNumber: 52, imageName: crotchetDown },
            { key: 'c5', yPos: 138, keyNumber: 51, imageName: crotchetDown, type:'flat' },
            { key: 'b4', yPos: 70, keyNumber: 52, imageName: crotchetUp, type: 'sharp' },
            { key: 'b4', yPos: 70, keyNumber: 51, imageName: crotchetUp },
            { key: 'b4', yPos: 70, keyNumber: 50, imageName: crotchetUp, type: 'flat' },
            { key: 'a4', yPos: 83, keyNumber: 50, imageName: crotchetUp, type: 'sharp' },
            { key: 'a4', yPos: 83, keyNumber: 49, imageName: crotchetUp },
            { key: 'a4', yPos: 83, keyNumber: 48, imageName: crotchetUp, type: 'flat' },
            { key: 'g4', yPos: 95, keyNumber: 48, imageName: crotchetUp, type: 'sharp' },
            { key: 'g4', yPos: 95, keyNumber: 47, imageName: crotchetUp },
            { key: 'g4', yPos: 95, keyNumber: 46, imageName: crotchetUp, type: 'flat' },
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

    private randomIntFromInterval(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    getRandomNote(){
        var randomNumber = this.randomIntFromInterval(0, this.notePositions.length - 1);
        return this.notePositions[randomNumber];
    }

    generate(keyPosition : string): INotePosition {
        var note : INotePosition;
        for(var i = 0; i <= this.notePositions.length; i++){
            if (this.notePositions[i].key === keyPosition){
                return this.notePositions[i];
            }
        }
        return <INotePosition>{};
    }

    keyToNoteConverter(data: IKeyPressed){
        //console.log("key:" + data.key + " - keyType: " + data.keyType);
        for(var i = 0; i < this.notePositions.length; i++){
            if (this.notePositions[i].keyNumber === data.key){
                return this.notePositions[i];
            }
        }
    }
}