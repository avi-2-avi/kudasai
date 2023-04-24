import { Router } from 'express'
import { loginController, signUpController } from '../controllers/index.js'

const coreRouter = Router()

coreRouter.post('/login', async (req, res) => loginController(req, res))
coreRouter.post('/signup', async (req, res) => signUpController(req, res))

export default coreRouter