

const reducer = (state, action) => {
  if (action.type === "SWITCH_DEVICE") {
    let tempRooms = state.roomsData.map((room) => {
      if (room.id === action.payload.roomId) {
        let tempDevices = room.devices.map((device) => {
          if (device.id === action.payload.id) {
            return { ...device, isOn: !device.isOn };
          }
          return device;
        });
        return { ...room, devices: tempDevices };
      }
      return room;
    });
    return { ...state, roomsData: tempRooms };
  } else if (action.type === "SWITCH_ROOM") {
    let tempRooms = state.roomsData.map((room) => {
      if (room.id === action.payload) {
        let tempDevices = room.devices.map((device) => {
          if (device.isOn === true && device.canOff === true) {
            return { ...device, isOn: false };
          }
          return device;
        });
        return { ...room, isOn: !room.isOn, devices: tempDevices };
      }
      return room;
    });
    return { ...state, roomsData: tempRooms };
  } else if (action.type === "ADD_ROOM") {
    return { ...state, roomsData: [...state.roomsData, action.payload] };
  } else if (action.type === "REMOVE_ROOM") {
    const tempRooms = state.roomsData.filter(
      (room) => room.id !== +action.payload
    );
    console.log(tempRooms);
    return { ...state, roomsData: tempRooms };
  }
  else if (action.type === "ADD_DEVICE") {
    let tempRoom = state.roomsData.filter((room) => room.id === +action.payload.id)
    tempRoom[0].devices.push(action.payload.data)
    // ZMIENIĆ ZEBY NIE DODAWAŁO POKOJU
    let tempRoomsData = state.roomsData
    tempRoomsData[+action.payload.id-1] = tempRoom[0]
    console.log(tempRoomsData)
    return { ...state, roomsData: tempRoomsData };
    // return { ...state, roomsData: [tempRoomsData] };
  }
  return state;
};

export default reducer;
