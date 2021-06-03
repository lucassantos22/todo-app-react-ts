import axios from 'axios'
import { Task } from './entities/Task'

const PATH = 'http://localhost:3000/tasks'

export const getTasks = async () => {
    return await axios.get(PATH)
}

export const addTask = async (data: Task) => {
    return await axios.delete(`${PATH}`, { data })
}

export const editTask = async (id: number)=> {
    return await axios.put(`${PATH}/${id}`)
}

export const deleteTask = async (id: number) => {
    return await axios.delete(`${PATH}/${id}`)
}