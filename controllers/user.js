const bcrypt = require('bcryptjs');
const {signup, signin} = require('../validation/user');
const salt = bcrypt.genSaltSync(10);
const db = require('../models/connectToDb');
const User = db.users;

const register = async (req, res) => {
    try {
        const errMsg = await signup(req.body, User);
        if(errMsg) return res.status(401).json(errMsg)
        const passwordHashed = bcrypt.hashSync(req.body.password, salt);
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: passwordHashed,
            isAdmin: false,
            refresh_token: '',
        }

        User.create(user).catch((err) => err ? res.status(401) : '');

        return res.status(200).json('Regster berhasil');
    }catch(err){
        if(err) return res.status(500).json({
            message: err
        })
    }
}

const login = async (req, res) => {
    try {
        const errMsg = signin(req.body);
        if(errMsg) return res.status(401).json(errMsg)
    }catch(err) {
        if(err) return res.status(500).json({message: err});
    }
}

module.exports = {
    register,
    login
}