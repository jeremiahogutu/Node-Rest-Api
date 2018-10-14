import mongoose from 'mongoose'
import {ArticleSchema} from "../models/apiModel";

const Article = mongoose.model('Article', ArticleSchema);

export const addNewArticle = (req, res) => {
    let newArticle = new Article(req.body);

    newArticle.save((err, article) => {
        if (err) {
            res.send(err)
        }
        res.json(article)
    })
};