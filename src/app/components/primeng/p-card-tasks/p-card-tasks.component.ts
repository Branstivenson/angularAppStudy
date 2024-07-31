import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';
import { TaskModel, TaskStatus } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { loadedTasks, loadTasks } from 'src/app/states/actions/tasks.actions';
import { AppState } from 'src/app/states/app.state';
import { initialState } from 'src/app/states/reducers/tasks.reducers';
import { selectListTasks } from 'src/app/states/selector/tasks.selector';

@Component({
  selector: 'app-p-card-tasks',
  templateUrl: './p-card-tasks.component.html',
  styleUrls: ['./p-card-tasks.component.css']
})
export class PCardTasksComponent implements OnInit{
  @Input() tasksStatus:string='';
  allTasks$:Observable<any>=new Observable();
  tasksToShow:TaskModel[]=[]
  messages:Message[]=[{detail:'No se ha encontrado tareas con el tag seleccionado.', severity:'info', }];
  messagesHidden:boolean=true;
  pendingButtonsHidden:boolean=true;




  constructor(private activatedRoute:ActivatedRoute,
    private store:Store<AppState>,
    private tasksService:TasksService
  ){}

  ngOnInit(): void {
    this.allTasks$=this.store.select(selectListTasks);
    this.find();
  }


  find(){
    if(this.tasksStatus=='DONE'||this.tasksStatus=='PENDING'||this.tasksStatus=='IN_PROGRESS'){
      this.tasksToShow=[]
    }else{
      this.store.dispatch(loadTasks());
      this.findAllTasks();
      this.allTasks$.subscribe(
        (tasks:TaskModel[])=>{
          this.tasksToShow=tasks;
        }
      );
      this.setMessagesVisibility();

    }

  }

  setMessagesVisibility(){
    if(this.tasksToShow.length!=0){
      this.messagesHidden=true;
      console.log('lleno');
    }else{
      this.messagesHidden=false;
      console.log('vacio');

    }
  }
  findAllTasks(){
   this.tasksService.findAll().subscribe(
      (tasksList:any)=>{
        this.store.dispatch(loadedTasks(
          {tasks:tasksList},
        ));
      }
    )

  }



}
