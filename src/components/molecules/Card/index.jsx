import React, { useState } from 'react';
import {Card, Image, Subtitle} from './style';

const Index = ({image, name, description}) => {
    const [hover, setHover] = useState(false)
    return (
        <Card onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}>
            <Subtitle>
                {name}
            </Subtitle>
            {hover ? <p>Prueba</p>: <Image src={image} alt={name} />}
        </Card>
    );
}

export default Index;
