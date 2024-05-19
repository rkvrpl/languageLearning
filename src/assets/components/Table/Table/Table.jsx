import TableHeader from '../TableHeader/TableHeader.jsx'
import TableWords from '../TableWords/TableWords.jsx'
// import words from '../../../data/data.json'
import WordContext from '../../../Context/WordContext.jsx'
import { useContext, useEffect } from 'react'


const Table = (props) =>{

	const { words, fetchWords } =
    useContext(WordContext)

	useEffect(() => {
		fetchWords()
	}, [])

	return(
		<TableHeader childComponent={
			words.map((item) => {return(
			<TableWords 
			english={item.english} 
			transcription={item.transcription} 
			russian={item.russian} 
			tags={item.tags} 
			key={item.id}
			id ={item.id}/>
		)})}
		/>
	)
}
export default Table
