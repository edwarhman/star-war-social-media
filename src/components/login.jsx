import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './login.css'
import formImage from '../form.gif'
import apiClient from '../utils/axios'
import { fetchPeople } from './loginSlice'

export function Login() {
  const dispatch = useDispatch()
  const people = useSelector((state) => state.login.people)

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
        <img
          className="form-image col-8 p-0 rounded-start"
          src={formImage}
        ></img>
        <form className="col-4 px-5 bold" onSubmit={() => {}}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              className="form-control"
              id="userName"
              aria-describedby="user"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-warning">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
