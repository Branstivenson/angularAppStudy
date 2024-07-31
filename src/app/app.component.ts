import { Component, OnInit } from '@angular/core';
import { AppState } from './states/app.state';
import { Store } from '@ngrx/store';
import { loadedTasks, loadTasks } from './states/actions/tasks.actions';
import { TasksService } from './services/tasks/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angularapp';


}
