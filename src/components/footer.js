import React, { Component } from 'react';
import AboutFooter from './aboutFooter.js';
import ExploreFooter from './exploreFooter.js';
import FollowFooter from './followFooter.js';
import LegalFooter from './legalFooter.js';




class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="footer__list">
                    <AboutFooter />
                    <ExploreFooter />
                    <FollowFooter />
                    <LegalFooter />
                </div>

                <div className="trademark"> ©2019 Lurik Labs All Rights Reserved </div>
            </footer>
        )
    }
}

export default Footer;