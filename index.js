// Code your solution in this file!
function distanceFromHqInBlocks(num) {
 return num >= 42 ? num - 42: 42 - num  
};

function distanceFromHqInFeet(num) {
 return distanceFromHqInBlocks(num) * 264
};

function distanceTravelledInFeet(start, destination) {
    return start > destination ? (start - destination) * 264: (destination - start) * 264
};

function calculatesFarePrice(start, destination) {
    const dis = distanceTravelledInFeet(start, destination);
    if (dis <= 400) {
        return 0
    } else if (dis > 400 && dis < 2000) {
        return ((dis) - 400) * 0.02
    } else if (dis > 2000 && dis < 2500) {
        return 25
    } else {
       return 'cannot travel that far'
    };
};