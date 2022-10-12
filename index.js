'use strict';

const data = require('./data.json');

let inputData = data.inputs[1];
let currentLine = 0;

function readLine() {
  return inputData[currentLine++];
}

class ParkingLot {
  // Write your code here
}

function main() {
    const numberOfSlots = readLine();
    const parkingLotObj = new ParkingLot(numberOfSlots);
    console.log(`Parking Lot created with number of slots as ${numberOfSlots}\n`);

    let numberOfOperations = readLine();
    while (numberOfOperations-- > 0) {
        const inputs = readLine().trim().split(' ');
        const operation = inputs[0];
        const carId = inputs[1];

        switch(operation) {
            case 'Park':
                if (parkingLotObj.park(carId)) {
                    console.log(`Parking Started: ${carId}\n`);
                } else {
                    console.log(`Parking Full: ${carId}\n`);
                }
                break;
            case 'Remove':
                if (parkingLotObj.remove(carId)) {
                    console.log(`Car id ${carId} removed from parking\n`);
                } else {
                    console.log(`Car: ${carId} not found\n`);
                }
                break;
            case 'GetSlots':
                const status = parkingLotObj.getSlots();
                status.forEach((obj, i) => {
                    if (obj) {
                        console.log(`Parked at slot ${i + 1}: ${obj}\n`);
                    } else {
                        console.log(`Slot ${i + 1} is empty\n`);
                    }
                })
                break;
            default:
                break;
        }
    }
}

main();