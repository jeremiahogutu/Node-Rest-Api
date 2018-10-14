import {
    addNewArticle,
    deleteArticle,
    getArticles,
    getArticleWithID,
    updateArticle
} from "../controllers/apiController";

const routes = (app) => {
    app.route('/article')
        .get((req, res, next) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request from: ${req.method}`);
                next();
            }, getArticles)

        // POST endpoint
        .post(addNewArticle);

    app.route('/article/:articleId')

        // get article by id
        .get(getArticleWithID)

        // put request
        .put(updateArticle)

        // delete request
        .delete(deleteArticle)
};

export default routes;