import express from 'express'
import {
    checkCache,
    createArticle,
    searchArticle,
} from '../controllers/articleController'

const router = express.Router()

router.post('/articles', createArticle)
router.get('/articles/search', checkCache, searchArticle)

export { router as articleRoutes }
