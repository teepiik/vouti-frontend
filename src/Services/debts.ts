import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/debts'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export default { getAll }
