import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import SocialMediaLinks from './SocialMediaLinks';


export default props => {

    const Div = styled.div`
        margin-bottom: 20px;
    `;

    return(
        <Div>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" style={{ height: '16rem' }} src={ props.image } />
                <Card.Body>
                    <Card.Title> { props.name } </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> { props.role } </Card.Subtitle>
                    <SocialMediaLinks links={ props.socialLinks } />
                </Card.Body>
            </Card>
        </Div>
    )
}