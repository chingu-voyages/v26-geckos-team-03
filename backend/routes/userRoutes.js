import express from 'express'
import {getUsers,createUser} from '../controllers/userControllers.js'

const router =express.Router()

router.get('/',getUsers)
router.post('/add',createUser)

export default router