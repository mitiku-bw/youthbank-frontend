import axios from 'axios'

const baseUrl = '/api/transactions'

const getAll = () => {
  const promise = axios.get(baseUrl)

  return promise.then(response => response.data)
}

const create = (transaction) => {
  const promise = axios.post(baseUrl, transaction)

  return promise.then(response => response.data)
}

const remove = (id) => {
  const promise = axios.delete(`${baseUrl}/${id}`)

  return promise.then(response => response.data)
}

const update = (transaction) => {
  const promise = axios.put(`${baseUrl}/${transaction.id}`, transaction)

  return promise.then(response => response.data)
}

export default {
  getAll, create, remove, update
}