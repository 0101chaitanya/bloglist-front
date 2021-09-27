import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    return response.data
}

export default login;