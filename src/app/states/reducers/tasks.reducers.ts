import { createReducer, on } from "@ngrx/store";
import { TaskModel } from "src/app/models/task.model";
import { loadedTasks, loadTasks } from "../actions/tasks.actions";
import { TaskState } from "src/app/models/task.state.model";

export const initialState: TaskState ={loadding:false, tasks:[]};

export const tasksReducer = createReducer(
    initialState,
    on(loadTasks,(state) =>{
        return {...state, loadding:true };
    }),
    on(loadedTasks,(state,{tasks}) =>{
        return {...state, loadding:false, tasks };
    })
);