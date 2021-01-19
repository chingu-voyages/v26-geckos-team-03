import express from "express"
import {getCards, createCard, updateCard, deleteCard} from "../controllers/cardControllers.js"

const router=express.Router()

router.get('/',getCards)
router.post('/add',createCard)
router.patch('/update:id',updateCard)
router.patch('/delete:id',deleteCard)

export default router

