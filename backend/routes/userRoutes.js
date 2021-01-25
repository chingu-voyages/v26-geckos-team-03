import express from 'express'
import {getUsers,createUser} from '../controllers/userControllers.js'
import bodyParser from 'body-parser'

var jsonParser = bodyParser.json()
const router =express.Router()

router.get('/',getUsers)
router.post('/add',jsonParser,createUser)

export default router