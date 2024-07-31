import { TaskModel } from "./task.model";

export interface TaskState{
    loadding:boolean,
    tasks:ReadonlyArray<TaskModel>;
    
}