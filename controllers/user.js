const {signup} = require('../validation/user');
const register = async (req, res) => {
    try {
        const errMsg = register(req.body);
        return res.status(200).json('Regster berhasil');
    }catch(err){
        if(err) return res.status(500)
    }
} 

module.exports = {
    register
}