import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

export default props => {
    const list = props.links.map(link => <SocialIcon url={`http://${link.platform}.com`}/>)

    return(
       <div>
        { list }
       </div> 
    )
}