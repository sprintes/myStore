const bcrypt = require('bcryptjs');
const {signup} = require('../validation/user');
const salt = bcrypt.genSaltSync(10);

const register = async (req, res) => {
    try {
        const errMsg = signup(req.body);
        if(errMsg) return res.status(401).json(errMsg)
        const passwordHashed = bcrypt.hashSync(req.body.password, salt);
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: passwordHashed,
            isAdmin: false,
            refresh_token: '',
        }
        console.log(user);
        return res.status(200).json('Regster berhasil');
    }catch(err){
        if(err) return res.status(500).json(err)
    }
} 

module.exports = {
    register
}