const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://machicadomarianella:2KQxzLC5dNCSTUck@tiburoncin-bd.pvwxpg0.mongodb.net/tpf';

mongoose.connect(MONGO_URI)
   .then(db=>console.log('BD is Connected'))
   .catch(err=>console.error(err))
module.exports = mongoose;