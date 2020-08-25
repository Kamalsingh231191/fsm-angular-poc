import { Component, OnInit } from '@angular/core';
import { from, Observable, ObservedValueOf } from 'rxjs';

import Todos from '../model/todos';
import { MachineService } from '../fsm/machine.service';
import Todo from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos;
  todos$: Observable<any>;

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.todos$ = from(this.machineService.getMachineService());

    this.todos$.subscribe(state => {
      console.log(`todos subscribe `)
      console.log(state);
      this.todos = state.context.todos;
    })

  } 

}
