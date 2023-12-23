import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url=' https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }
  getUsers():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this._url)
  }
  
}
