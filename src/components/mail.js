import React, { Component } from 'react';

class Mail extends Component {
    render() {
        return(
            <div className="mailing__container">
                <h1> Mailing List </h1>
                <p> Subscribe to our mailing list and receive all the latest updates for </p>
                <p> Lurik Labs and Lurik Academy </p>

                <button> Subscribe </button>
            </div>
        )
    }
}

export default Mail;