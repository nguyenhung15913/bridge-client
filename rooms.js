let rooms = []
const allRooms = document.getElementById("rooms")
const arrayOfRooms = document.getElementsByClassName("room")
const roomName = document.getElementById("tagname-container")

// Function using Fetch API from the server to receive all rooms
function getAllRooms() {
    //Make a request to server to receive data of rooms
    fetch('http://127.0.0.1:5000/room') 
    .then(response => response.json()) 
    .then(data => {
    //   after Receiving data, we apply the information to the HTML element
      rooms = data
      rooms.map(function(room) {
          allRooms.innerHTML += `
              <div class="room">
              <div class="room-name">
              <p class="name">${room.name}</p>
              <p class="latest-time">${room.latest_time}</p>
              </div>
      
              <div class="room-message">
              <p class="latest-message">${room.latest_message}</p>
              </div>
              
          </div>
          `
        })


        //This function is not done yet
        Array.from(arrayOfRooms).map(function(room) {

            room.addEventListener("click", function() {
                Array.from(arrayOfRooms).map(function(room) {
                    room.classList.remove("present-room")
                })
                if (!room.classList.contains("present-room")) {
                    room.classList.add("present-room")
                } 

                console.log(room)
                // getRoomDetail(room.parentElement.innerText)
            })
        })   
    })
    .catch(error => {
      console.error(error);
    });
  
}

// This function is not done yet
function getRoomDetail(roomName) {
    fetch(`http://127.0.0.1:5000/room/${roomName}`)
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      // Handle the data received from the backend
        console.log(data)
    })
}

getAllRooms() 




