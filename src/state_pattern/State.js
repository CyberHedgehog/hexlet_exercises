import BellState from './BellState';
import ClockState from './ClockState';
import AlarmState from './AlarmState';



class State {
    constructor() {
        this.bell = new BellState(this);
        this.clock = new ClockState(this);
        this.alarm = new AlarmState(this);
        this.state = this.clock;
        this.alarmMode = false;
    }
    
    getCurrentMode() {
        return this.state.stateName;
    }

    changeMode(mode) {
        const states = {'bell': this.bell,
                'clock': this.clock,
                'alarm': this.alarm
            };
        this.state = states[mode];
    }
}

export default State;
