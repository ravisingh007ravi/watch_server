import express from 'express'
import { user, login } from '../controller/user_controller.js'
export const router = express.Router()




router.get('/api/user', user)
router.get('/api/login', login)


