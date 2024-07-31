import { Component } from '@angular/core';
import { TaskNoIdModel } from 'src/app/models/task-no-id.model';
import { TaskStatus } from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tasks:TaskNoIdModel[]=[{title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.DONE},
    {title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.IN_PROGRESS},
    {title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.DONE},
    {title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.PENDING},
    {title:'fgfdgfgf',description:'frdffdsfdsfdsfdfdsfdsfdsfdsfdsfdsf', status:TaskStatus.IN_PROGRESS}
  ]

}
