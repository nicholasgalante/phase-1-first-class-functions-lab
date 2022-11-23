// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function (fare) {
        return fare * int;
    }
}

function fareDoubler(fare) {
    const func = createFareMultiplier(2);
    return func(fare);
}


function fareTripler(fare) {
    const func = createFareMultiplier(3);
    return func(fare);
}

function selectDifferentDrivers(drivers, whichTwoDrivers){
    return whichTwoDrivers(drivers);
}