import {INotePosition} from "./INotePosition";

export interface INoteTransformer {
    generate(keyPosition: string): INotePosition;
}