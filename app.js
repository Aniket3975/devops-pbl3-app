const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('DevOps PBL3 Application is Running!');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'Healthy',
        application: 'DevOps PBL3',
        timestamp: new Date()
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
