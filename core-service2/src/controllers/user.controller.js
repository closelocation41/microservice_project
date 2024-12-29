const {ERROR,SUCCESS} = require('../config/error.config')
const userService = require('../services/user.service')
const mainHelper = require('../helpers/main.helper')

const getUsers = async (req, res)=>{
    try {
        const result =await userService.getUsers(req);
        let data = SUCCESS.READ.data(result)
        res.status(SUCCESS.READ?.statusCode).json(data);
    } catch (error) {
        let err = mainHelper.showError(error);
        res.status(err?.errorCode).json(err);
    }
}

const createUser = async (req, res)=>{
    try {
        const result = await userService.createUser(req?.body);
        let data = SUCCESS.READ.data(result)
        res.status(SUCCESS.READ?.statusCode).json(data);
    } catch (error) {
        let err = mainHelper.showError(error);
        res.status(err?.errorCode).json(err);
    }
}

const updateUser = async (req, res)=>{
    try {
        let result = await userService.updateUser(req);
        let data = SUCCESS.READ.data(result)
        res.status(SUCCESS.READ?.statusCode).json(data);
    } catch (error) {
        let err = mainHelper.showError(error);
        res.status(err?.errorCode).json(err);
    }
}

const deleteUser = async (req, res)=>{
    try {
        let result =userService.getUsers();
        let data = SUCCESS.READ.data(result)
        res.status(SUCCESS.READ?.statusCode).json(data);
    } catch (error) {
        let err = mainHelper.showError(error);
        res.status(err?.errorCode).json(err);
    }
}

module.exports =  {getUsers,createUser,updateUser,deleteUser}