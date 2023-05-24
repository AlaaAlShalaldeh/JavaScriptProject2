class Hotel {
    #minFloor;
    #maxFloor;
    constructor( Address, NumberOfRooms,minFloor,maxFloor,rooms) {
      this.Address = Address;
      this.NumberOfRooms =NumberOfRooms;
      this.#maxFloor=maxFloor;
      this.#minFloor=minFloor;
      this.rooms = rooms;
    }
  
  
   
    printAdvertisement(){
        console.log("The Hotel Address is: "+ this.Address+" ,and The number of rooms: "+this.NumberOfRooms+", and Min Floor is: "+this.#minFloor+
        " ,and Max Floor is: "+this.#maxFloor);
    }
  
    listBookedRooms() {
      return this.rooms.filter(room => room.IsBooked());
    }
  }
  class Room {
    #isBooked ;
    constructor(floorNum, roomNum, price, isBooked) {
      this.floorNum = floorNum;
      this.roomNum = roomNum;
      this.price = price;
      this.#isBooked = isBooked;
    }
   
    printRoom(){
        console.log("The room is on floor number: "+this.floorNum+", The room number is: "+this.roomNum+
        " ,the room Price is: "+this.price+(this.#isBooked == false ? ' ,The room is not Booked' : ' ,The room is Booked '));
     
        
    }
    book() {
      this.#isBooked = true;
    }
  
    IsBooked() {
       return this.#isBooked;
    }
  }
  ///the rooms types
  class SleepingRoom extends Room {
    constructor(floorNum,roomNum,price,isBooked,PersonCapacity ){
      
     super(floorNum,roomNum,price,isBooked)
      this.PersonCapacity = PersonCapacity ;
    }
    printRoom(){
      
        console.log("The room is on floor number: "+this.floorNum+" ,The room number is: "+this.roomNum+
        " ,the room Price is: "+this.price+ " "+( this.IsBooked() == false ? ', The room is not Booked' : ', The room is Booked ')+"  ,the Person Capacity: "+ this.PersonCapacity);
}
   
  }
  
  class RoomWithView extends Room {
    constructor(floorNum,roomNum,price,isBooked,view ,numberOFBeds){
      
        super(floorNum,roomNum,price,isBooked)
         this.view=view;
         this.numberOFBeds=numberOFBeds;
       }
       printRoom(){
      
            console.log("The room is on floor number: "+this.floorNum+", The room number is: "+this.roomNum+
            " ,the room Price is: "+this.price+" "+ (this.IsBooked() == false ? ', The room is not Booked' : ' ,The room is Booked ')+", the room view is: "+this.view 
            +" ,The number of Beds is: "+this.numberOFBeds);
    }
  }
  
  



  ///
const room1 = new Room(1,100,1000,false);
const room2 = new Room(2,101, 900,false);
const room3 = new Room(3,102, 1200,true);
const room4 = new SleepingRoom(2,103,2000,true,5);
const room5 = new RoomWithView(4,104,4000,false,"Ocean",10);

const hotel = new Hotel("Hebron",100,0,10, [room1, room2, room3,room4,room5]);
hotel.printAdvertisement();
room1.printRoom();
room2.printRoom();
room4.printRoom();
room5.printRoom();

 console.log( hotel.listBookedRooms());
