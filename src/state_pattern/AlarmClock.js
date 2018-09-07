import State from './State';

class AlarmClock extends State {
    constructor() {
        super();
    }

    isAlarmOn() {
        return this.alarmMode ? true: false;
    }

    clickMode() {
        if (this.getCurrentMode() === 'clock') {
            this.changeMode('alarm');
        }
        else {
            this.changeMode('clock');
        }
    }

    longClickMode() {
        this.alarmMode = this.isAlarmOn() ? false: true;
    }

    minutes() {
        return this.clock.minutes;
    }

    hours() {
        return this.clock.hours;
    }

    alarmMinutes() {
        return this.alarm.minutes;
    }

    alarmHours() {
        return this.alarm.hours;
    }

    clickH() {
        if (this.getCurrentMode() === 'bell') {
            this.changeMode('clock');
        }
        this.state.clickH();
    }

    clickM() {
        if (this.getCurrentMode() === 'bell') {
            this.changeMode('clock');
        }
        this.state.clickM();
    }

    isAlarmTime() {
        return this.hours() === this.alarmHours() && this.minutes() === this.alarmMinutes() ? true: false;
    }

    tick() {
        if (this.getCurrentMode() !== 'clock') {
            this.clickMode();
            this.clickM();
            this.clickMode();
        }
        else {
            
            this.clickM();
        }

        if (this.isAlarmOn() && this.isAlarmTime()) {
            this.changeMode('bell');
        }
    }

}

export default AlarmClock;