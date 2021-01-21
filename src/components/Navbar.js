import React, { useState } from "react";
import styled from "styled-components/macro";
import { BsArrowLeft } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";

function Navbar({ image, title, subtitle }) {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [addDeviceVar, setAddDeviceVar] = useState(false);
  const { id } = useParams();
  const { removeRoom } = useGlobalContext();
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleAddDevice = () => {
    setShowModal((prev) => !prev);
    setAddDeviceVar(true);
  };
  const handleRemove = () => {
    removeRoom(id);
    history.push("/");
  };
  return (
    <NavbarContainer>
      <NavbarUser>
        <Link to="/">
          {image ? (
            <NavbarImage src={image} alt="Image" />
          ) : (
            <BsArrowLeft color="white" size="30px" />
          )}
        </Link>
        <NavbarInfo>
          <NavbarTitle>{title || "User"}</NavbarTitle>
          <NavbarSubtitle>{subtitle || "Welcome to Home"}</NavbarSubtitle>
        </NavbarInfo>
      </NavbarUser>
      <NavbarOptions onClick={handleOpen}>
        <FiSettings color="white" size="30" />
        {isOpen && (
          <NavbarMenu>
            {id ? (
              <>
                <NavbarMenuItem onClick={handleRemove}>
                  Remove Room
                </NavbarMenuItem>
                <NavbarMenuItem onClick={handleAddDevice}>
                  Add Device
                </NavbarMenuItem>
              </>
            ) : (
              <NavbarMenuItem onClick={openModal}>Add Room</NavbarMenuItem>
            )}
          </NavbarMenu>
        )}
      </NavbarOptions>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        addDeviceVar={addDeviceVar}
      />
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  background-color: #f98542;
`;
const NavbarUser = styled.div``;
const NavbarOptions = styled.div`
  position: relative;
`;

const NavbarImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const NavbarInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
const NavbarTitle = styled.h1`
  color: white;
`;
const NavbarSubtitle = styled.h3`
  color: white;
  font-weight: 300;
`;

export const NavbarMenu = styled.ul`
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  list-style: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  z-index: 1;
`;

export const NavbarMenuItem = styled.li`
  font-size: 13px;
  padding: 15px 40px;
  color: #000;
  width: 150px;
  background-color: #fff;
  &:hover {
    background-color: #f2f3f6;
    cursor: pointer;
  }
`;
export default Navbar;
