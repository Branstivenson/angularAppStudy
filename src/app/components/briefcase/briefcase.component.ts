import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { AppState } from 'src/app/states/app.state';
import { selectLoadding } from 'src/app/states/selector/tasks.selector';


@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.css']
})
export class BriefcaseComponent implements OnInit{

  tasksStatus:string='';
  statusToShow:string='';
  loadding$:Observable<boolean>=new Observable();

  constructor(
    private activatedRoute:ActivatedRoute,
    private tasksService:TasksService,
    private store:Store<AppState>,

  ){}

  ngOnInit(): void {
    this.loadding$=this.store.select(selectLoadding);
    this.setStatusToShow();
  }

  setStatusToShow(){
    this.activatedRoute.queryParams.subscribe(
      (params:any)=>{
        this.tasksStatus=params['status'];
      }
    )
    switch(this.tasksStatus){
      case 'PENDING':
        this.statusToShow='Tareas pendientes';
        break;
      case 'IN_PROGRESS':
        this.statusToShow='Tareas en progreso';
        break;
      case 'DONE':
        this.statusToShow='Tareas terminadas';
        break;
      default:
        this.statusToShow='Todas las tareas';
    }
  }


}
