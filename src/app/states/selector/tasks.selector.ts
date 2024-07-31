import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { TaskState } from "src/app/models/task.state.model";

export const selectTasksFeature= (state:AppState)=>state.tasks;

export const selectListTasks = createSelector(
    selectTasksFeature,
    (state:TaskState)=>state.tasks
);
export const selectLoadding = createSelector(
    selectTasksFeature,
    (state:TaskState)=>state.loadding
);