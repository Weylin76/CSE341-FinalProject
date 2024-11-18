const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI;

let client;

const mongodb = async () => {
    if (!client) {
        try {
            if (!uri) {
                throw new Error('MongoDB URI is not defined');
            }
            client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
            console.log('Connected to database');
        } catch (err) {
            console.error('Database connection failed:', err);
            throw err;
        }
    }
    return client.db();
};

module.exports = mongodb;
