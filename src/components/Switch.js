import React from "react";
import styled from "styled-components";

const Switch = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchLabel>
        <SwitchInput
          type="checkbox"
          id={id}
          checked={toggled}
          onChange={onChange}
        />
        <SwitchSlider />
      </SwitchLabel>
    </>
  );
};

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 17px;

  input {
    opacity: 1;
    width: 0;
    height: 0;
  }
`;
const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(229, 229, 229, 0.5);
  transition: 0.4s;
  border-radius: 50px;

  ::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 0px;
    bottom: -4px;
    background-color: rgba(229, 229, 229, 1);
    transition: 0.4s;
    border-radius: 50px;
  }
`;
const SwitchInput = styled.input`
  :checked + ${SwitchSlider}::before {
    transform: translateX(20px);
    background-color: rgba(249, 133, 66, 1);
  }
  :checked + ${SwitchSlider} {
    background-color: rgba(249, 133, 66, 0.5);
  }
`;

export default Switch;
