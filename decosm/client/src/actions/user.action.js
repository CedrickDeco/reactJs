import axios from 'axios'

export const GET_USER = 'GET_USER'
export const UPLOAD_PICTURE = 'UPLOAD_PICTURE'

export const getUser = uid => {
  return dispatch => {
		// le dispatch sont les données qui seront envoyé au reducer; c'est lui qui fait l'action
    axios
			.get(process.env.REACT_APP_API_URL + 'api/user/' + uid)
			.then(res => {
  dispatch({
    type: GET_USER,
    payload: res.data
  })
})
			.catch(err => console.log(err))
  }
}

export const uploadPicture = (data, id) => {
  return dispatch => {
    axios
			.post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
			.then(res => {
  return axios
					.get(process.env.REACT_APP_API_URL + 'api/user/' + id) // Ici on se reccupère le chemin de l'image
					.then(res => {
  console.log(res.data)
  dispatch({
    type: UPLOAD_PICTURE,
    payload: res.data.picture // on change le chemin de notre utilisateur dans le store
  })
})
})
			.catch(err => console.log(err))
  }
}
