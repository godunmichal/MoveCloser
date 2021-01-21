import React from "react";
import styled from "styled-components/macro";
import { FaThermometerHalf } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { useGlobalContext } from "../context";

function RoomInfo() {
  const { isLoading, temp } = useGlobalContext();
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <RoomInfoContainer>
        <RoomInfoTemperature>
          <TemperatureImage>
            <FaThermometerHalf color="white" size="40px" />
          </TemperatureImage>
          <TemperatureText>
            <h1>{temp}</h1>
            <h2>TEMP</h2>
          </TemperatureText>
        </RoomInfoTemperature>
        <RoomInfoHumidity>
          <HumidityImage>
            <BsDropletHalf color="white" size="40px" />
          </HumidityImage>
          <HumidityText>
            <h1>50%</h1>
            <h2>HUMIDITY</h2>
          </HumidityText>
        </RoomInfoHumidity>
      </RoomInfoContainer>
    );
  }
}

const RoomInfoContainer = styled.div`
  background-color: #f98542;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const RoomInfoTemperature = styled.div`
  display: flex;
  align-items: center;
`;
const TemperatureImage = styled.div`
  margin: 2rem 2rem;
  margin-right: 1rem;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TemperatureText = styled.div`
  color: #fff;
`;
const RoomInfoHumidity = styled.div`
  display: flex;
  align-items: center;
`;
const HumidityImage = styled.div`
  margin: 2rem 2rem;
  margin-right: 1rem;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HumidityText = styled.div`
  color: #fff;
`;

export default RoomInfo;
