const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/tpf';

mongoose.connect(MONGO_URI)
   .then(db=>console.log('BD is Connected'))
   .catch(err=>console.error(err))
module.exports = mongoose;