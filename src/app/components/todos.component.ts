import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html'
})

export class TodosComponent {
    text: string;

    constructor() {
        this.text = "Todo Component";
    }
}