import { makeAutoObservable } from 'mobx'

class WordsStore {
	words = []

	constructor() {
		makeAutoObservable(this)
	}

	fetchWords = async () => {
		try {
			const response = await fetch(`/api/words`)
			const data = await response.json()
			this.words = data
		} catch (error) {
			console.log(error)
		}
	}

	addWord = async (newWord) => {
		const response = await fetch(`/api/words/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newWord),
		})
		const data = await response.json()
		this.words.push(data)
	}

	updateWord = async (updatedWord) => {
		const response = await fetch(`/api/words/${updatedWord.id}/update`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedWord),
		})
		const data = await response.json()
		this.words = this.words.map((word) =>
			word.id === updatedWord.id ? data : word
		)
	}

	deleteWord = async (id) => {
		await fetch(`/api/words/${id}/delete`, {
			method: "POST",
		})
		this.words = this.words.filter((word) => word.id !== id)
		}
}

const wordsStore = new WordsStore()

export default wordsStore
