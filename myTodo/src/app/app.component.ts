import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];

  addTask(taskValue: string, date: string) {
    if(!taskValue) return;
    let task = new Task();
    task.date = date;
    task.value = taskValue;

    this.tasks.push(task);
    console.log(this.tasks)

    // this.tasks.map((task, i) => {
    //   console.log({task, i})
    // })

  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter((_, i) => i !== taskId)
  }
}

export class Task {
  date?: string;
  value?: string;
}
