class TempTracker {
  constructor() {
    this.numbers = 0; //numbers of inserted temperature
    this.sum = null; //  sum of all inserted temperature
    this.min = null;
    this.max = null;
    this.mean = null;
  }

  insert(temperature) {
    if (typeof temperature === 'number')
      if (this.numbers === 0) {
        this.numbers++;
        this.sum = this.min = this.max = this.mean = temperature;
      } else {
        this.sum += temperature;
        this.numbers++;
        this.mean = Number((this.sum / this.numbers).toFixed(2)); // set the min temperature
        this.max = Math.max(temperature, this.max); //set the max temperature
        this.min = Math.min(temperature, this.min); // set the min temperature
      }
  }

  getMaxTemp() {
    return this.max;
  }

  getMinTemp() {
    return this.min;
  }

  getMeanTemp() {
    return this.mean;
  }
}

const testTracker = new TempTracker();
const testArray = [30, 28, 26, 25, 'str', 23, -45, 87, 56, 12];

for (const temp of testArray) {
  testTracker.insert(temp);
}

module.exports = testTracker;
