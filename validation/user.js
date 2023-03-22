const validator = require('validator');
const signup = async ({username, email, password, confPassword}, User) => {
    const duplikat = await User.findOne({where: {username}})

    if(duplikat.username) return 'Nama sudah digunakan!';
    if(!username) return 'Username kosong!';
    if(username < 3) return 'Panjang username minimal 3 karakter!';
    if(!email) return 'Email kosong!';
    if(!validator.isEmail(email)) return 'Yang anda masukan bukan email';
    if(!password) return 'Password kosong!';
    if(password < 8) return 'Panjang password minimal 8 karakter!';
    if(password !== confPassword) return 'Konfirm password tidak valid!';
}

const signin = ({username, email, password}) => {
    if(!username) return 'Username kosong!';
    if(username < 3) return 'Panjang username minimal 3 karakter!';
    if(!email) return 'Email kosong!';
    if(!validator.isEmail(email)) return 'Yang anda masukan bukan email';
    if(!password) return 'Password kosong!';
    if(password < 8) return 'Panjang password minimal 8 karakter!';
}

module.exports = {
    signup,
    signin
}