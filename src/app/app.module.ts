import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos.component';
import { TodoService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterializeModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
