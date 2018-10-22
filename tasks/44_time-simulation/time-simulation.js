/* eslint "require-jsdoc": 0 */
class SimTime {
  constructor() {
    this.time = 0;
    this.realtime = 0;
    this.speed = 1;
  }

  get() {
    return this.time;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  update(time) {
    if (this.realtime > time) return 'Error';
    const newTime = this.time + (time - this.realtime) * this.speed;
    this.time = newTime;
    this.realtime = time;
  }
}

export {SimTime};
