import {addNewArticle, getArticles, getArticleWithID} from "../controllers/apiController";

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
        // get contact by id
        .get(getArticleWithID)

        // put request
        .put((req, res) =>
            res.send('PUT request successful!!!')
        )

        // delete request
        .delete((req, res) =>
            res.send('DELETE request successful!!!')
        )
};

export default routes;