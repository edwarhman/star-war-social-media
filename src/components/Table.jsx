import React from 'react'
import PropTypes from 'prop-types'

function Table({ films }) {
  //const {films} = props

  const elements = films.map((film, idx) => (
    <div key={idx}>
      {Object.keys(film).map((prop) => (
        <div key={idx}>{film[prop]}</div>
      ))}
    </div>
  ))

  return <div>{elements}</div>
}

Table.propTypes = {
  films: PropTypes.array,
}

export default Table
