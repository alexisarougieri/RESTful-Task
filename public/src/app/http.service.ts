import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  getAll(){
    const o = this.http.get('/tasks');
    o.subscribe(data => {
      console.log(data);
    })
  }

  createTask(data) {
    return this.http.post('/tasks', data)
  }

  getAllTask() {
    return this.http.get('/tasks')
  }
  getDetails(id){
    return this.http.get('/tasks/'+ id);
  }
  deleteTask(id) {
    return this.http.delete('/tasks/' + id);
  }
  editForm(id, tasktoedit) {
    return this.http.put('/tasks/' + id, tasktoedit);
  }
}
