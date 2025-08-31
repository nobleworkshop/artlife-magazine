import { useState, useEffect } from 'react'

// API URL для Docker и локальной разработки
const API_BASE_URL = import.meta.env.DEV
	? 'http://localhost:3001'
	: 'http://localhost:3001'

export function useApi(endpoint) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await fetch(`${API_BASE_URL}/${endpoint}`)
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				const result = await response.json()
				setData(result)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [endpoint])

	return { data, loading, error }
}
