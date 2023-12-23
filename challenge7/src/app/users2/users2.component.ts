import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css']
})
export class Users2Component implements OnInit{
  listUsers:Utilisateur[]=[]
  constructor(private _Suser:UserService){}
  ngOnInit(): void {
      this._Suser.getUsers()
      .subscribe(data=>this.listUsers=data)
  }
}
