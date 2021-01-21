import React, { useState } from "react";
import styled from "styled-components/macro";
import { MdClose } from "react-icons/md";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import { GiBedLamp } from "react-icons/gi";

function Modal({ showModal, setShowModal, addDeviceVar }) {
  const [name, setName] = useState("");
  const [access, setAccess] = useState(0);
  const [device, setDevice] = useState("");
  const [text, setText] = useState("");
  const { addRoom, addDevice, roomsData } = useGlobalContext();
  const { id } = useParams();

  const roomInfo = roomsData.filter((room) => room.id === +id);

  const handleAddRoom = () => {
    let newRoom = {
      id: roomsData.length + 1,
      name: name,
      access: access,
      isOn: false,
      devices: [],
    };

    addRoom(newRoom);
    setName("");
    setAccess(0);
    setShowModal(!showModal);
  };
  const handleAddDevice = () => {
    let newDevice = {
      roomId: +id,
      id: roomInfo[0].devices.length + 1,
      name: device,
      canOff: true,
      isOn: false,
      text: text,
      value: 25,
      icon: <GiBedLamp color="#f98542" size="40" />
    };

    addDevice(newDevice, id);
    setDevice("");
    setText("");
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && !addDeviceVar ? (
        <>
          <ModalWrapper>
            <ModalContent>
              <FormGroup>
                <Label htmlFor="name">Room Name: </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="access">Number of people have access: </Label>
                <Input
                  id="access"
                  type="number"
                  min="0"
                  value={access}
                  onChange={(e) => setAccess(e.target.value)}
                />
              </FormGroup>
              <Button onClick={() => handleAddRoom()}>Add Room</Button>
            </ModalContent>
            <CloseModalButton
              onClick={() => setShowModal((prev) => !prev)}
            ></CloseModalButton>
          </ModalWrapper>
        </>
      ) : showModal && addDeviceVar ? (
        <>
          <ModalWrapper>
            <ModalContent>
              <FormGroup>
                <Label htmlFor="device">Device</Label>
                <Input
                  id="device"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="text">Text</Label>
                <Input
                  id="text"
                  type="string"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </FormGroup>
              <Button onClick={() => handleAddDevice()}>Add</Button>
            </ModalContent>
            <CloseModalButton
              onClick={() => setShowModal((prev) => !prev)}
            ></CloseModalButton>
          </ModalWrapper>
        </>
      ) : null}
    </>
  );
}
const ModalWrapper = styled.div`
  width: 60vw;
  height: 50vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: 10%;
  left: 25%;
  z-index: 10;
  border-radius: 10px;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 10px 24px;
  background: #fff;
  color: #000;
  border: 2px solid #f98542;
  margin-top: 1rem;
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const FormGroup = styled.div`
  color: black;
  width: 80%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  p {
    color: red;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: #fff;
  border: 2px solid #f98542;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export default Modal;
