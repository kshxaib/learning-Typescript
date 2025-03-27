// Classes

class Food {
    price = 1200
}

class AirConditioner extends Food {
  color = "white";
  tonnes = 0.75;
  company = "voltas";

  temperature = 22;

  turnOn() {
    console.log("turning on...");
    console.log("turned on.");
  }

  turnOff() {
    console.log("turning off...");
    console.log("turned off.");
  }

  raiseTemperature() {
    this.temperature++;
    console.log(this.temperature);
  }

  decreaseTemperature() {
    console.log("decreasing temperature by 1");
  }
}

let ac = new AirConditioner()
ac.raiseTemperature()