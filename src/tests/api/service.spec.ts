import faker from 'faker';
import { Task } from '../../core/entities/Task';
import * as service from '../../core/service';

const getSpy = jest.spyOn(require('axios'), 'get')
const postSpy = jest.spyOn(require('axios'), 'post')
const putSpy = jest.spyOn(require('axios'), 'put')
const deleteSpy = jest.spyOn(require('axios'), 'delete')

const taskModel: Task = {
    name: 'name',
    description: 'description',
    done: false
}

describe('SERVICE', ()=>{
    it('should parse responde code to boolean', () => {
        expect(service._isHttpCodeSuccess(200)).toBeTruthy()
        expect(service._isHttpCodeSuccess(201)).toBeTruthy()
        expect(service._isHttpCodeSuccess(400)).toBeFalsy()
        expect(service._isHttpCodeSuccess(404)).toBeFalsy()
        expect(service._isHttpCodeSuccess(500)).toBeFalsy()
    })
    it('should getTasks with success', async () => {
        getSpy.mockReturnValueOnce(Promise.resolve({ status: 200, data: {} }))
        const { OK } = await service.getTasks()
        expect(OK).toBeTruthy()
    })
    it('should getTasks with error', async () => {
        getSpy.mockReturnValueOnce(Promise.resolve({ status: 500, data: {} }))
        const { OK } = await service.getTasks()
        expect(OK).toBeFalsy()
    })
    it('should addTask with success', async () => {
        postSpy.mockReturnValueOnce(Promise.resolve({ status: 200, data: {} }))
        const { OK } = await service.addTask(taskModel)
        expect(OK).toBeTruthy()
    })
    it('should addTask with error', async () => {
        postSpy.mockReturnValueOnce(Promise.resolve({ status: 500, data: {} }))
        const { OK } = await service.addTask(taskModel)
        expect(OK).toBeFalsy()
    })
    it('should editTask with success', async () => {
        putSpy.mockReturnValueOnce(Promise.resolve({ status: 200, data: {} }))
        const { OK } = await service.editTask(faker.datatype.number())
        expect(OK).toBeTruthy()
    })
    it('should editTask with error', async () => {
        putSpy.mockReturnValueOnce(Promise.resolve({ status: 500, data: {} }))
        const { OK } = await service.editTask(faker.datatype.number())
        expect(OK).toBeFalsy()
    })
    it('should deleteTask with success', async () => {
        deleteSpy.mockReturnValueOnce(Promise.resolve({ status: 200, data: {} }))
        const { OK } = await service.deleteTask(faker.datatype.number())
        expect(OK).toBeTruthy()
    })
    it('should deleteTask with error', async () => {
        deleteSpy.mockReturnValueOnce(Promise.resolve({ status: 500, data: {} }))
        const { OK } = await service.deleteTask(faker.datatype.number())
        expect(OK).toBeFalsy()
    })
})