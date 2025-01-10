import { Component, Input, inject } from '@angular/core';
import { Todo } from 'src/app/interface/todos.interfaces';  
import { TodosService } from 'src/app/services/todos.service';
@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() todo?: Todo;
  private todosService = inject(TodosService);  

  public newTodoDescription: string = '';
  public newTodoStatus: {value: string, label: string} = {value: 'empty', label: 'Empty'}; 

  public removeTodo(): void {
    if (this.todo && typeof this.todo.id === 'number') {
      this.todosService.removeTodo(this.todo.id);
    }
  } 


  }
