import React, { useEffect } from 'react'
import CardList from './body/CardList';
import Footer from './footer/Footer';
import Carrusel from './carrusel/Carrusel';
import Header2 from './header/Header2';
import SesionExpired from './sesionExpired/SesionExpired';

function Inicio2() {
  return (
    <div>
      <Header2/>
      <Carrusel/>
      <CardList/>
      <Footer/>
      <SesionExpired/>
    </div>
  )
}

export default Inicio2