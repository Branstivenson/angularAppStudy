import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseUrl='http://localhost:3000/tasks'

  constructor(private httpClient:HttpClient) { }

  findAll(){
    return this.httpClient.get(`${this.baseUrl}`);
  }
  findAllByStatus(status:any){
    return this.httpClient.get(`${this.baseUrl}/${status}`)
  }
  create(task:any){
    return this.httpClient.post(`${this.baseUrl}/create`, task);
  }
}
