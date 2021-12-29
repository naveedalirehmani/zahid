import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import Navigations from "../../components/Navigations.jsx";
import Chart from "../../components/Chart.jsx";
import { data } from "./data";
import Circle from "../../components/Circle.jsx";
import Tags from "../../components/Tags.jsx";

const Index = () => {
  return (
    <Temperature>
      <Navigations></Navigations>
      <Layout></Layout>
      <div className="content">
        <div className="circle">
          <Circle unit="o" title="TEMPERATURE AVERAGE" subtitle="LAST 48 HOURS">
            20.5
          </Circle>
        </div>
        <div className="tags">
          <Tags></Tags>
        </div>
        <div className="chart-wrapper">
          <Chart data={data}></Chart>
        </div>
      </div>
    </Temperature>
  );
};

export default Index;

const Temperature = styled.div`
  .content {
    padding-top: 1.5rem;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .chart-wrapper {
    width: 100%;
    height: 400px;
    border: 1px solid red;
  }
  .tags {
    width: 100%;
    margin-top: 10rem;

  }
`;
