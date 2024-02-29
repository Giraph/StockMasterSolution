import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema({
    designation: String,
    prix_unitaire: Number,
    quantite: Number,
})

export const Article = mongoose.model('Article', articleSchema)
