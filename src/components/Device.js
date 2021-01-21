import React,{useState} from "react";
import styled from "styled-components/macro";
import Switch from "./Switch";
import { useGlobalContext } from "../context";

function Device({roomId, id, name, value, text, icon, isOn, canOff }) {
    const [isToggled, setIsToggled] = useState(isOn);
    const { switchDevice } = useGlobalContext();

    const handleChange = () => {
        setIsToggled(!isToggled);
        switchDevice(roomId,id);
      };

  return (
    <DeviceContainer>
      <DeviceInfo>
        <DeviceImage>{icon}</DeviceImage>
        <DeviceText>
          <h2>{name}</h2>
          <p>
            {value} {text}
          </p>
        </DeviceText>
      </DeviceInfo>
      <Switch
        id={id}
        toggled={isToggled}
        onChange={handleChange}
      />
    </DeviceContainer>
  );
}
const DeviceContainer = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  margin: 2rem 2rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DeviceInfo = styled.div`
  display: flex;
  align-items: center;
`;
const DeviceImage = styled.div`
  margin-right: 1rem;
`;
const DeviceText = styled.div``;

export default Device;
