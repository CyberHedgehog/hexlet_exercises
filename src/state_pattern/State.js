import BellState from './BellState';
import ClockState from './ClockState';
import AlarmState from './AlarmState';

class State {
    constructor() {
        this.setState(ClockState);
    }
    setState(Klass) {
        this.state = new Klass(this);
    }

    getStateName() {
        return this.state.stateName;
    }
}

export default State;

//const obj = new State();
//obj.setState(AlarmState);
//console.log(obj.getName());