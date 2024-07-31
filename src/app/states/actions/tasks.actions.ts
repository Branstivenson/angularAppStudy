import { createAction, props } from "@ngrx/store";
import { TaskModel } from "src/app/models/task.model";

export const loadTasks = createAction(

    '[Task List] Load tasks'

);

export const loadedTasks = createAction(
    '[Task List] Loaded success',
    props<{tasks:TaskModel[]}>()
);