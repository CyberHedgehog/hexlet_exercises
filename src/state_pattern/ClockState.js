class ClockState {
    constructor() {
        this.hours = 12;
        this.minutes = 0;
        this.stateName = 'clock';
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
            this.clickH();
            this.minutes = 0;
        }
        else {
            this.minutes += 1;
        }
    }
}

export default ClockState;