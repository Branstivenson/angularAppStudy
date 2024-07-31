import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuDiv = document.getElementById("menu-div");
  menu = document.querySelector(".menu");
  sidebarVisible:boolean=false;


  items=[
    {label:'Managing Your Task', items:[
    {label:'Inicio', icon:'pi pi-home', routerLink:['home']}
    ]},
    {label:'Tags',items:[
    {label:'Pendiente', icon: 'pi pi-clock', routerLink:['tasks'],queryParams:{status:'PENDING'}},
    {label:'En Progreso', icon: 'pi pi-hourglass', routerLink:['tasks'],queryParams:{status:'IN_PROGRESS'}},
    {label:'Terminado', icon: 'pi pi-check-square', routerLink:['tasks'],queryParams:{status:'DONE'}},
    {label:'Todas las tareas', icon: 'pi pi-briefcase', routerLink:['tasks'],queryParams:{status:'ALL'}}
    ]},
    {label:'Otros Espacios', items:[
      {label:'Añadir nueva tarea', icon: 'pi pi-plus', routerLink:['new-task']},
      {label:'Papelera', icon: 'pi pi-trash', routerLink:['trash']}
    ]}
  ]

  hideSideBar(){
    this.sidebarVisible=false;
  }


  constructor(
    private router:Router
  ){}

}
