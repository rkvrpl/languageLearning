import TableHeader from '../TableHeader/TableHeader'
import TableWords from '../TableWords/TableWords'
import wordsStore from '../../../stores/WordsStores'
import { observer } from 'mobx-react'

const Table = observer((props) =>{
	const { words } = wordsStore

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
		)})}/>
	)
})
export default Table
