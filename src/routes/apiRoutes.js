import {
    addNewArticle,
    deleteArticle,
    getArticles,
    getArticleWithID,
    updateArticle
} from "../controllers/apiController";

import {login, register, loginRequired} from "../controllers/userController";

const routes = (app) => {
    app.route('/article')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request from: ${req.method}`);
            next();
        }, loginRequired, getArticles)

        // POST endpoint
        .post(loginRequired, addNewArticle);

    app.route('/article/:articleId')

        // get article by id
        .get(loginRequired, getArticleWithID)

        // put request
        .put(loginRequired, updateArticle)

        // delete request
        .delete(loginRequired, deleteArticle);

    // register route
    app.route('/auth/register')
        .post(register);

    // login route
    app.route('/auth/login')
        .post(login);
};

export default routes;