import axios from 'axios'

const client = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default client
