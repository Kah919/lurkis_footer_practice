import React from 'react';
import FooterColumns from './FooterColumns';

export default props => {
    let lists = props.lists.map(list => {
        return <FooterColumns header={ list.header } links={ list.links }/>
    })

    return(
        <footer>
            <div className="footer__list">
                <article className="footer__column">
                    <h1> { props.header } </h1>
                    <p> { props.text } </p>
                </article>
                { lists }
            </div>

            <div className="trademark"> ©2019 Lurik Labs All Rights Reserved </div>
        </footer>
    )
}

