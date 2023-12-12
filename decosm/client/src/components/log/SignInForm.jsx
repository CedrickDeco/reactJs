import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    const emailError = document.querySelector('.email.error')
    const passwordError = document.querySelector('.password.error')

    axios
			.post(
				process.env.REACT_APP_API_URL + 'api/user/login',
				{ email, password },
				{ withCredentials: true }
			)
			.then(res => {
  console.log(res.data)
  if (res.data.errors) {
    emailError.innerHTML = res.data.errors.email
    passwordError.innerHTML = res.data.errors.password
  } else {
    window.location = '/'
  }
})
			.catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleLogin} id='sign-up-form'>
      <label htmlFor='email'>Email</label>
      <br />
      <input
        type='text'
        id='email'
        name='email'
        onChange={e => setEmail(e.target.value)}
        value={email}
			/>
      <div className='email error' />
      <br />
      <label htmlFor='password'>Password</label>
      <br />
      <input
        type='password'
        id='password'
        name='password'
        onChange={e => setPassword(e.target.value)}
        value={password}
			/>
      <div className='password error' />
      <br />
      <input type='submit' value='Se connecter' />
    </form>
  )
}

export default SignInForm
