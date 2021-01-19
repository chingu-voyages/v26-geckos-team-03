 
import userModel from '../models/userModel.js'

export const getUsers = async (req, res)=>{
    try {
        const users= await userModel.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const createUser = async (req, res)=>{
    const user=req.body
    const newUser=new userModel(user)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json(error.message)
    }
}

