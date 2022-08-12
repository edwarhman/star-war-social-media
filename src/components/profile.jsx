import React from 'react'
import { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import apiClient from '../utils/axios'
import { fetchFilm } from './profileSlice'
import Table from './Table'

export function Profile() {
  const dispatch = useDispatch()
  const films = useSelector((state) => state.profile.films)
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    user.films.forEach((film) => {
      const id = film.match(/[0-9]+/g)[0]
      console.log(id)
      const response = apiClient
        .get(`films/${id}`)
        .then((res) => res.data)
        .catch(() => null)

      dispatch(fetchFilm(response))
    })
  }, [])

  const headers = [
    { text: 'Title', value: 'title' },
    { text: 'Director', value: 'director' },
    { text: 'Opening Crawl', value: 'opening_crawl' },
  ]

  const filmsElements = () => {
    return films.map((film) => ({
      title: film.title,
      director: film.director,
      openingCrawl: film.opening_crawl,
    }))
  }

  return (
    <div>
      <ListGroup className="text-center" as="ul">
        <ListGroup.Item as="li">
          <h1>{user.name}</h1>
        </ListGroup.Item>
        <ListGroup.Item as="li">{`Created: ${user.created}`}</ListGroup.Item>
        <ListGroup.Item as="li">
          <h2>Films</h2>
          <Table films={filmsElements()} headers={headers}></Table>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}
