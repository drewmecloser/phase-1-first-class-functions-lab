const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = (driversArray) => {
  return driversArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driversArray, driverFunction) => {
  return driverFunction(driversArray);
}


