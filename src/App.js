import React from 'react';
import Mail from './components/mail.js';
import Footer from './components/footer.js';

export default () => {
  let data = {
    mailing: {
      header: 'Mailing List',
      text: 'Subscribe to our mailing list and receive all the latest updates for Lurik Labs and Lurik Academy',
      button: {
        link: '',
        text: 'Subscribe'
      }
    },
    footer: {
      header: 'Lurik Labs',
      text: 'Ullamco eiusmod ullamco ex aliqua officia fugiat excepteur aliquip est quis proident.',
      lists: [
        {
          header: 'Explore',
          links: [
            { name: 'Home', link: ''},
            { name: 'About', link: ''},
            { name: 'Academy', link: ''},
            { name: 'Contact', link: ''}
          ]
        },
        {
          header: 'Follow',
          links: [
            { name: 'LinkedIn', link: ''},
            { name: 'Facebook', link: ''},
            { name: 'Instragram', link: ''},
            { name: 'Twitter', link: ''}
          ]
        },
        {
          header: 'Legal',
          links: [
            { name: 'Privacy Policy', link: ''},
            { name: 'Terms & Conditions', link: ''}
          ]
        }
      ]
    }
  }

  return (
    <div className="container">
      <Mail 
        header={ data.mailing.header }
        text={ data.mailing.text }
        button={ data.mailing.button }
      />
      <Footer 
        header={ data.footer.header }
        text={ data.footer.text }
        lists={ data.footer.lists }
      />
    </div>
  );
}

