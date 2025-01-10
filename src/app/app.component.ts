import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './interface/todos.interfaces';
import { TodosService } from './services/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos?: Todo[] 
  private todoService = inject(TodosService); 
  private todosSubscription: Subscription = new Subscription(); 

  constructor() {
    this.todosSubscription = this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos)
    });
  }

    ngOnDestroy() {
      this.todosSubscription.unsubscribe();
    }
}