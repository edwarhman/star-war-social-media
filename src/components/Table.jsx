import React from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'

function MyTable({ films, headers }) {
  //const {films} = props

  const elements = films.map((film, idx) => (
    <tr key={idx}>
      {Object.keys(film).map((prop, idx) => (
        <td key={idx + 20}>{film[prop]}</td>
      ))}
    </tr>
  ))

  const titles = headers.map((header, idx) => <th key={idx}>{header.value}</th>)

  return (
    <Table striped bordered hover>
      <thead>{titles}</thead>
      <tbody>{elements}</tbody>
    </Table>
  )
}

MyTable.propTypes = {
  films: PropTypes.array,
  headers: PropTypes.array,
}

export default MyTable
