angular
    .module('counter', [])
    .controller('CounterController', CounterController);  //1st param is name of controller, 2nd param is the controller function itself. Give the controller function the same name as the controller//

function CounterController(){
    this.number = 0;
    
    this.increment = () => { this.number++ };
    this.decrement = () => { this.number-- };
}