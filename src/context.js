import React, { useReducer, useContext, useState, useEffect } from "react";
import { GiBedLamp } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { BiFridge } from "react-icons/bi";
import { BiCctv } from "react-icons/bi";
import { GiPaperWindmill } from "react-icons/gi";
import reducer from "./reducer";
import axios from "axios";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  roomsData: [
    {
      id: 1,
      name: "Bed Room",
      access: 4,
      isOn: true,
      devices: [
        {
          roomId: 1,
          id: 1,
          name: "Lamp",
          value: 25,
          text: "% brightness",
          icon: <GiBedLamp color="#f98542" size="40" />,
          isOn: false,
          canOff: true,
        },
        {
          roomId: 1,
          id: 2,
          name: "TV",
          value: 25,
          text: "% volume",
          icon: <FiMonitor color="#f98542" size="40" />,
          isOn: true,
          canOff: true,
        },
        {
          roomId: 1,
          id: 3,
          name: "Air Conditioner",
          value: 24,
          text: "°C temperature",
          icon: <GiPaperWindmill color="#f98542" size="40" />,
          isOn: true,
          canOff: true,
        },
        {
          roomId: 1,
          id: 4,
          name: "Fridge",
          value: 8,
          text: "°C temperature",
          icon: <BiFridge color="#f98542" size="40" />,
          isOn: true,
          canOff: false,
        },
        {
          roomId: 1,
          id: 5,
          name: "CCTV Cam",
          value: 89,
          text: "% battery",
          icon: <BiCctv color="#f98542" size="40" />,
          isOn: true,
          canOff: false,
        },
      ],
    },
    {
      id: 2,
      name: "Living Room",
      access: 7,
      isOn: true,
      devices: [
        {
          roomId: 2,
          id: 1,
          name: "Lamp",
          value: 25,
          text: "% brightness",
          icon: <GiBedLamp color="#f98542" size="40" />,
          isOn: false,
          canOff: true,
        },
        {
          roomId: 2,
          id: 2,
          name: "TV",
          value: 25,
          text: "volume",
          icon: <FiMonitor color="#f98542" size="40" />,
          isOn: true,
          canOff: true,
        },
      ],
    },
    {
      id: 3,
      name: "Kitchen",
      access: 4,
      isOn: true,
      devices: [
        {
          roomId: 3,
          id: 1,
          name: "Lamp",
          value: 25,
          text: "% brightness",
          icon: <GiBedLamp color="#f98542" size="40" />,
          isOn: false,
          canOff: true,
        },
        {
          roomId: 3,
          id: 2,
          name: "TV",
          value: 25,
          text: "volume",
          icon: <FiMonitor color="#f98542" size="40" />,
          isOn: true,
          canOff: true,
        },
        {
          roomId: 3,
          id: 3,
          name: "Air Conditioner",
          value: 24,
          text: "°C temperature",
          icon: <GiPaperWindmill color="#f98542" size="40" />,
          isOn: true,
          canOff: true,
        },
      ],
    },
    {
      id: 4,
      name: "Balcony",
      access: 4,
      isOn: true,
      devices: [
        {
          roomId: 4,
          id: 1,
          name: "Lamp",
          value: 25,
          text: "% brightness",
          icon: <GiBedLamp color="#f98542" size="40" />,
          isOn: false,
          canOff: true,
        },
        {
          roomId: 4,
          id: 2,
          name: "TV",
          value: 25,
          text: "volume",
          icon: <FiMonitor color="#f98542" size="40" />,
          isOn: true,
          canOff: true,
        },
      ],
    },
  ],
};

const AppProvider = ({ children }) => {
  const [temp, setTemp] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "http://numbersapi.com/random?min=20&max=30";
  const getRandom = async () => {
    const response = await axios.get(url).catch((err) => console.log(err));
    if (response) {
      setTemp(+response.data.substr(0,2));
      setIsLoading(false);
    }
  };

  useEffect(() => getRandom(), []);

  const switchDevice = (roomId, id) => {
    dispatch({ type: "SWITCH_DEVICE", payload: { roomId, id } });
  };

  const switchRoom = (id) => {
    dispatch({ type: "SWITCH_ROOM", payload: id });
  };

  const addRoom = (data) => {
    dispatch({ type: "ADD_ROOM", payload: data });
  };
  const removeRoom = (id) => {
    dispatch({ type: "REMOVE_ROOM", payload: id });
  };
  const addDevice = (data, id) => {
    dispatch({ type: "ADD_DEVICE", payload: { data, id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        switchRoom,
        switchDevice,
        addRoom,
        removeRoom,
        addDevice,
        isLoading,
        temp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
