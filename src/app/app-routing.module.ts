import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { HomeComponent } from './components/home/home.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {
    path:'taggedtasks',
    component:BriefcaseComponent
  },{
    path:'tasks',
    component:BriefcaseComponent
  },{
    path:'new-task',
    component:NewTaskComponent
  },{
    path:'home',
    component:HomeComponent
  },{
    path:'trash',
    component:TrashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
