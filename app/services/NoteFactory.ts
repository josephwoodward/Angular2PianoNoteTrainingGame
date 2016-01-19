import {Injectable} from "angular2/core";
import {INotePosition} from "../contracts/INotePosition";
import {INoteTransformer} from "../contracts/INoteTransformer";
import {IKeyPressed} from "../contracts/IKeyPressed";

@Injectable()
export class NoteFactory implements INoteTransformer {

    private notePositions: INotePosition[];

    constructor(){
        var crotchetUp = "crotchet_up.png";
        var crotchetDown = "crotchet_down.png";

        this.notePositions = [
            { key: 'g5', yPos: 86, keyNumber: 59, imageName: crotchetDown },
            { key: 'f5', yPos: 100, keyNumber: 57, imageName: crotchetDown },
            { key: 'e5', yPos: 112, keyNumber: 56, imageName: crotchetDown },
            { key: 'd5', yPos: 126, keyNumber: 54, imageName: crotchetDown },
            { key: 'c5', yPos: 138, keyNumber: 52, imageName: crotchetDown },
            { key: 'b4', yPos: 70, keyNumber: 51, imageName: crotchetUp },
            { key: 'a4', yPos: 83, keyNumber: 49, imageName: crotchetUp },
            { key: 'g4', yPos: 95, keyNumber: 47, imageName: crotchetUp },
            { key: 'f4', yPos: 109, keyNumber: 45, imageName: crotchetUp },
            { key: 'e4', yPos: 121, keyNumber: 44, imageName: crotchetUp },
            { key: 'd4', yPos: 135, keyNumber: 42, imageName: crotchetUp },
            { key: 'd4', yPos: 135, keyNumber: 41, imageName: crotchetUp },
            { key: 'c4', yPos: 163, keyNumber: 40, imageName: crotchetUp },
            { key: 'b3', yPos: 271, keyNumber: 39, imageName: crotchetDown },
            { key: 'a3', yPos: 285, keyNumber: 37, imageName: crotchetDown },
            { key: 'g3', yPos: 297, keyNumber: 35, imageName: crotchetDown },
            { key: 'f3', yPos: 310, keyNumber: 33, imageName: crotchetDown },
            { key: 'e3', yPos: 323, keyNumber: 32, imageName: crotchetDown },
        ];
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
        console.log("key:" + data.key + " - keyType: " + data.keyType);
        for(var i = 0; i < this.notePositions.length; i++){
            if (this.notePositions[i].keyNumber === data.key){
                return this.notePositions[i];
            }
        }
    }
}