import React from 'react';
import Mail from './components/mail.js';
import Footer from './components/footer.js';
import About from './components/About.js';

export default () => {
  let data = {
    about: {
      header: 'Our Goal',
      quote: "It always seems impossible until it's done - Nelson Mandela",
      text: "We want to help undergraduate natural science students learn and retain information using game based learning. Since 65% of the population are visual learners, we use games as a visual medium to learn and retain natural science topics such as environmental science. It is believed that the ability to recognize, understand and associate organisms in a VR experience allows for an organic way of learning about ecosystems. Using VR is an option to immerse students in a simulated environment for a more realistic experience. It allows the user to be able to make connections as one would in a real life situation."
    },

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
    <>

      <About 
          header={ data.about.header }
          quote={ data.about.quote }
          text={ data.about.text }
      />
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
    </>
  );
}



