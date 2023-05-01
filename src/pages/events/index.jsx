import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import './style.css'

export const EventsPage = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    mockFetch('/events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data)
      })
      .catch((err) => {
        setError('произошла ошибка')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {
        events.map((e) => (
          <div className="events-item" key={e.id}>
            <h1>{e.name}</h1>
            <p>{e.desc}</p>
            <address>{e.place}</address>
          </div>
        ))
      }
    </div>
  )
}