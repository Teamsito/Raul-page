import React from 'react';
import Logo from '../../../assets/img/Logo.png';
import {MainBanner, ImgLogo, Information} from './style';

const Index = () => {
    return (
        <>
            <MainBanner>
                <Information>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam perspiciatis possimus quisquam voluptas consequuntur eos reiciendis .
                </Information>
                <ImgLogo src={Logo} alt="ADMINISTRACION RJ" />
            </MainBanner>
        </>
    );
}

export default Index;
