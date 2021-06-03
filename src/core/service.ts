import * as API from './api'
import { Task } from './entities/Task'

function _isHttpCodeSuccess(code: number){
    return (code + '')[0] === '2'
}

async function _request(req: any) {
    const res = await req
    const OK = _isHttpCodeSuccess(res.status)
    let data

    if (res.data) {
        data = {...res.data}
    }

    return { OK, data }
}

export async function getTasks() {
    const res = await _request(API.getTasks())
    if (!res.OK) {
        // TODO add tratamento de mensagem
        return res
    }
    return {
        OK: true,
        data: res.data
    }
}

export async function addTask(data: Task) {
    const res = await _request(API.addTask(data))
    if (!res.OK) {
        // TODO add tratamento de mensagem
        return res
    }
    return {
        OK: true,
        data: res.data
    }
}

export async function editTask(id: number) {
    const res = await _request(API.editTask(id))
    if (!res.OK) {
        // TODO add tratamento de mensagem
        return res
    }
    return {
        OK: true,
        data: res.data
    }
}

export async function deleteTask(id: number) {
    const res = await _request(API.deleteTask(id))
    if (!res.OK) {
        // TODO add tratamento de mensagem
        return res
    }
    return {
        OK: true,
        data: res.data
    }
}