import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todos.service';
import { Todo } from '../models/todo';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit {
    // text: string;

    // constructor() {
    //     this.text = "Todo Component";
    // }

    public todos: Todo[] = [];

    constructor(private service: TodoService){

    }

    private loadTodos(): void {
        this.todos = [];
        this.service.list()
            .subscribe((res) => {
                if(res.success){
                    console.log(res.result);
                }
                else{
                    console.log(res.errors);
                }
            });
    }

    public ngOnInit() {
        this.
    }
}