import axios from 'axios'

export const GET_USER = 'GET_USER'
export const ADD_USER_LIKE = 'ADD_USER_LIKE'

export const getUser = () => {
  return dispatch => {
    return axios.get('http://localhost:3000/user').then(res => {
      console.log(res.data);
      dispatch({
        type: GET_USER,
        payload: res.data
      }) // le deuxième dispatch permet t'envoyer l'info au reducer
    })
  }
}

export const addUserLike = (data) => {
  console.log(data);
  return dispatch => {
    return axios.put('http://localhost:3000/user/' + data.id, data).then(res => {
      dispatch({
        type: ADD_USER_LIKE,
        payload: data
      })
    })
  }
}
