import { Request, Response } from 'express'
import { Article } from '../models/Article'
import { redisClient } from '../server'

export const createArticle = async (req: Request, res: Response) => {
    try {
        const { designation, prix_unitaire } = req.body
        const article = new Article({ designation, prix_unitaire })
        await article.save()
        res.status(201).json(article)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const searchArticle = async (req: Request, res: Response) => {
    try {
        const { query } = req.body

        // Effectuer la recherche dans MongoDB
        const articles = await Article.find({
            designation: { $regex: query, $options: 'i' },
        })

        // Enregistrer les résultats dans Redis avec une expiration de 1 heure
        await redisClient.setEx(query, 3600, JSON.stringify(articles))

        res.status(200).json(articles)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const checkCache = async (
    req: Request,
    res: Response,
    next: () => void
) => {
    try {
        const { query } = req.body

        // Vérifier si la recherche est présente dans Redis
        const cachedResult = await redisClient.get(query)
        if (cachedResult) {
            // Renvoyer les résultats depuis Redis
            console.log('Cache hit')
            return res.status(200).json(JSON.parse(cachedResult))
        }

        console.log('Cache miss')
        // Passer à la prochaine étape
        next()
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
