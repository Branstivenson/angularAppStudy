import { ActionReducerMap } from "@ngrx/store";
import { TaskState } from "../models/task.state.model";
import { tasksReducer } from "./reducers/tasks.reducers";

export interface AppState{
    tasks: TaskState;

}

export const ROOT_REDUCERS:ActionReducerMap<AppState>={
    tasks:tasksReducer
}