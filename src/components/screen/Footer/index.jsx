import React, { useState } from 'react';
import {Footer, Image,FooterLogo,FooterInfo,FooterBot, Subtitle, TextCopy, DivContentImg} from './style';
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
                <DivContentImg>
                    <h2>Nuestros Aliados</h2>
                    <div>
                        <Image src={LogoAliados} alt="Logo aliados" />
                    </div>
                </DivContentImg>
                <DivContentImg>
                    <h2>Contactanos</h2>
                    <div>
                        <Image src={RedesIcon} alt="Redes" />
                    </div>
                </DivContentImg>
            </FooterInfo>
            <FooterBot>
                <TextCopy>© Administracion RJ Todos los derechos reservados</TextCopy>
                <TextCopy>Desarrollado por Teamsito</TextCopy>
            </FooterBot>
        </Footer>
    );
}

export default Index;
