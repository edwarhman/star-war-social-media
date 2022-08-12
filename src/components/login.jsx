import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './login.css'
import formImage from '../form.gif'
import apiClient from '../utils/axios'
import { fetchPeople, setPassword, setUserName, setError } from './loginSlice'
import { AES } from 'crypto-js'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'react-bootstrap'

export function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const people = useSelector((state) => state.login.people)
  const password = useSelector((state) => state.login.password)
  const userName = useSelector((state) => state.login.userName)
  const error = useSelector((state) => state.login.error)

  const handleSubmit = (event) => {
    event.preventDefault()
    const key = 'Star*Wars*SWAPI*-Test/2022-8-10'
    const decrypted = AES.decrypt(password, key).toString()
    const coicidence = people.find((person) => person.name === userName)
    const encryptedAccess = AES.encrypt(coicidence.hair_color, key).toString()

    if (decrypted === AES.decrypt(encryptedAccess, key).toString()) {
      localStorage.setItem('user', JSON.stringify(coicidence))
      navigate('/profile', { replace: true })
    } else {
      dispatch(setError(true))
    }
  }

  useEffect(() => {
    if (people.length <= 0) {
      const response = apiClient
        .get('people')
        .then((res) => res.data.results)
        .catch(() => [])

      dispatch(fetchPeople(response))
    }
  }, [])

  return (
    <div
      id="formContainer"
      className="form-container shadow-lg border-end border-bottom border-5 border-warning rounded mx-auto container bg-white text-center center"
    >
      <div className="row">
        {window.innerWidth > 700 ? (
          <img
            className="form-image col-8 p-0 rounded-start"
            src={formImage}
          ></img>
        ) : (
          console.log(window.innerWidth)
        )}
        {error ? <Toast>Invalid values</Toast> : null}
        <form className="col-sm-4 px-5 bold" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              className="form-control"
              id="userName"
              aria-describedby="user"
              onChange={(event) => dispatch(setUserName(event.target.value))}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(event) => dispatch(setPassword(event.target.value))}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
