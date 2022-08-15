import React from "react";
import Logo from "../../../assets/img/Logo.png";
import Mail from "../../../assets/img/Mail.png";

import Title from '../../atoms/Title';
import Card from '../../molecules/Card';

import {Services} from './style'

const Index = () => {
  return (
    <>
        <Title>Servicios</Title>
        <Services>
            <Card image={Logo} name="Servicio 1"/>
            <Card image={Mail} name="Servicio 2"/>
            <Card image={Logo} name="Administracion RJ"/>
            <Card image={Logo} name="Administracion RJ"/>
        </Services>
    </>
  );
};

export default Index;
