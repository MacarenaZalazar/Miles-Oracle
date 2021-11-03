import React from 'react';
import { Container } from './styles';
import { Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <Container id='hero'>
            <span>Welcome to the Miles Davis's Oracle</span>
            <div>
            <Button href='#oracle'size='lg' variant='outline-light'>Go</Button>
            </div>
        </Container>
    );
};

export default Hero;