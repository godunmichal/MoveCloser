import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Device from "./Device";
import Navbar from "./Navbar";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import RoomInfo from "./RoomInfo";

function RoomDetails() {
  const { roomsData, loading } = useGlobalContext();
  const { id } = useParams();

  const roomInfo = roomsData.filter((room) => room.id === +id);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <RoomDetailsContainer>
        <Navbar
          title={roomInfo[0].name}
          subtitle={`${roomInfo[0].access} family members have access`}
        />
        <RoomInfo />
        <RoomDetailsInfo></RoomDetailsInfo>
        {roomInfo[0].devices.map((item) => {
          return <Device key={item.id} {...item} />;
        })}
      </RoomDetailsContainer>
    );
  }
}

const RoomDetailsContainer = styled.div`
  background-color: #e8e8e8;
  padding-bottom: 1rem;
  height: fit-content;
  min-height: 100vh;
`;
const RoomDetailsInfo = styled.div``;

export default RoomDetails;
