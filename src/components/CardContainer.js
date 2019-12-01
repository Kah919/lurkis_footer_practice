import React from 'react';
import Card from './Card.js';
import styled from 'styled-components';

export default props => {

    const Div = styled.div`
        background-color: #add8e6;
        padding: 20px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-items: center;
        border: 4px solid black;
    `;

    let lists = props.card.map(list => {
        return <Card image={ list.image } name={ list.name } text={ list.text } role={ list.role } socialLinks= { list.socialLinks }/>
    })

    return(
        <Div>
            { lists }
        </Div>
    )
}