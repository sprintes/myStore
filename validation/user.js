const validator = require('validator');
const signup = ({username, email, password, confPassword}) => {
    if(!username) return 'Username kosong!';
    if(username < 3) return 'Panjang username minimal 3 karakter!';
    if(!email) return 'Email kosong!';
    if(!validator.isEmail(email)) return 'Yang anda masukan bukan email';
    if(!password) return 'Password kosong!';
    if(password < 8) return 'Panjang password minimal 8 karakter!';
    if(password !== confPassword) return 'Konfirm password tidak valid!'
}

module.exports = {
    signup
}