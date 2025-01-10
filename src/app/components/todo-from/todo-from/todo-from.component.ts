import { Component, inject } from '@angular/core';
import { formOptions } from 'src/app/config/option';
import { Todo, TodoStatus } from 'src/app/interface/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-from',
  templateUrl: './todo-from.component.html',
  styleUrls: ['./todo-from.component.scss']
})
export class TodoFromComponent {
  private todosService = inject(TodosService);

  public newTodoDescription: string = ''
  public newTodoStatus: { value: TodoStatus, name: string} = formOptions[0];
  public statusOptions = formOptions

  public addTodo(){
    const newTodo: Todo = {
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.newTodoStatus.value,
      createdAt: new Date(),
    };
    this.todosService.addTodo(newTodo);
     
    this.newTodoDescription = ''
    this.newTodoStatus = formOptions[0];

    

  }



}
