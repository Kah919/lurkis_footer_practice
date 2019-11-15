import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Background from '../images/nelsonmandela.jpg';
import Background2 from '../images/nelson.gif';



export default props => {

    const Section = styled.section`
        height: 100vh;
        display: flex;
        align-items: center;
        background-image: url(${Background2});
        background-size: cover;
        color: white;
        z-index: -1;
        opacity: 0.9;
        border: 5px solid black;
    `;

    const Div = styled.div`
        width: 70%;
        margin: 0 auto;
        color: black;
        padding: 2em;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.4);
        border: 2px solid black;
    `;

    const H1 = styled.h1`
        font-size: 5em;
        margin-bottom: 0.3em;
        letter-spacing: 2px;
    `;

    const H4 = styled.h4`
        margin-bottom: 1.5em;
    `;

    const P = styled.p`
        font-size: 18px;
        letter-spacing: 1px;
    `;

    return(
        <Section>
            <Div>
                <Fade left>
                <H1> { props.header } </H1>
                </Fade>
                
                <Zoom delay={300}>
                    <H4> { props.quote } </H4>
                </Zoom>

                <Zoom delay={1000}>
                    <P> { props.text } </P>
                </Zoom>
            </Div>
        </Section>
    )
}

