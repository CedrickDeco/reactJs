import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { UidContext } from './components/AppContext'
import TheRoute from './components/routes/TheRoute'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUser } from './actions/user.action'

const App = () => {
  const [uid, setuid] = useState(null)
  const dispatch = useDispatch() // Ce dispatch permet de declencher une action

  useEffect(
		() => {
  const fetchToken = async () => {
    await axios
					.get(process.env.REACT_APP_API_URL + 'jwtid', {
  withCredentials: true
})
					.then(res => {
  console.log(res.data)
  setuid(res.data)
})
					.catch(err => console.log('No token'))
  }
  fetchToken()
  if (uid) {
    dispatch(getUser(uid))
  }
},
		[uid]
	)

  return (
    <div>
      <UidContext.Provider value={uid}>
        <TheRoute />
      </UidContext.Provider>
    </div>
  )
}

export default App
