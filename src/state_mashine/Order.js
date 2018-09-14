import StateMachine from 'javascript-state-machine';

export default class Order {
    constructor(items) {
      this.items = items;
      this.history = [];
  
      this._fsm(); // eslint-disable-line
    }
  }
  
  StateMachine.factory(Order, {
    init: 'init',
    transitions: [
      // BEGIN (write your solution here)
      
      // END
    ],
    methods: {
      // BEGIN (write your solution here)
      
      // END
    },
  });