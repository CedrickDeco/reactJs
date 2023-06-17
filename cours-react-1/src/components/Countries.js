import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const Countries = () => {
  const [data, setData] = useState([])
  const [rangeValue, setRangeValue] = useState(35)
  const [selectedRadio, setSelectedRadio] = useState('')
  const radios = ['Africa', 'Asia', 'America', 'Europe', 'Oceania']
	// Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
			.get('https://restcountries.com/v3.1/all')
			.then(res => setData(res.data))
  }, [])
  return (
    <div className='countries'>
      <ul className='radio-container'>
        <input
          type='range'
          min='1'
          max='250'
          defaultValue={rangeValue}
          onChange={e => setRangeValue(e.target.valueAsNumber)}
				/>
        {radios.map(le_continent =>
          <li>
            <input
              type='radio'
              id={le_continent}
              name='continentRadio'
              checked={le_continent === selectedRadio}
              onChange={e => setSelectedRadio(e.target.id)}
						/>
            <label htmlFor={le_continent}>
              {le_continent}
            </label>
          </li>
				)}
      </ul>
      {selectedRadio &&
      <button onClick={() => setSelectedRadio('')}>
					Annuler la recherche
				</button>}
      <ul>
        {data
					.filter(country =>
						country.continents[0].includes(selectedRadio)
					)
					.sort((a, b) => a.name.common - b.name.common)
					.slice(0, rangeValue)
					.map((country, index) =>
  <Card key={index} pays={country} />
					)}
      </ul>
    </div>
  )
}

export default Countries
