var robot = require("robotjs");

function main() {
  console.log("starting");
  sleep(4000);
  robot.moveMouseSmooth(342, 329);
  robot.mouseClick();
  sleep(8000);
  robot.moveMouseSmooth(342, 329);
  robot.mouseClick();
  sleep(8000);
  robot.moveMouseSmooth(342, 329);
  robot.mouseClick();
  sleep(8000);

  console.log("done");
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
main();
