import State from './State';
import AlarmState from './AlarmState';
import ClockState from './ClockState';
import BellState from './BellState';

class AlarmClock extends State {
    constructor() {
        super();
        this.setState(ClockState);
    }

    clickMode() {
        if( this.getCurrentMode() === 'alarm' ) {
            this.setState(ClockState);
        }
        else {
            this.setState(AlarmState);
        }
    }

    longClickMode() {
        this.alarmMode = this.isAlarmOn() ? false: true;
    }

    minutes() {
        if (this.getStateName() === 'alarm') {
            this.clickMode();
            const min = this.state.minutes;
            this.clickMode();
            return min;
        }
        else {
            return this.state.minutes;
        }
    }

    hours() {
        if (this.getStateName() === 'alarm') {
            this.clickMode();
            const h = this.state.hours;
            this.clickMode();
            return h
        }
        else {
            return this.state.hours;
        }
    }

    alarmMinutes() {
        if (this.getStateName() !== 'alarm') {
            this.clickMode();
            const min = this.state.minutes;
            this.clickMode();
            return min;
        }
        else {
            return this.state.minutes;
        }
    }

    alarmHours() {
        if (this.getStateName() !== 'alarm') {
            this.clickMode();
            const h = this.state.hours;
            this.clickMode();
            return h;
        }
        else {
            return this.state.hours;
        }
    }

    isAlarmOn() {
        return this.alarmMode;
    }

    clickH() {
        if (this.hours() === 23) {
            this.state.hours = 0;
        }
        else {
            this.state.hours += 1;
        }
    }

    clickM() {
        if (this.minutes() === 59) {
            this.clickH();
            this.state.minutes = 0;
        }
        else {
            this.state.minutes += 1;
        }
    }

    isAlarmTime() {
        if (this.hours() === this.alarmHours() && this.minutes() === this.alarmMinutes) {
            return true;
        }
    }

    getCurrentMode() {
        return this.getStateName();
    }

    tick() {
        if (this.getCurrentMode() === 'alarm') {
            this.clickMode();
            this.clickM();
            this.clickMode();
        }
        else {
            this.clickM();
        }

        if (this.isAlarmTime() && this.isAlarmOn()) {
            this.setState(BellState);
        }
    }
};

const test = new AlarmClock();
console.log(`before tick - ${test.getCurrentMode()}`);
//test.tick();
test.longClickMode();
test.tick;
console.log(test.getCurrentMode());



export default AlarmClock;