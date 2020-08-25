import { Injectable } from '@angular/core';
import { interpret, Interpreter } from 'xstate';

import { todoMachine } from './machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  interpreter: any;

  constructor() { 
    console.log(`machine service constructor`);
    this.interpreter = interpret(todoMachine).start();
  }

  getMachineService(){
    return this.interpreter;
  }

}
