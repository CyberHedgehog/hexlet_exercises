class AlarmState {
    constructor() {
        this.hours = 6;
        this.minutes = 0;
        this.stateName = 'alarm';
    }

    clickH() {
        if (this.hours === 23) {
            this.hours = 0;
        }
        else {
            this.hours += 1;
        }
    }

    clickM() {
        if (this.minutes === 59) {
            this.minutes = 0;
        }
        else {
            this.minutes += 1;
        }
    }
}

export default AlarmState;