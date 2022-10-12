class ParkingLot {
  parkingSize = [];
  constructor(slots) {
    this.slots = slots;
    // this.parkingSize.length = this.slots;
    console.log(`Parking Lot created with nnumber of slot as ${this.slots}`);
  }

  checkIsCarAvialable(carId) {
    const isCarAvailable = this.parkingSize.find((car) => carId === car);
    return isCarAvailable;
  }

  park(carId) {
    // takes the index of as a cardId Palce it on the particular index
    const isCardIdDuplicate = this.checkIsCarAvialable(carId);
    if (isCardIdDuplicate) {
      console.log("Sorry! But the car number is already allocated");
      return false;
    }
    if (this.parkingSize.length <= this.slots) {
      this.parkingSize.push(carId);
      console.log(`Parking Started: ${carId}`);
      return true;
    } else {
      console.log("Parking Full");
      return false;
    }
  }
  getSlots() {
    // return all the index of empty array
    const availableSlots = [];
    if (this.parkingSize.length <= this.slots) {
      for (let i = 0; i < this.slots; i++) {
        availableSlots.push(i + 1);
      }
      for (let i = 0; i < this.slots; i++) {
        if (this.parkingSize[i]) {
          console.log(`Parked at slot: ${i + 1} : ${this.parkingSize[i]} `);
        } else {
          console.log(`Slot: ${i + 1} : is empty`);
        }
      }
      return availableSlots;
    } else {
      return null;
    }
  }

  remove(carId) {
    // filter the array if card id is found other wise it return false
    //
    const isCarAvailable = this.checkIsCarAvialable(carId);
    if (isCarAvailable) {
      const newFilterdParking = this.parkingSize.filter((car) => car != carId);
      this.parkingSize = newFilterdParking;
      console.log(`Card if ${carId} removed from parking`);
      return true;
    } else {
      console.log(`Car:${carId} not found`);
      return false;
    }
  }
}

const myParkingAllocater = new ParkingLot(5);

myParkingAllocater.park("CAR-10");
myParkingAllocater.park("CAR-20");
myParkingAllocater.park("CAR-30");
myParkingAllocater.getSlots();
myParkingAllocater.remove("CAR-20");
myParkingAllocater.getSlots();
