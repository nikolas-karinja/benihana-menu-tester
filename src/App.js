import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { SPECIALTIES } from './menu';

let reveals = []

function App() {
	const [specialty, setSpecialty] = useState(Object.keys(SPECIALTIES)[Math.floor(Math.random() * Object.keys(SPECIALTIES).length)])
	const [_, update] = useState(Date.now())

	const _changeSpecialty = () =>
	{
		reveals = []

		setSpecialty(Object.keys(SPECIALTIES)[Math.floor(Math.random() * Object.keys(SPECIALTIES).length)])
	}

	const _reveal = () =>
	{
		if (reveals.length === SPECIALTIES[specialty].length)
			reveals = []
		else
		{
			reveals.push(<div>{SPECIALTIES[specialty][reveals.length]}</div>)
		}

		update(Date.now())

		return reveals
	}

  	return <div className="App">
		<br></br>
		<b>{specialty}</b>
		<br></br>
		<br></br>
		<div>{reveals}</div>
		<br></br>
		<button onMouseDown={_changeSpecialty}>Get New Specialty</button>
		<button onMouseDown={_reveal}>Reveal</button>
	</div>
}

export default App;
