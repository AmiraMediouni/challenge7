import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _url=' https://jsonplaceholder.typicode.com/todos'
  constructor(private http:HttpClient) { }
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this._url)
  }
}
