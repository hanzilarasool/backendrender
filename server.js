const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World! after deployment changes been made switch to new branch');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
