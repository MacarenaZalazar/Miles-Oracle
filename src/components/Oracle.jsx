import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Title, QuoteText } from './styles';
import {quotes, getRandomInt} from '../utils/data';

const Oracle = () => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
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
    }
    return (
    <Container fluid id='oracle' style={{height: '100vh', display: 'flex', flexDirection:'column', alignItems: 'center', paddingTop: '4rem', paddingBottom: '5rem'}}>
        <Title>Ask Miles a Question:</Title>
        <Form style={{width: '70%', display: 'flex',justifyContent: 'center'}} onSubmit={(e)=> onSubmit(e)}>
            <Form.Group  className="m-5" style={{display: 'flex', flexDirection: 'row', alingItems: 'center', justifyContent: 'center'}}>
                    <Form.Control disabled={answer && true} type='text' value={question} size='lg' style={{minWidth: '15rem'}}onChange={(e)=> handleChange(e)} />
                    <Button style={{marginLeft: '1rem'}} disabled={answer && true} variant="outline-light" type="submit">Ask</Button>
            </Form.Group>

        </Form>
        
                { answer &&
                <Container fluid style={{display: 'flex', flexDirection: 'column'}}>
                <QuoteText> <i>"
                    {answer}"</i>
                </QuoteText>
                <Button style={{alignSelf: 'center'}} variant='outline-light' onClick={()=> askAgain()}>Ask Again</Button>
                </Container>
        
        }
    </Container>
    );
};

export default Oracle;