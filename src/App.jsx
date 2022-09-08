import React,{useState}from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main"
import styles from './App.module.css'

function App() {

	const [dark,setDart] = useState(false)

	const useDarkMode =() =>{
		console.log('tag')
		setDart(prev => !prev)
	}


	return (
		<div className={styles.container}>
			<Navbar darkMode={useDarkMode} onDark={dark}/>
			<Main onDark={dark} />
		</div>
	);
}

export default App;
