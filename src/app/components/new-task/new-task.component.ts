import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskNoIdModel } from 'src/app/models/task-no-id.model';
import { TaskModel, TaskStatus } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';



interface Status {
  name: string,
  code: string
}
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})


export class NewTaskComponent{

  status=[
    {label:'Terminado',id:TaskStatus.DONE},
    {label:'En Progreso',id:TaskStatus.IN_PROGRESS},
    {label:'Pendiente',id:TaskStatus.PENDING}
  ]


  constructor(private tasksService:TasksService){}
  taskForm= new FormGroup({
    title:new FormControl('', Validators.required),
    description:new FormControl('',Validators.required),
    status:new FormGroup({
      label:new FormControl('',Validators.required),
      id:new FormControl('',Validators.required)
    })
  })

  printTask(){

  }

  createTask(){
    let taskToSave:TaskNoIdModel={title:this.taskForm.value.title, description:this.taskForm.value.description,status:this.taskForm.value.status?.id}
    return this.tasksService.create(taskToSave).subscribe(
      (response:any)=>{
        console.log(response);
      }
    )
  }

}
