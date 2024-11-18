const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./db/connect');

const app = express();

// Middleware
app.use(bodyParser.json());

// Root route to test the server
app.get('/', (req, res) => {
    res.send('Welcome to my page');
});

// Initialize database connection and start server
(async () => {
    try {
        await connectToDb(); // Connect to MongoDB
        console.log('Database connection established');

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
    }
})();
