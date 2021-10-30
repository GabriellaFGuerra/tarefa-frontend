import axios from 'axios'

const api = axios.create({
    baseURL: 'http://task-project-gabriella.herokuapp.com/'
})

export default api;