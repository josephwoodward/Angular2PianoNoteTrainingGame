import {Injectable} from "angular2/core";
import {IUserResultItem} from "../contracts/IUserResultItem";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share';

@Injectable()
export class ScoreTracker {

    todos$: Observable<Array<IUserResultItem>>;
    private _todosObserver: any;
    public score = 0;
    public totalNotesPlayed: number = 0;
    public result: IUserResultItem[];
    private _dataStore: {
        todos: Array<IUserResultItem>
    };


    // Control total number of notes per test round.
    public notesLimit: number = 5;

    constructor(){
        this.result = [];
        this.todos$ = new Observable(observer => this._todosObserver = observer).share();
        this._dataStore = { todos: [] };
    }

    updateTotalNotesPlayed(){
        this.totalNotesPlayed++;
    }

    updateScore(result: IUserResultItem){
        this.result.push(result);
        this._dataStore.todos.push(result);
        this._todosObserver.next(this._dataStore.todos);
    }

    resetScore() : void {
        this.totalNotesPlayed = 0;
        this.result = [];
        this._dataStore = { todos: [] };
    }
}