import React from "react";
import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 62px;
    height: 35px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 1;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0px;
    background: rgb(133, 132, 132);
    transition: 0.4s;
    border-radius: 30px;
    border: 1px solid #ccc;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.9em;
    width: 1.9em;
    border-radius: 16px;
    left: 1.2px;
    top: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0 2px 5px #999999;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #355cec;
    border: 1px solid transparent;
  }

  input:checked + .slider:before {
    transform: translateX(1.5em);
  }
`;

export default Switch;
