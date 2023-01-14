const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const keys = require('../configs/keys');
const statusCodes = require('../constants/statusCodes');

async function getAll(req, res) {
    const users = await User.find({});
    try {
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

async function getUser(req, res) {
    const { email, password } = req.authData;
    const user = await User.findOne({ email, password });
    try {
        res.send({ email: user.email, firstName: user.firstName, lastName: user.lastName, id: user._id });
    } catch (err) {
        res.status(500).send(err);
    }
};

async function register(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        res.json({ status: 'SUCCESS' });
    } catch (err) {
        res.status(500).send(err);
    }
};

async function authenticate(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            jwt.sign({ email, password }, keys.jwt.secretKey, { expiresIn: '1h' }, (err, token) => {
                if (!err) {
                    res.status(200).send({ token });
                } else {
                    res.status(401).send({ status: statusCodes.TOKEN_EXPIRED });
                }
            })
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { register, getAll, getUser, authenticate };



