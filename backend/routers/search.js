import { Router } from 'express'
import searchController from '../controllers/search.js'
import authenticateToken from '../middlewares/auth.js'

const searchRouter = Router()
searchRouter.post('/', authenticateToken, async (req, res) => searchController(req, res))

export default searchRouter