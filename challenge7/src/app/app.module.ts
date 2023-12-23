import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { CalculService } from './calcul.service';
import { UsersComponent } from './users/users.component';
import { TodoList2Component } from './todo-list2/todo-list2.component';
import { Users2Component } from './users2/users2.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UsersComponent,
    TodoList2Component,
    Users2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalculService],
  bootstrap: [AppComponent]
})
export class AppModule { }
