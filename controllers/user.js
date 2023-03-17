const register = async (req, res) => {
    try {
        console.log('ok');
    }catch(err){
        if(err) return res.status(500)
    }
} 

module.exports = {
    register
}