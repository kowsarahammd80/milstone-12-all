import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Sheard/Footer/Footer';
import Navebar from '../../Pages/Sheard/Navebar/Navebar';

const Main = () => {
  return (
    <div>
      <Navebar></Navebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;