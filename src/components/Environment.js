import React, { PropTypes } from 'react'

import styles from './environment.module.css'

const Environment = React.createClass({
  render () {
    return (
      <div >
        <h2>Showing Environment Variables loaded from .env file</h2>
        <ul>
          <li>DB_HOST = {process.env.DB_HOST}</li>
          <li>DB_USER = {process.env.DB_USER}</li>
          <li>DB_PASS = {process.env.DB_PASS}</li>
        </ul>
        <div className={styles.wrapper}>Adding custom style using CSS-Modules</div>
      </div>
    )
  }
})

export default Environment;
