import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


export default props => {

    const Section = styled.section`
        height: 100vh;
        width: 60%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        background-image: url("paper.gif");
    `;

    const H1 = styled.h1`
        font-size: 5em;
        margin-bottom: 0.3em;
        letter-spacing: 2px;
    `;

    const H4 = styled.h4`
        margin-bottom:  1em;
    `;

    const P = styled.p`
        font-size: 18px;
        letter-spacing: 1px;
    `;

    return(
        <Section>
            <div>
                <Fade left>
                <H1> { props.header } </H1>
                </Fade>
                
                <Zoom delay={300}>
                    <H4> { props.quote } </H4>
                </Zoom>

                <Zoom delay={1000}>
                    <P> { props.text } </P>
                </Zoom>
            </div>
        </Section>
    )
}

