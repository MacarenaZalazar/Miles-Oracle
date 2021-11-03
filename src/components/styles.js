import styled from 'styled-components';

export const Container = styled.div`
text-align: center;
height: 100vh;
display:flex;
flex-direction: column;
align-content: center;
justify-content:center;
    span{
        transition: 0.5s ease;
        justify-self: center;
        color: white;
        font-size: 2.5rem;
        padding: 3rem;
        @media screen and (max-width: 550px) {
            font-size: 2rem
         }

    }
`
export const Title = styled.h1`
    
    color: white;
    padding: 2.5rem;
    transition: 0.5s linear;
    @media screen and (max-width: 550px) {
        font-size: 1.6rem
    }
`
export const QuoteText = styled.h2`
    text-align: center;
    color: white;
    padding: 2.5rem;
    transition: 0.5s linear;
    @media screen and (max-width: 550px) {
        font-size: 1.1rem
     }
`

