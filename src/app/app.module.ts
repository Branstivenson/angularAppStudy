import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { HomeComponent } from './components/home/home.component';
import { TrashComponent } from './components/trash/trash.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { tasksReducer } from './states/reducers/tasks.reducers';
import { ROOT_REDUCERS } from './states/app.state';
import { PCardTasksComponent } from './components/primeng/p-card-tasks/p-card-tasks.component';
import { BriefcaseTagsComponent } from './briefcase-tags/briefcase-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    BriefcaseComponent,
    MenuComponent,
    NewTaskComponent,
    HomeComponent,
    TrashComponent,
    PCardTasksComponent,
    BriefcaseTagsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    MenuModule,
    ToastModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    TableModule, 
    TagModule,
    HttpClientModule,
    MessagesModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ReactiveFormsModule,
    SidebarModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' })
    
    
    
  ],
  providers: [DataViewLayoutOptions, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
