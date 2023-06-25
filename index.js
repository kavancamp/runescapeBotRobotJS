var robot = require("robotjs");

function main() {
  console.log("starting");
  sleep(4000);
  //on Mac CMD + shift + 4 to get coordinates
  let i = 0;
  while (i < 5) {
    robot.moveMouseSmooth(369, 337);
    robot.mouseClick();
    sleep(8000);
    i++;
  }

  console.log("done");
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
main();
