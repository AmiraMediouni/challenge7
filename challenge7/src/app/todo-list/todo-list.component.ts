import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  listTodo :Todo[]=[]
  constructor(private _CalculService:CalculService){  }

  ngOnInit(): void {
      /*this.listTodo=[
      {"userId": 1,"id":1,"title":"delectus aut autem", "completed": false},
      {"userId": 1, "id":2,"title":"quis ut nam facilis et officia qui", "completed": false}, 
      {"userId": 1, "id":3, "title": "fugiat veniam minus", "completed": false}, 
      {"userId": 1,"id":4,"title":"quo adipisci enim quam ut ab", "completed": true}];*/
      this.listTodo=[
        new Todo(1,1,"delectus aut autem",false),
        new Todo(1,2,"quis ut nam facilis et officia qui",false),
        new Todo(1,3,"fugiat veniam minus",false),
        new Todo(1,4,"quo adipisci enim quam ut ab",true),
        
      ];
      let n=this._CalculService.getNumberOf(this.listTodo,"completed",true);
  }
  afficher(){
   let  pp=document.getElementById('p1') 
   pp!.innerHTML='le nombre de todo completed par rapport au nombre de todo total est : '+this._CalculService.getNumberOf(this.listTodo,"completed",true)
  }
}
