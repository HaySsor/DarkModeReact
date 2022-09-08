import React from 'react'
import styles from './Main.module.css'
import logo from '../assets/react.svg'


function Main({onDark}) {
  return (
    <main className={`${styles.wrapper} ${onDark ? styles.dark : ''}`}>
      <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img src={logo}/>
      </main>
  )
}

export default Main