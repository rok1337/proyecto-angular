import { Injectable } from '@angular/core';
import { Todo } from '../interface/todos.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

const tareasPrueba: Todo[] = [{
  id: 1,
  description: 'tarea 1',
  createdAt: new Date(),
  status: 'empty' 
},
{
  id: 2,
  description: 'tarea 2',
  createdAt: new Date(),
  status: 'empty' 
},
{
  id: 3,
  description: 'tarea 3',
  createdAt: new Date(),
  status: 'empty' 
},];

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = tareasPrueba;
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  constructor(){
    this.loadFromLocalStorage();
  }

  public addTodo(newTodo: Todo){
    this.todos.push(newTodo);
    this.update();
  }

  public removeTodo(todoId: Todo['id']){
    this.todos = this.todos.filter((todo) => todo.id !== todoId); 
    this.update();
  }

  public getTodos(): Observable<Todo[]>   {
    return this.todosSubject.asObservable();
  }

  private loadFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos){
      this.todos = JSON.parse(storedTodos);
    }
  }
  private update(){ 
    this.todosSubject.next(this.todos);  
    this.updateLocalStorage();
  }

  private updateLocalStorage () {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
