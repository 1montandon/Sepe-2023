import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.api-futebol.com.br/v1/',
  headers: {
    Authorization: `Bearer test_b1a19ab6130fde05963c50e6373f33`
  }
})

export default api