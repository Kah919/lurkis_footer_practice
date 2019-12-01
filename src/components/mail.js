import React from 'react';
import styled from 'styled-components';
// import Button from 'react-bootstrap/button'

export default props => {

    const Button = styled.button`
        padding: 10px 20px 10px 20px;
        background-color: white;
        border-radius: 5px;
        margin-top: 2%;
    `;

    return(
        <section className="mailing__container">
            <h1> {props.header} </h1>
            <p> {props.text} </p>

            <Button> {props.button.text} </Button>
        </section>
    )
}

{/* <Button variant="primary">Primary</Button> */}
