import styled from "styled-components";

export const AppContainer = styled.div`
    text-aling: center;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content:center;
    background-image: url('https://i1.wp.com/borderperiodismo.com/wp-content/uploads/2017/01/miles.jpg?fit=930%2C525&ssl=1');
    background-size: cover;
    background-repeat: no-repeat;
`
export const Footer = styled.footer`
left: 0;
bottom: 1.5rem;
width: 100%;
color: grey;
text-align: center;
`
export const Player = styled.div`
width: 100%;
position: fixed;
left:0;
bottom: 1rem;
    .cont{
        border-radius: 3rem;
        display: flex;
        align-items: center; 
        justify-content: center;
        flex-direction: column;
    span{
        font-size: 0.8rem;
    }
    h3{
        margin: 0rem 1rem;
        color: #2e2e2e;
        :hover {
            cursor: pointer;
            color: #CBC9C9
        }
    }
}
`