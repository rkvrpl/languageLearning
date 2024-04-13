import words from './../../../data/data.json'

// import { useState } from 'react'
import CardOfWord from '../CardOfWord'

const Carousel = (props) => {
	const {} = props

	// const [show , setShow] = useState(true)

	// const handelShowState = () =>{
	// 	setShow(!show)
	// }

	return(
		<>
		{words.map((item) => {return(
			<CardOfWord 
			english={item.english} 
			transcription={item.transcription} 
			russian={item.russian}  
			key={item.id}/>
		)})}
		</>
	)
}
export default Carousel