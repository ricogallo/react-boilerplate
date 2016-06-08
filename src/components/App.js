import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
        {this.props.children || 'Welcome to React Boilerplate' }
        <Footer />
      </div>
    )
  }
})

export default App;
