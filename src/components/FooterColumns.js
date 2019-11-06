import React from 'react';

export default props => {
    let list = props.links.map(link => {
        return(
            <li>
                <a href={ link.link }> { link.name } </a>
            </li>
        )
    })
    
    return(
        <div className="footer__column">
            <h1> {props.header} </h1>
            <ul> {list} </ul>
        </div>
    )
}