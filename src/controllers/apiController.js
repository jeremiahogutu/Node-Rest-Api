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

export const getArticles = (req, res) => {
    Article.find({}, (err, article) => {
        if (err) {
            res.send(err)
        }
        res.json(article)
    })
};

export const getArticleWithID = (req, res) => {
    Article.findById(req.params.articleId, (err, article) => {
        if (err) {
            res.send(err)
        }
        res.json(article)
    })
};

export const updateArticle = (req, res) => {
    Article.findOneAndUpdate({ _id: req.params.articleId}, req.body, { new: true}, (err, article) => {
        if (err) {
            res.send(err)
        }
        res.json(article)
    })
};