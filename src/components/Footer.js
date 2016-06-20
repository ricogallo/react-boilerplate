import React from 'react';
import style from './footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <p>© 2016 ACME, Inc. All Rights Reserved.</p>
      </footer>
    );
  }
}

export default Footer;
