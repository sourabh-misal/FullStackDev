
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin123:oLYZ7OUoeBcLs7V6@cluster0.38jlucu.mongodb.net/Usernewapp");

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
});

const user = new User({
    name: 'noob Ren',
    email: 'noob@gmail.com',
    password: '123456'
});

user.save();