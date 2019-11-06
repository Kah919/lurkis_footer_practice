import React from 'react';

export default props => {
    return(
        <section className="mailing__container">
            <h1> {props.header} </h1>
            <p> {props.text} </p>

            <button> {props.button.text} </button>
        </section>
    )
}


// change into function
// function until class is needed