import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css']
})
export class TodoList2Component implements OnInit{
  listTodo :Todo[]=[]
  constructor(private _Stodo:TodoService){}
  ngOnInit(): void {
      this._Stodo.getTodos()
      .subscribe(data=>this.listTodo=data)
  }
}
