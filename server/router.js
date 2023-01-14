const express = require('express');
const jwt = require('jsonwebtoken');
const keys = require('./configs/keys');
const router = express.Router();
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const statusCodes = require('./constants/statusCodes');

router.use(function timeLog(req, res, next) {
    console.log(`Time: ${Date.now()} : Request ${req.url}`);
    next();
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['token'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, keys.jwt.secretKey, (err, authData) => {
            if (!err) {
                req.authData = authData;
                next();
            } else {
                res.status(200).send({ status: statusCodes.TOKEN_EXPIRED });
            }
        });
    } else {
        res.sendStatus(500);
    }
};

//routes
router.post('/api/v1/login', userController.authenticate);
router.post('/api/v1/register', userController.register);
router.get('/api/v1/user', verifyToken, userController.getUser);
router.get('/api/v1/users', verifyToken, userController.getAll);
router.post('/api/v1/save', verifyToken, categoryController.saveCategory);
router.post('/api/v1/edit', verifyToken, categoryController.editCategory);
router.post('/api/v1/list', verifyToken, categoryController.listCategory);
router.delete('/api/v1/delete/:type/:userId/:id', verifyToken, categoryController.deleteCategory);

module.exports = router;