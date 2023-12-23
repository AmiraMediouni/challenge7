import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { CalculService } from '../calcul.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  listUsers:Utilisateur[]=[]
  constructor(private _CalculService:CalculService){  }
inputValue:string=""
  ngOnInit(): void {
   /* this.listUsers=[ 
      {id:1,name:"Leanne Graham",username: "Bret",email: "Sincere@april.biz"},
      {id: 2,name:"Ervin Howell", username: "Bret",email: "Shanna@melissa.tv"},
      {id:3,name:"Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net"} ] 
  }*/
  this.listUsers=[
    new Utilisateur (1,"Leanne Graham", "Bret", "Sincere@april.biz"),
    new Utilisateur (2,"Ervin Howell", "Bret", "Shanna@melissa.tv"),
    new Utilisateur (3,"Clementine Bauch", "Samantha", "Nathan@yesenia.net")

  ]
  let n=this._CalculService.getNumberOf(this.listUsers,"username",true);
  
}

verifyValue(){
  let userSaisi=this.inputValue
  let  p2=document.getElementById('p2')
  p2!.innerHTML=" le nombre d'utilisateurs ayant le username " + userSaisi +" est  : "+this._CalculService.getNumberOf(this.listUsers,"username",userSaisi)
  
}
}
