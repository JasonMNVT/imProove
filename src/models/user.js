const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.findUser = async(username, password) => {
    const user = await User.findOne({username});
    if (!user) throw new Error('Erreur, pas possible de se connecter !');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Erreur, pas possible de se connecter !');
    return user;
}

userSchema.pre('save', async function() {
    if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 8);
})

const User = mongoose.model('User', userSchema);

module.exports = User;