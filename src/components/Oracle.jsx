import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Title, QuoteText } from './styles';
import {quotes, getRandomInt} from '../utils/data';


const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(()=> {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
            window.addEventListener('resize', handleResize)
        }
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return windowSize
}

const Oracle = () => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const size = useWindowSize() < 550 ? 'sm' : 'lg'    
    const handleChange = ({target}) => {
        setQuestion(target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setQuestion('')
        setAnswer(quotes[getRandomInt(0, quotes.length)])
    }
    const askAgain = () => {
        setAnswer('')
        const element = document.getElementById("answer");
        element.scrollIntoView();
    }

    return (
    <Container fluid id='oracle' style={{minHeight: '100vh', display: 'flex', flexDirection:'column', alignItems: 'center', paddingTop: 'rem', paddingBottom: '5rem'}}>
        <Title>Ask Miles a Question:</Title>
        <Form style={{width: '70%', display: 'flex',justifyContent: 'center'}} onSubmit={(e)=> onSubmit(e)}>
            <Form.Group  className="m-5" style={{display: 'flex', flexDirection: 'row', alingItems: 'center', justifyContent: 'center'}}>
                    <Form.Control disabled={answer  && true} type='text' value={question} size={size} style={{minWidth: '12rem'}}onChange={(e)=> handleChange(e)} />
                    <Button style={{marginLeft: '1rem', alignText: 'center'}} disabled={answer || question === '' && true} variant="outline-light" type="submit">Ask</Button>
            </Form.Group>

        </Form>
        
            { answer &&
                <Container id='answer' fluid style={{display: 'flex', flexDirection: 'column', paddingBottom: '3rem'}}>
                    <QuoteText> <i>"{answer}"</i></QuoteText>
                <Button style={{alignSelf: 'center'}} variant='outline-light' onClick={()=> askAgain()}>Ask Again</Button>
                </Container>
        
        }
    </Container>
    );
};

export default Oracle;