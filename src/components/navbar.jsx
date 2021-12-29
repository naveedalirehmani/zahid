import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useNavigate  } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(window.location.href);
  const history = useNavigate ();
  return (
    <NavbarWrapper>
      <div>
        <ul>
          <li
            onClick={() => {
              history("/air");
            }}
            className={activeNav === "http://localhost:3000/air" ? "active" : ""}
          >
            <Icon width="30" icon="akar-icons:air" />
          </li>
          <li
            onClick={() => {
              history('/water')
            }}
            className={activeNav === "http://localhost:3000/water" ? "active" : ""}
          >
            <Icon width="30" icon="carbon:rain-drop" />
          </li>
          <li
            onClick={() => {
              history('/temperature')
            }}
            className={activeNav === "http://localhost:3000/temperature" ? "active" : ""}
          >
            <Icon width="30" icon="uil:temperature-half" />
          </li>
          <li
            onClick={() => {
              history('/virus')
            }}
            className={activeNav === "http://localhost:3000/virus" ? "active" : ""}
          >
            <Icon width="30" icon="healthicons:virus-outline" />
          </li>
        </ul>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  backgroundcolor: #fff;
  div {
    ul {
      margin: 0px;
      display: flex;
      width: 100%;
      justify-content: space-around;
      padding: 0px;
      li {
          width:4.5rem;
          text-align:center;
        display: inline-block;
        padding: 4px;
        color: gray;
    }
    .active {
      color: black;
      border-bottom: 1px solid black;
    }
    }
  }
`;
