import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Switch from "./Switch";
import { useGlobalContext } from "../context";

function Room({ id, name, access, isOn, devices }) {
  const [isToggled, setIsToggled] = useState(isOn);
  const { switchRoom } = useGlobalContext();
  const handleChange = () => {
    setIsToggled(!isToggled);
    switchRoom(id);
  };
  return (
    <RoomContainer>
      <RoomTitle to={`/roomdetails/${id}`}>{name}</RoomTitle>
      <RoomInfo>{access} family members have access</RoomInfo>
      <RoomDevices>{!devices.length ? 0 : devices.length} Devices</RoomDevices>
      <Switch id={id} toggled={isToggled} onChange={handleChange} />
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem 1rem;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RoomTitle = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: black;
`;
const RoomInfo = styled.p`
  color: gray;
`;
const RoomDevices = styled.p`
  color: #f98542;
`;

export default Room;
