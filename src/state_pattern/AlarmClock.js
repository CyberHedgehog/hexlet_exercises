import State from './State';
import AlarmState from './AlarmState';
import ClockState from './ClockState';
//import AlarmState from './AlarmState';

class AlarmClock extends State {
    constructor() {
        super();
        this.h = 12;
        this.m = 6;
    }

    clickMode() {
        if( this.isAlarmOn() ) {
            this.setState(ClockState);
        }
        else {
            this.setState(AlarmState);
        }
    }

    isAlarmOn() {
        return this.getStateName() === 'Alarm' ? true : false;
    }
};

const alarmObj = new AlarmClock();
console.log(`before a click - ${alarmObj.getStateName()}`);
alarmObj.clickMode();
console.log(`after click - ${alarmObj.getStateName()}`);
alarmObj.clickMode();
console.log(`after click again - ${alarmObj.getStateName()}`);
