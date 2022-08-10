import React, { useState } from 'react';
import {Footer, Image,FooterLogo,FooterInfo,FooterBot, Subtitle} from './style';
import Logo from '../../../assets/img/LogoMain.png'
import LogoAliados from '../../../assets/img/LogosAliados.png'
import RedesIcon from '../../../assets/img/RedesIcon.png';

const Index = () => {
    const [hover, setHover] = useState(false)
    return (
        <Footer>
            <FooterLogo>
                <img src={Logo} alt="Logo" />
            </FooterLogo>
            <FooterInfo>
                <div>
                    <ul>
                        <li>Inicio</li>
                        <li>Nosotros</li>
                        <li>Servicios</li>
                        <li>Contactanos</li>
                    </ul>
                </div>
                <div>
                    <h2>Nuestros Aliados</h2>
                    <div>
                        <img src={LogoAliados} alt="Logo aliados" />
                    </div>
                </div>
                <div>
                    <h2>Contactanos</h2>
                    <div>
                        <img src={RedesIcon} alt="Redes" />
                    </div>
                </div>
            </FooterInfo>
            <FooterBot>
                <h2>© Administracion RJ Todos los derechos reservados</h2>
                <h2>Desarrollado por Teamsito</h2>
            </FooterBot>
        </Footer>
    );
}

export default Index;
