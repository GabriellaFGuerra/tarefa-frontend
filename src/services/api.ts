import axios from 'axios'

const api = axios.create({
    baseURL: 'http://task-project-gabriella.herokuapp.com/tasks'
})

export default api;