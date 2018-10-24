
function produceDrivingRange(blockRange) {

  return function(start, end) {
    let startInt = parseInt(start, 10);
    let endInt = parseInt(end, 10);
    let distance = Math.abs(startInt - endInt);
    let distanceRemainder = distance - blockRange;

    if (distance <= blockRange) {
      return `within range by ${Math.abs(distanceRemainder)}`;
    }
    else {
      return `${Math.abs(distanceRemainder)} blocks out of range`;
    }
  }
}

function produceTipCalculator (percentTip) {
  return function (total) {
    return percentTip * total;
  }
}

function createDriver() {
  let DriverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  };
}
