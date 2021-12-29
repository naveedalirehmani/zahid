import React from "react";
import styled from "styled-components";

const Circle = ({ children, title, subtitle, unit }) => {
  return (
    <MainCircle>
      <div>
        <div className="text">
          <div className="unit">
            <span>{children}</span>
            <span>{unit}</span>
          </div>
          <div className="title">
            <span>{title}</span>
            <span>{subtitle}</span>
          </div>
        </div>
      </div>
    </MainCircle>
  );
};

export default Circle;

const MainCircle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(172, 255, 80, 1) 0%,
    rgba(109, 221, 119, 1) 48%
  );
  .text {
    width: 210px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 210px;
    .unit {
      display: flex;
      justify-content: center;
      color: #4d4d4d;
      span:first-child {
        font-size: 3rem;
        font-weight: bold;
      }
      span:last-child {
        font-weight: bold;
        font-size: 0.7rem;
        padding: 0.9rem 0 0 0.2rem;
      }
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span {
        font-size: 0.8rem;
        color: #4d4d4d;
      }
    }
  }
`;
