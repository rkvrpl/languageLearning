import TableHeader from '../TableHeader/TableHeader.jsx'
import TableWords from '../TableWords/TableWords.jsx'
import words from '../../../data/data.json'

const Table = (props) =>{

	return(
		<TableHeader childComponent={
			words.map((item) => {return(
			<TableWords 
			english={item.english} 
			transcription={item.transcription} 
			russian={item.russian} 
			tags={item.tags} 
			key={item.id}/>
		)})}/>
	)
}
export default Table
