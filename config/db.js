const mongoose = require('mongoose');

const mongoConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/portfolio', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

module.exports = mongoConnect;