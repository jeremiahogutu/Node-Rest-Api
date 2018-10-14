import {addNewArticle, getContacts} from "../controllers/apiController";

const routes = (app) => {
    app.route('/article')
        .get((req, res, next) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request from: ${req.method}`);
                next();
            }, getContacts)

        // POST endpoint
        .post(addNewArticle);

    app.route('/article/:articleId')
        .put((req, res) =>
            res.send('PUT request successful!!!')
        )
        .delete((req, res) =>
            res.send('DELETE request successful!!!')
        )
};

export default routes;