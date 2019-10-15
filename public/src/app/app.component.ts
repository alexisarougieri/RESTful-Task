import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Task API';
  tasks = [];
  task = "";
  tasktoedit =[];
  editTog: boolean = false;
  newTask: any = {
    title: '',
    desc: '',
    completed: '',
  };

  constructor(private http: HttpService){
  }

  ngOnInit() {
    this.http.getAll();
  }

  createTask(){
    const observable = this.http.createTask(this.newTask);
    observable.subscribe(data => {
      console.log(data);

      this.ngOnInit();
    })
  }

  getAllTask() {
    const observable = this.http.getAllTask();
    observable.subscribe((data: any) => {
      console.log(data);
      this.tasks = data
    })
  }

  onSubmit(newTask: any, id: string) {
    const observable = this.http.createTask(newTask);
    observable.subscribe((data: any) => {
      this.newTask = {title: "", desc: "", completed: ""}
      this.getAllTask();
    })
  }
  
  deleteTask(id: string) {
    let observable = this.http.deleteTask(id);
    observable.subscribe((data: any) => {
      console.log("deleted our task", data)
      this.getAllTask();
    });
  }

  editForm(id: string) {
    console.log("edit is working");
    let observable = this.http.getDetails(id);
    observable.subscribe((data: any) => {
      console.log("Opened up our edit form for this task", data);
      this.tasktoedit = data
    });
  }

  onEdit(id: string, tasktoedit) {
    console.log("Actually editing task now");
    let observable = this.http.editForm(id, tasktoedit);
    observable.subscribe((data: any) => {
      console.log("actually editing our data right now", data);
      this.tasktoedit =[];
      this.getAllTask();
    });
  }
}
