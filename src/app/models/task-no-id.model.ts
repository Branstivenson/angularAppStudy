import { TaskStatus } from "./task.model";

export interface TaskNoIdModel{
    title:string|null|undefined;
    description:string|null|undefined;
    status:string|null|undefined;
}