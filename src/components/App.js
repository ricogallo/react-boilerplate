import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';


const Default = (
  <div>
    Welcome to React Boilerplate
  </div>
)

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
        {this.props.children || Default  }
        <Footer />
      </div>
    )
  }
})

export default App;
