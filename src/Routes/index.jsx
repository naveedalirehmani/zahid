import React,{useEffect} from "react";
import { Routes,Route,useNavigate } from "react-router-dom";
import Temperature from "../pages/Temperature/Temperature";
import Air from "../pages/Air/Air";
import Water from "../pages/Water/Water";
import Virus from "../pages/Virus/Virus";

export const ApplicationRoutes = () => {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   console.log('here in')
  //   if(window.location.href == 'http://localhost:3000/'){
  //     console.log('here')
  //     navigate('/air');
  //   }
  // },[])
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Air/>} />
        <Route exact path="temperature" element={<Temperature/>} />
        <Route exact path="air" element={<Air/>} />
        <Route exact path="water" element={<Water/>} />
        <Route exact path="virus" element={<Virus/>} />
      </Routes>
    </>
  );
};

export default ApplicationRoutes;
