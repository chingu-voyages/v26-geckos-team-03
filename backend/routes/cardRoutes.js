import express from "express"
import {getCards, createCard, updateCard, deleteCard} from "../controllers/cardControllers.js"
import bodyParser from 'body-parser'

var jsonParser = bodyParser.json()
const router=express.Router()

router.get('/',getCards)
router.post('/add',jsonParser,createCard)
router.patch('/update:id',updateCard)
router.patch('/delete:id',deleteCard)

export default router
