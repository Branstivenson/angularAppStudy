import { Component } from '@angular/core';
import { TaskModel, TaskStatus } from 'src/app/models/task.model';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent {

  tasks:TaskModel[]=[{id:12323, title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.DONE},
    {id:12323, title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.IN_PROGRESS},
    {id:12323, title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.DONE},
    {id:12323, title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.PENDING},
    {id:12323, title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.IN_PROGRESS}
  ]

  edit=[

    {label:'Restaurar', icon:'pi pi-replay'},
    {label:'Eliminar', icon: 'pi pi-trash'},

  ]
}
