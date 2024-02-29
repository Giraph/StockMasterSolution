import express from 'express'
import {
    checkCache,
    createArticle,
    getAllArticles,
    searchArticle,
} from '../controllers/articleController'

const router = express.Router()

router.get('/articles', getAllArticles)
router.post('/articles', createArticle)
router.get('/articles/search', checkCache, searchArticle)


export { router as articleRoutes }
