import mongoose from 'mongoose'
import cardModel from '../models/cardModel.js'

export const getCards= async (req, res)=>{
    try {
        const cards= await cardModel.find()
        res.status(200).json(cards)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const createCard =async(req, res)=>{
    const card=req.body
    const newCard= new cardModel(card)
    try {
        await newCard.save()
        res.status(201).json(newCard)
    } catch (error) {
        res.status(409).json(error.message)
    }
}

export const updateCard =async(req, res)=>{
    const {id}=req.params
    const card=req.body
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('The card with this ID does not exist')
    const updatedCard=await cardModel.findByIdAndUpdate(id, {...card, id}, {new:true})
    res.json(updatedCard)
}

export const deleteCard =async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('The card with this ID does not exist')
    await cardModel.findByIdAndDelete(id)
    res.json('The card was deleted successfully')
}


